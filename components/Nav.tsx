'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const APP = 'https://app.peoplecore.co.za'

const LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/pricing',  label: 'Pricing'  },
  { href: '/security', label: 'Security' },
  { href: '/contact',  label: 'Contact'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(8,8,9,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 64 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #C9A84C, #A07830)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#000', fontWeight: 700, fontSize: 14, fontFamily: 'Instrument Serif' }}>P</span>
          </div>
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>PeopleCore</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500,
              padding: '6px 14px', borderRadius: 8, textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="hidden md:flex">
          <a href={`${APP}/auth/login`} style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500,
            padding: '7px 16px', borderRadius: 8, textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
            Sign in
          </a>
          <a href={`${APP}/register`} className="btn-gold" style={{ padding: '8px 18px', fontSize: 13 }}>
            Start Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(8,8,9,0.98)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px',
        }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 16,
              padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
              textDecoration: 'none',
            }}>{l.label}</Link>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <a href={`${APP}/auth/login`} className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>Sign in</a>
            <a href={`${APP}/register`} className="btn-gold" style={{ flex: 1, justifyContent: 'center' }}>Start Free</a>
          </div>
        </div>
      )}
    </header>
  )
}
