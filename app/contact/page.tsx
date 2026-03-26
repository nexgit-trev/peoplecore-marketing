'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ContactPage() {
  const [form,    setForm]    = useState({ name: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [error,   setError]   = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const RESEND_API_KEY = process.env.NEXT_PUBLIC_DUMMY || ''
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) { setError(data.error || 'Failed. Please email us directly.'); return }
      setDone(true)
    } catch {
      setError('Network error. Email us at hello@peoplecore.co.za')
    } finally { setLoading(false) }
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <section className="section">
          <div className="container-lg">
            <div className="text-center mb-14">
              <div className="badge mb-4">Get in Touch</div>
              <h1 className="font-syne font-bold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}>
                We'd love to hear from you
              </h1>
              <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Our SA-based team is ready to answer your questions about PeopleCore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Contact info */}
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'Email Us',      value: 'hello@peoplecore.co.za', href: 'mailto:hello@peoplecore.co.za' },
                  { icon: '💬', label: 'WhatsApp',       value: '+27 10 000 0000',         href: 'https://wa.me/27100000000'    },
                  { icon: '🌐', label: 'Platform Login', value: 'app.peoplecore.co.za',    href: 'https://app.peoplecore.co.za' },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-4 p-5 rounded-2xl glass">
                    <div className="text-2xl flex-shrink-0">{c.icon}</div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#C9A84C' }}>{c.label}</div>
                      <a href={c.href} className="text-sm font-medium text-white no-underline hover:text-gold-400"
                        style={{ color: 'rgba(255,255,255,0.7)' }}>{c.value}</a>
                    </div>
                  </div>
                ))}

                <div className="p-5 rounded-2xl glass-gold">
                  <div className="text-sm font-bold mb-2" style={{ color: '#C9A84C' }}>Ready to sign up?</div>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Fill in our registration form and we'll have your workspace ready within 24 hours.</p>
                  <Link href="/register" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>Request Access →</Link>
                </div>
              </div>

              {/* Form */}
              <div>
                {done ? (
                  <div className="p-8 rounded-2xl glass text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="font-syne font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>We'll get back to you within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 p-7 rounded-2xl glass">
                    <h3 className="font-syne font-bold text-lg mb-5">Send us a message</h3>
                    {[
                      { key: 'name',    label: 'Your Name *',    type: 'text',  placeholder: 'John Smith'           },
                      { key: 'email',   label: 'Email Address *',type: 'email', placeholder: 'john@company.com'     },
                      { key: 'company', label: 'Company Name',   type: 'text',  placeholder: 'Acme Corp'            },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.label}</label>
                        <input className="input-field" type={f.type} placeholder={f.placeholder}
                          value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} required={f.key !== 'company'} />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Message *</label>
                      <textarea className="input-field" rows={4} placeholder="How can we help you?"
                        value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required />
                    </div>
                    {error && <div className="p-3 rounded-xl text-sm" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>{error}</div>}
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center" style={{ opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
