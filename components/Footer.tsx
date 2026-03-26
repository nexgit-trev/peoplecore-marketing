'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-xl" style={{ padding: '64px 24px 40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0A0A0A', fontFamily: 'Syne, sans-serif' }}>
                PC
              </div>
              <div className="font-syne font-bold text-sm tracking-widest" style={{ color: '#C9A84C' }}>
                PEOPLECORE
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              HR & Payroll built for South Africa. SARS compliant, B-BBEE ready, and designed for the way SA businesses work.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: '#22C55E' }}></span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>All systems operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>Product</div>
            <div className="space-y-3">
              {[
                { label: 'Features',          href: '/#features'  },
                { label: 'SA Compliance',     href: '/#compliance'},
                { label: 'Leave Management',  href: '/#features'  },
                { label: 'Payroll & IRP5',    href: '/#features'  },
                { label: 'Performance',       href: '/#features'  },
                { label: 'Training & Dev',    href: '/#features'  },
              ].map(l => (
                <Link key={l.label} href={l.href}
                  className="block text-sm no-underline transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>Company</div>
            <div className="space-y-3">
              {[
                { label: 'About Us',    href: '/about'   },
                { label: 'Contact',     href: '/contact' },
                { label: 'Register',    href: '/register'},
                { label: 'Sign In',     href: 'https://app.peoplecore.co.za/login' },
              ].map(l => (
                <Link key={l.label} href={l.href}
                  className="block text-sm no-underline transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SA Compliance */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>SA Compliance</div>
            <div className="space-y-2">
              {['SARS IRP5 Ready','BCEA Compliant','LRA Compliant','EEA Compliant','B-BBEE Skills Dev','POPIA Aware'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2025 PeopleCore · HR & Payroll · South Africa · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy','Terms of Service','Security'].map(l => (
              <Link key={l} href="/contact" className="text-xs no-underline transition-colors"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
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
