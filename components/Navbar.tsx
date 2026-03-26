'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const G = '#C9A84C'
const G2 = '#E8C97A'

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Features',   href: '/#features'   },
    { label: 'Compliance', href: '/#compliance'  },
    { label: 'Contact',    href: '/#contact'     },
    { label: 'About',      href: '/about'        },
  ]

  return (
    <>
      <nav style={{
        position:        'fixed',
        top:             0, left: 0, right: 0,
        zIndex:          100,
        transition:      'all 0.4s',
        background:      scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter:  scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom:    scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: `linear-gradient(135deg, ${G}, ${G2})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 800, fontSize: '13px', color: '#0A0A0A',
                boxShadow: `0 0 20px rgba(201,168,76,0.3)`,
              }}>PC</div>
              <div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, fontSize: '14px', color: G, letterSpacing: '0.12em' }}>
                  PEOPLECORE
                </div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  HR & Payroll
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
              {links.map(l => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s', letterSpacing: '0.01em',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="hidden md:flex">
              <a href="https://app.peoplecore.co.za/login" style={{
                padding: '9px 22px', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
                border: `1px solid rgba(201,168,76,0.3)`, color: G, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                Sign In
              </a>
              <Link href="/register" style={{
                padding: '9px 22px', borderRadius: '10px', fontSize: '13px', fontWeight: 700,
                background: `linear-gradient(135deg, ${G}, ${G2})`, color: '#0A0A0A',
                boxShadow: '0 4px 20px rgba(201,168,76,0.25)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(201,168,76,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(201,168,76,0.25)' }}>
                Get Started
              </Link>
            </div>

            {/* Mobile burger */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
              className="flex md:hidden">
              {mobileOpen
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ fontSize: '28px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontFamily: 'DM Sans, sans-serif' }}>
              {l.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '200px', marginTop: '16px' }}>
            <a href="https://app.peoplecore.co.za/login" style={{
              padding: '14px', borderRadius: '12px', textAlign: 'center', fontSize: '15px', fontWeight: 600,
              border: `1px solid rgba(201,168,76,0.35)`, color: G,
            }}>Sign In</a>
            <Link href="/register" onClick={() => setMobileOpen(false)} style={{
              padding: '14px', borderRadius: '12px', textAlign: 'center', fontSize: '15px', fontWeight: 700,
              background: `linear-gradient(135deg, ${G}, ${G2})`, color: '#0A0A0A',
            }}>Get Started</Link>
          </div>
        </div>
      )}
    </>
  )
}
