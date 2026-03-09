import Link from 'next/link'

const APP = 'https://app.peoplecore.co.za'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#080809', padding: '64px 24px 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }} className="grid-footer">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #C9A84C, #A07830)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#000', fontWeight: 700, fontSize: 14, fontFamily: 'Instrument Serif' }}>P</span>
              </div>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>PeopleCore</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>
              HR & payroll software built specifically for South African businesses.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['SARS','BCEA','UIF','POPIA'].map(b => (
                <span key={b} className="compliance-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Product</div>
            {[
              { href: '/features', label: 'Features'   },
              { href: '/pricing',  label: 'Pricing'    },
              { href: '/security', label: 'Security'   },
              { href: `${APP}/register`, label: 'Start Free' },
              { href: `${APP}/auth/login`,    label: 'Sign In'    },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: 13,
                marginBottom: 10, textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Company</div>
            {[
              { href: '/contact', label: 'Contact'  },
              { href: `${APP}/legal/privacy`, label: 'Privacy Policy' },
              { href: `${APP}/legal/terms`,   label: 'Terms of Service' },
              { href: `${APP}/legal/popia`,   label: 'POPIA Statement' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: 13,
                marginBottom: 10, textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Support */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Support</div>
            {[
              { href: 'mailto:support@peoplecore.co.za', label: 'Email Support'  },
              { href: '/contact',                        label: 'Sales Enquiry'  },
              { href: `${APP}/legal/popia`,              label: 'Data Requests'  },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: 13,
                marginBottom: 10, textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 28 }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>
            &copy; {new Date().getFullYear()} PeopleCore. All rights reserved. Built in South Africa.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: 12 }}>
            Prices exclude VAT &middot; Month-to-month &middot; Cancel anytime
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .grid-footer { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .grid-footer { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  )
}
