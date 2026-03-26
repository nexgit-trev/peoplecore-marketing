'use client'
import Link from 'next/link'

const G = '#C9A84C'

export default function Footer() {
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Features',         href: '/#features'  },
        { label: 'SA Compliance',    href: '/#compliance'},
        { label: 'Leave Management', href: '/#features'  },
        { label: 'Payroll & IRP5',   href: '/#features'  },
        { label: 'Performance',      href: '/#features'  },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us',  href: '/about'    },
        { label: 'Contact',   href: '/#contact' },
        { label: 'Register',  href: '/register' },
        { label: 'Sign In',   href: 'https://app.peoplecore.co.za/login' },
      ],
    },
  ]

  const compliance = ['SARS IRP5 Ready','BCEA Compliant','LRA Compliant','EEA Compliant','B-BBEE Skills Dev','POPIA Aware']

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '80px 32px 48px' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `linear-gradient(135deg, ${G}, #E8C97A)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', color: '#0A0A0A', fontFamily: 'DM Sans, sans-serif' }}>
                PC
              </div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, fontSize: '13px', color: G, letterSpacing: '0.12em' }}>
                PEOPLECORE
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.75', marginBottom: '20px' }}>
              HR & Payroll built for South Africa. SARS compliant, B-BBEE ready.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} className="anim-pulse" />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>All systems operational</span>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: G, marginBottom: '20px' }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(l => (
                  <Link key={l.label} href={l.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = G)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: G, marginBottom: '20px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="tel:0100148757" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                📞 010 014 8757
              </a>
              <a href="mailto:info@nexbridge.co.za" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                📧 info@nexbridge.co.za
              </a>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: G, marginBottom: '20px' }}>
              SA Compliance
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {compliance.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: '32px' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            © 2025 PeopleCore by Nexbridge · HR & Payroll · South Africa · All rights reserved
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <Link key={l} href="/#contact" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
