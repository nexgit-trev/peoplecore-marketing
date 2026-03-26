#!/bin/bash
# ═══════════════════════════════════════════════════════════════════
# PeopleCore — Hetzner Ubuntu 22.04 Full Setup Script
# Run as root on a fresh Hetzner VPS
# Usage: bash setup.sh
# ═══════════════════════════════════════════════════════════════════

set -e

# ── Config — edit these before running ──────────────────────────────
DOMAIN_APP="app.peoplecore.co.za"
DOMAIN_MARKETING="peoplecore.co.za"
DOMAIN_WWW="www.peoplecore.co.za"
EMAIL_SSL="hello@peoplecore.co.za"
GITHUB_REPO_APP="https://github.com/nexgit-trev/nexbridge-hr"
GITHUB_REPO_MARKETING="https://github.com/nexgit-trev/peoplecore-marketing"
DB_NAME="nexbridge_hr"
DB_USER="nexbridge"
DB_PASS="$(openssl rand -base64 32)"
# ─────────────────────────────────────────────────────────────────────

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║        PeopleCore — Hetzner Setup                ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# ── 1. System update ─────────────────────────────────────────────────
echo "▶ [1/10] Updating system..."
apt-get update -qq && apt-get upgrade -y -qq
apt-get install -y -qq curl git wget unzip ufw fail2ban htop nano

# ── 2. Node.js 20 ────────────────────────────────────────────────────
echo "▶ [2/10] Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y -qq nodejs
npm install -g pm2

# ── 3. PostgreSQL ────────────────────────────────────────────────────
echo "▶ [3/10] Installing PostgreSQL..."
apt-get install -y -qq postgresql postgresql-contrib
systemctl enable postgresql
systemctl start  postgresql

sudo -u postgres psql << PSQL
CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';
CREATE DATABASE $DB_NAME OWNER $DB_USER;
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
\c $DB_NAME
GRANT ALL ON SCHEMA public TO $DB_USER;
PSQL
echo "   DB_PASS=$DB_PASS  ← Save this!"

# ── 4. Nginx ─────────────────────────────────────────────────────────
echo "▶ [4/10] Installing Nginx..."
apt-get install -y -qq nginx
systemctl enable nginx

# ── 5. Certbot (SSL) ─────────────────────────────────────────────────
echo "▶ [5/10] Installing Certbot..."
apt-get install -y -qq certbot python3-certbot-nginx

# ── 6. Firewall ──────────────────────────────────────────────────────
echo "▶ [6/10] Configuring firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw --force enable

# ── 7. Clone & build HR App ──────────────────────────────────────────
echo "▶ [7/10] Cloning & building HR App..."
cd /var/www
git clone $GITHUB_REPO_APP hr-app
cd hr-app
npm ci

# Create .env for HR app
cat > .env << ENV_APP
DATABASE_URL="postgresql://$DB_USER:$DB_PASS@localhost:5432/$DB_NAME"
JWT_SECRET="$(openssl rand -base64 64 | tr -d '\n')"
JWT_EXPIRES_IN="8h"
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://$DOMAIN_APP
RESEND_API_KEY=REPLACE_WITH_RESEND_KEY
RESEND_FROM_EMAIL=hr@peoplecore.co.za
APP_NAME=PeopleCore HR
ENV_APP

npx prisma generate
npx prisma migrate deploy
npm run build

# ── 8. Clone & build Marketing Site ─────────────────────────────────
echo "▶ [8/10] Cloning & building Marketing Site..."
cd /var/www
git clone $GITHUB_REPO_MARKETING marketing
cd marketing
npm ci

cat > .env << ENV_MKT
RESEND_API_KEY=REPLACE_WITH_RESEND_KEY
RESEND_FROM_EMAIL=noreply@peoplecore.co.za
ADMIN_EMAIL=hello@peoplecore.co.za
NEXT_PUBLIC_APP_URL=https://$DOMAIN_APP
ENV_MKT

npm run build

