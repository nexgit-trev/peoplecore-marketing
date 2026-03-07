import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Mail, MessageSquare, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Head><title>Contact -- PeopleCore HR & Payroll</title></Head>
      <Nav/>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Contact</div>
            <h1 className="font-display text-5xl font-bold text-white mb-4">Get in touch</h1>
            <p className="text-[16px] text-white/35">We're a South African team and we respond to every message.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Mail,          title: 'Email us',     value: 'hello@peoplecore.co.za',   sub: 'General enquiries'       },
              { icon: MessageSquare, title: 'Support',      value: 'support@peoplecore.co.za', sub: 'Technical & billing'     },
              { icon: Clock,         title: 'Response time', value: '< 1 business day',        sub: 'Mon–Fri, 8am–5pm SAST'   },
            ].map(c => (
              <div key={c.title} className="card-border rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <c.icon size={17} className="text-gold"/>
                </div>
                <div className="text-[12px] text-white/30 mb-1">{c.title}</div>
                <div className="text-[13px] font-semibold text-white mb-0.5">{c.value}</div>
                <div className="text-[11px] text-white/20">{c.sub}</div>
              </div>
            ))}
          </div>
          <div className="card-border rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Send us a message</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-white/30 uppercase tracking-wider mb-1.5">Name</label>
                  <input className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-gold/30" placeholder="Your name"/>
                </div>
                <div>
                  <label className="block text-[11px] text-white/30 uppercase tracking-wider mb-1.5">Company</label>
                  <input className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-gold/30" placeholder="Company name"/>
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/30 uppercase tracking-wider mb-1.5">Email</label>
                <input className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-gold/30" placeholder="you@company.co.za"/>
              </div>
              <div>
                <label className="block text-[11px] text-white/30 uppercase tracking-wider mb-1.5">Message</label>
                <textarea className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-gold/30 resize-none" rows={5} placeholder="Tell us how we can help..."/>
              </div>
              <button className="w-full bg-gold text-black font-semibold text-[14px] py-3.5 rounded-xl hover:bg-gold-light transition-colors">
                Send Message
              </button>
              <p className="text-[11px] text-white/20 text-center">We respond within 1 business day</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
