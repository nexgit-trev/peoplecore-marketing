import Link from 'next/link'

const APP_URL = 'https://app.peoplecore.co.za'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080809]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="6" cy="5" r="2.5" fill="#D4AF37"/>
                  <circle cx="11" cy="4" r="1.8" fill="#D4AF37" opacity="0.6"/>
                  <path d="M1 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display text-[16px] font-semibold text-white">PeopleCore</span>
            </div>
            <p className="text-[12px] text-white/30 leading-relaxed mb-4">
              HR & Payroll software built for South African businesses.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-[11px] text-white/25">All systems operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-[11px] font-bold text-white/20 uppercase tracking-widest mb-4">Product</div>
            <ul className="space-y-2.5">
              {[
                ['Features',  '/features'],
                ['Pricing',   '/pricing'],
                ['Security',  '/security'],
                ['Changelog', '#'],
              ].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-[13px] text-white/40 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] font-bold text-white/20 uppercase tracking-widest mb-4">Company</div>
            <ul className="space-y-2.5">
              {[
                ['About',   '#'],
                ['Contact', '/contact'],
                ['Blog',    '#'],
                ['Careers', '#'],
              ].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-[13px] text-white/40 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[11px] font-bold text-white/20 uppercase tracking-widest mb-4">Legal</div>
            <ul className="space-y-2.5">
              {[
                ['Privacy Policy',  `${APP_URL}/legal/privacy`],
                ['Terms of Service',`${APP_URL}/legal/terms`],
                ['POPIA Compliance',`${APP_URL}/legal/popia`],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-white/40 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} PeopleCore HR (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/15 border border-white/10 px-2.5 py-1 rounded-full">POPIA Compliant</span>
            <span className="text-[11px] text-white/15 border border-white/10 px-2.5 py-1 rounded-full">SARS Ready</span>
            <span className="text-[11px] text-white/15 border border-white/10 px-2.5 py-1 rounded-full">BCEA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
