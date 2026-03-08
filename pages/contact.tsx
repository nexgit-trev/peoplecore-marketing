import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Mail, Phone, MessageSquare, ArrowRight, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  const inp: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
    padding: '11px 14px', fontSize: 14, color: '#fff',
    outline: 'none', fontFamily: 'Geist, sans-serif',
    transition: 'border-color 0.2s',
  }

  return (
    <>
      <Head>
        <title>Contact &mdash; PeopleCore HR &amp; Payroll</title>
        <meta name="description" content="Get in touch with the PeopleCore team for sales enquiries, support or custom pricing." />
      </Head>
      <Nav/>
      <main>

        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 64, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}/>
          <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}/>
          <div className="container" style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
            <div className="tag" style={{ marginBottom: 20 }}>Contact</div>
            <h1 style={{
              fontFamily: 'Instrument Serif', fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 20,
            }}>
              Get in touch
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
              Sales enquiry, custom quote or just a question. We are based in South Africa and respond fast.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section style={{ padding: '40px 24px 100px' }}>
          <div className="container">
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, alignItems: 'start' }}>

              {/* Left — contact cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  {
                    icon: Mail, color: '#C9A84C', bg: 'rgba(201,168,76,0.08)', border: 'rgba(201,168,76,0.2)',
                    title: 'General Enquiries', value: 'hello@peoplecore.co.za',
                    desc: 'For general questions about the platform.',
                    href: 'mailto:hello@peoplecore.co.za',
                  },
                  {
                    icon: MessageSquare, color: '#60A5FA', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)',
                    title: 'Sales & Custom Pricing', value: 'sales@peoplecore.co.za',
                    desc: 'Enterprise, Core plan or custom requirements.',
                    href: 'mailto:sales@peoplecore.co.za',
                  },
                  {
                    icon: Phone, color: '#34D399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)',
                    title: 'Support', value: 'support@peoplecore.co.za',
                    desc: 'Technical help for existing customers.',
                    href: 'mailto:support@peoplecore.co.za',
                  },
                  {
                    icon: MapPin, color: '#F472B6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)',
                    title: 'Based in South Africa', value: 'Johannesburg, SA',
                    desc: 'SAST (UTC+2). We respond within 1 business day.',
                    href: null,
                  },
                ].map(c => (
                  <div key={c.title} style={{
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    background: '#0F0F11', border: `1px solid rgba(255,255,255,0.06)`,
                    borderRadius: 16, padding: '20px 22px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = c.border)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: c.bg, border: `1px solid ${c.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <c.icon size={17} color={c.color}/>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.title}</div>
                      {c.href
                        ? <a href={c.href} style={{ fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', display: 'block', marginBottom: 4 }}>{c.value}</a>
                        : <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{c.value}</div>
                      }
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{c.desc}</div>
                    </div>
                  </div>
                ))}

                {/* Response time */}
                <div style={{
                  background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: 14, padding: '16px 20px',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#C9A84C', marginBottom: 4 }}>Response Times</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                    Sales enquiries: within 4 hours (business hours)<br/>
                    Support: within 1 business day<br/>
                    Custom quotes: within 24 hours
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div style={{
                background: '#0F0F11', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20, padding: '40px 40px',
              }}>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: 40, marginBottom: 20 }}>&#10003;</div>
                    <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 28, color: '#fff', marginBottom: 12 }}>
                      Message received
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
                      We will get back to you within 1 business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontFamily: 'Instrument Serif', fontSize: 28, fontWeight: 400, color: '#fff', marginBottom: 8 }}>Send us a message</h2>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, marginBottom: 32 }}>Fill in the form and we will be in touch shortly.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div className="contact-form-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Full Name *</label>
                          <input name="name" value={form.name} onChange={handleChange} placeholder="Trevor Dlamini" style={inp}/>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Email *</label>
                          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="trevor@company.co.za" style={inp}/>
                        </div>
                      </div>
                      <div className="contact-form-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Company</label>
                          <input name="company" value={form.company} onChange={handleChange} placeholder="Acme (Pty) Ltd" style={inp}/>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Team Size</label>
                          <select name="size" value={form.size} onChange={handleChange} style={{ ...inp, appearance: 'none' as any }}>
                            <option value="">Select...</option>
                            <option>1-5 employees</option>
                            <option>6-20 employees</option>
                            <option>21-100 employees</option>
                            <option>101-300 employees</option>
                            <option>300+ employees</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirements..." style={{ ...inp, resize: 'vertical' as any }}/>
                      </div>
                      <button onClick={handleSubmit} disabled={!form.name || !form.email || !form.message} className="btn-gold" style={{
                        width: '100%', justifyContent: 'center', fontSize: 15, padding: '13px',
                        opacity: (!form.name || !form.email || !form.message) ? 0.4 : 1,
                        cursor: (!form.name || !form.email || !form.message) ? 'not-allowed' : 'pointer',
                      }}>
                        Send Message <ArrowRight size={15}/>
                      </button>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        By submitting you agree to our Privacy Policy. We never share your data.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      
        <style jsx global>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
            .contact-form-fields { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .contact-form-fields { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
      <Footer/>
    </>
  )
}
