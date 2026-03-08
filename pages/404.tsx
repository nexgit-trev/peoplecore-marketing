import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

export default function NotFound() {
  return (
    <>
      <Head><title>404 &mdash; PeopleCore</title></Head>
      <Nav/>
      <main style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }}/>
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
          <div style={{ fontFamily: 'Instrument Serif', fontSize: 'clamp(80px, 15vw, 160px)', fontWeight: 400, color: 'rgba(201,168,76,0.15)', lineHeight: 1 }}>404</div>
          <h1 style={{ fontFamily: 'Instrument Serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: '#fff', marginTop: -20, marginBottom: 16 }}>
            Page not found
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16, marginBottom: 40, maxWidth: 360, margin: '0 auto 40px' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-gold">Back to Home</Link>
            <Link href="/contact" className="btn-outline">Contact Support</Link>
          </div>
        </div>
      </main>
    </>
  )
}
