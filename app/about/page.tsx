import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About PeopleCore',
  description: 'Learn about PeopleCore — the HR & Payroll platform built specifically for South African businesses and their unique compliance requirements.',
}

const VALUES = [
  { icon: '🇿🇦', title: 'SA First',           desc: 'Every feature is designed with South African legislation and business culture in mind. Not adapted — built from scratch for SA.' },
  { icon: '⚖️',  title: 'Compliance Always',  desc: 'We track legislative changes so you don\'t have to. SARS, BCEA, LRA, EEA — we keep your platform up to date.' },
  { icon: '🤝',  title: 'Local Support',       desc: 'Our support team is based in South Africa. Same time zone, same context, same understanding of your challenges.' },
  { icon: '🔒',  title: 'Security First',      desc: 'Enterprise-grade security with 2FA, RBAC, full audit trails, and POPIA-conscious data handling.' },
  { icon: '🚀',  title: 'Always Improving',    desc: 'We ship new features every month based on feedback from real South African HR professionals.' },
  { icon: '💡',  title: 'Simple & Powerful',   desc: 'Powerful enough for enterprise. Simple enough that your team won\'t need weeks of training.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 800px 500px at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)'
          }} />
          <div className="container-lg relative z-10 text-center">
            <div className="badge mb-5">Our Story</div>
            <h1 className="font-syne font-bold mb-5" style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.02em' }}>
              Built by South Africans,
              <br /><span className="text-gold">for South Africans.</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 18px)' }}>
              We built PeopleCore because we saw South African businesses struggling with foreign HR platforms that didn't understand IRP5, B-BBEE, BCEA leave rules, or the LRA. So we built one that does.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* Mission */}
        <section className="section" style={{ background: '#0A0A0A' }}>
          <div className="container-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge mb-4">Our Mission</div>
                <h2 className="font-syne font-bold text-3xl md:text-4xl mb-5" style={{ letterSpacing: '-0.02em' }}>
                  Making HR compliance simple for every SA business
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  South African businesses face unique HR challenges — complex tax legislation, B-BBEE requirements, Labour Relations Act compliance, and Employment Equity reporting. Most global HR platforms simply don't address these.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  PeopleCore was built from the ground up to handle these challenges, giving SA businesses an enterprise-grade HR platform that's truly made for them.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '500+',  l: 'Companies' },
                  { n: '12,500+',l: 'Employees' },
                  { n: '99.9%', l: 'Uptime'    },
                  { n: '24hr',  l: 'Setup Time' },
                ].map((s, i) => (
                  <div key={i} className="p-6 rounded-2xl text-center glass-gold">
                    <div className="font-syne font-black text-3xl mb-1 text-gold">{s.n}</div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Values */}
        <section className="section">
          <div className="container-xl">
            <div className="text-center mb-12">
              <div className="badge mb-4">What We Stand For</div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl mb-3" style={{ letterSpacing: '-0.02em' }}>Our values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl glass">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-syne font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CTA */}
        <section className="section" style={{ background: '#0A0A0A' }}>
          <div className="container-md text-center">
            <h2 className="font-syne font-bold text-3xl md:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
              Ready to get started?
            </h2>
            <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Join hundreds of South African businesses running their HR on PeopleCore.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="btn-primary">Request Access →</Link>
              <Link href="/contact" className="btn-secondary">Talk to Us</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
