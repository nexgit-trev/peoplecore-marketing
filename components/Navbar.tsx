'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features',  href: '/#features'  },
    { label: 'Compliance',href: '/#compliance' },
    { label: 'About',     href: '/about'       },
    { label: 'Contact',   href: '/contact'     },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:   scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-18 py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0A0A0A', fontFamily: 'Syne, sans-serif' }}>
                PC
              </div>
              <div>
                <div className="font-syne font-bold text-sm tracking-widest" style={{ color: '#C9A84C', letterSpacing: '0.12em' }}>
                  PEOPLECORE
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  HR & Payroll
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <Link key={l.href} href={l.href}
                  className="text-sm font-medium transition-colors no-underline"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://app.peoplecore.co.za/login" className="btn-secondary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                Sign In
              </a>
              <Link href="/register" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)' }}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-syne text-2xl font-bold no-underline"
                style={{ color: 'rgba(255,255,255,0.8)' }}>
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 w-48">
              <a href="https://app.peoplecore.co.za/login" className="btn-secondary text-center justify-center">
                Sign In
              </a>
              <Link href="/register" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
