'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://app.peoplecore.co.za'

const links = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing',  href: '/pricing'  },
  { label: 'Security', href: '/security' },
  { label: 'Contact',  href: '/contact'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/[0.06]' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6" cy="5" r="2.5" fill="#D4AF37"/>
              <circle cx="11" cy="4" r="1.8" fill="#D4AF37" opacity="0.6"/>
              <path d="M1 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M9 10c1.1-.63 2.5-.5 3.5.3" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </div>
          <span className="font-display text-[18px] font-semibold text-white tracking-tight">PeopleCore</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[13px] font-medium text-white/50 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/login`}
            className="text-[13px] font-medium text-white/50 hover:text-white transition-colors px-3 py-2">
            Login
          </a>
          <a href={`${APP_URL}/register`}
            className="text-[13px] font-semibold bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold-light transition-colors">
            Start Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/50 hover:text-white">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111113] border-b border-white/[0.06] px-6 py-4 space-y-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-[14px] text-white/60 hover:text-white py-2">
              {l.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a href={`${APP_URL}/login`} className="text-[14px] text-white/50 py-2">Login</a>
            <a href={`${APP_URL}/register`}
              className="text-[14px] font-semibold bg-gold text-black px-4 py-2.5 rounded-lg text-center">
              Start Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