# ── 9. PM2 process manager ───────────────────────────────────────────
echo "▶ [9/10] Setting up PM2..."
cat > /var/www/ecosystem.config.js << PM2
module.exports = {
  apps: [
    {
      name:   'peoplecore-app',
      script: '/var/www/hr-app/.next/standalone/server.js',
      cwd:    '/var/www/hr-app',
      env: {
        NODE_ENV: 'production',
        PORT:     3000,
        HOSTNAME: '127.0.0.1',
      },
      instances:   1,
      exec_mode:   'fork',
      watch:       false,
      max_restarts:10,
      restart_delay: 4000,
      error_file:  '/var/log/pm2/app-error.log',
      out_file:    '/var/log/pm2/app-out.log',
    },
    {
      name:   'peoplecore-marketing',
      script: '/var/www/marketing/.next/standalone/server.js',
      cwd:    '/var/www/marketing',
      env: {
        NODE_ENV: 'production',
        PORT:     3001,
        HOSTNAME: '127.0.0.1',
      },
      instances:   1,
      exec_mode:   'fork',
      watch:       false,
      max_restarts:10,
      restart_delay: 4000,
      error_file:  '/var/log/pm2/marketing-error.log',
      out_file:    '/var/log/pm2/marketing-out.log',
    },
  ],
}
PM2

mkdir -p /var/log/pm2
pm2 start /var/www/ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root | tail -1 | bash

# ── 10. Nginx config ─────────────────────────────────────────────────
echo "▶ [10/10] Configuring Nginx..."

# Marketing site — peoplecore.co.za
cat > /etc/nginx/sites-available/marketing << NGINX_MKT
server {
    listen 80;
    server_name $DOMAIN_MARKETING $DOMAIN_WWW;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    gzip_min_length 256;

    location /_next/static/ {
        alias /var/www/marketing/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /public/ {
        alias /var/www/marketing/public/;
        expires 7d;
    }

    location / {
        proxy_pass         http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade \$http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host \$host;
        proxy_set_header   X-Real-IP \$remote_addr;
        proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 60s;
    }
}
NGINX_MKT

# HR App — app.peoplecore.co.za
cat > /etc/nginx/sites-available/hr-app << NGINX_APP
server {
    listen 80;
    server_name $DOMAIN_APP;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    gzip_min_length 256;

    client_max_body_size 20M;

    location /_next/static/ {
        alias /var/www/hr-app/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /public/ {
        alias /var/www/hr-app/public/;
        expires 7d;
    }

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade \$http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host \$host;
        proxy_set_header   X-Real-IP \$remote_addr;
        proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 120s;
    }
}
NGINX_APP

# Enable sites
ln -sf /etc/nginx/sites-available/marketing /etc/nginx/sites-enabled/
ln -sf /etc/nginx/sites-available/hr-app    /etc/nginx/sites-enabled/
rm -f  /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# SSL certificates
echo "▶ Obtaining SSL certificates..."
certbot --nginx -d $DOMAIN_MARKETING -d $DOMAIN_WWW -d $DOMAIN_APP \
  --email $EMAIL_SSL --agree-tos --no-eff-email --non-interactive

# Auto-renew cron
echo "0 3 * * * root certbot renew --quiet" > /etc/cron.d/certbot-renew

# ── Automated database backup ────────────────────────────────────────
mkdir -p /var/backups/postgres
cat > /etc/cron.d/db-backup << CRON
0 2 * * * postgres pg_dump $DB_NAME | gzip > /var/backups/postgres/$DB_NAME-\$(date +\%Y\%m\%d).sql.gz
0 4 * * * find /var/backups/postgres -name "*.sql.gz" -mtime +30 -delete
CRON

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                  ✅ SETUP COMPLETE                           ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  🌐 Marketing:  https://$DOMAIN_MARKETING"
echo "║  🚀 HR App:     https://$DOMAIN_APP"
echo "║  🗄️  DB Pass:   $DB_PASS"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  Next steps:                                                 ║"
echo "║  1. Edit /var/www/hr-app/.env — add RESEND_API_KEY          ║"
echo "║  2. Edit /var/www/marketing/.env — add RESEND_API_KEY       ║"
echo "║  3. Run: cd /var/www/hr-app && npx prisma db seed           ║"
echo "║  4. Run: pm2 restart all                                     ║"
echo "╚══════════════════════════════════════════════════════════════╝"
