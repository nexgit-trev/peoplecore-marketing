import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

export default function NotFound() {
  return (
    <>
      <Head><title>404 — PeopleCore</title></Head>
      <Nav/>
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-display text-[120px] font-bold text-gold/10 leading-none mb-4">404</div>
          <h1 className="font-display text-3xl font-bold text-white mb-3">Page not found</h1>
          <p className="text-white/35 mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-gold text-black font-semibold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}
