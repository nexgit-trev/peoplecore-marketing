#!/bin/bash
# ═══════════════════════════════════════════════════════════════════
# PeopleCore — Deploy Update Script
# Run on server to pull latest code and redeploy
# Usage: bash deploy/update.sh [app|marketing|all]
# ═══════════════════════════════════════════════════════════════════

TARGET=${1:-all}

deploy_app() {
  echo "▶ Deploying HR App..."
  cd /var/www/hr-app
  git pull origin main
  npm ci --production=false
  npx prisma generate
  npx prisma migrate deploy
  npm run build
  pm2 restart peoplecore-app
  echo "   ✅ HR App deployed"
}

deploy_marketing() {
  echo "▶ Deploying Marketing Site..."
  cd /var/www/marketing
  git pull origin main
  npm ci --production=false
  npm run build
  pm2 restart peoplecore-marketing
  echo "   ✅ Marketing Site deployed"
}

case $TARGET in
  app)       deploy_app ;;
  marketing) deploy_marketing ;;
  all)       deploy_app; deploy_marketing ;;
  *)         echo "Usage: bash deploy/update.sh [app|marketing|all]"; exit 1 ;;
esac

echo ""
echo "✅ Deploy complete — $(date)"
pm2 status
