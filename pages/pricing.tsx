import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Check, ArrowRight, MessageSquare } from 'lucide-react'

const APP_URL = 'https://app.peoplecore.co.za'

const PLANS = [
  {
    name: 'Starter', employees: '2', price: 'Free', period: '', badge: '',
    desc: 'Explore PeopleCore at no cost. No credit card required.',
    perEmployee: '',
    color: 'border-white/10 bg-white/[0.01]',
    btnStyle: 'border border-white/20 text-white hover:bg-white/5',
    cta: 'Start Free', ctaHref: `${APP_URL}/register`,
    features: ['Up to 2 employees','Leave management','Attendance tracking','Document storage','Employee self-service','Email support'],
  },
  {
    name: 'Professional', employees: '20', price: 'R599', period: '/month', badge: '',
    desc: 'The essential HR & payroll toolkit for small SA businesses.',
    perEmployee: 'R30/employee',
    color: 'border-white/10 bg-white/[0.01]',
    btnStyle: 'border border-white/20 text-white hover:bg-white/5',
    cta: 'Get Started', ctaHref: `${APP_URL}/register`,
    features: ['Up to 20 employees','Everything in Starter','Full payroll & PAYE','UIF & SDL calculations','Recruitment ATS','Org chart','Priority support'],
  },
  {
    name: 'SME', employees: '100', price: 'R1,999', period: '/month', badge: 'Most Popular',
    desc: 'Built for growing SA businesses that need the full picture.',
    perEmployee: 'R20/employee',
    color: 'border-gold/30 bg-gold/[0.03]',
    btnStyle: 'bg-gold text-black hover:bg-gold-light',
    cta: 'Get Started', ctaHref: `${APP_URL}/register`,
    features: ['Up to 100 employees','Everything in Professional','Advanced HR analytics','Asset management','Workflow automation','Onboarding automation','Dedicated support'],
  },
  {
    name: 'Enterprise', employees: '300', price: 'R4,999', period: '/month', badge: '',
    desc: 'For established businesses that need full control and compliance.',
    perEmployee: 'R16.60/employee',
    color: 'border-white/10 bg-white/[0.01]',
    btnStyle: 'border border-white/20 text-white hover:bg-white/5',
    cta: 'Get Started', ctaHref: `${APP_URL}/register`,
    features: ['Up to 300 employees','Everything in SME','Security & audit tools','Multi-company support','Dedicated account manager','SLA guarantee (99.5%)','Custom workflows'],
  },
  {
    name: 'Core', employees: '1,000', price: 'Custom', period: '', badge: 'Large Enterprise',
    desc: 'For large organisations with complex, high-volume HR needs.',
    perEmployee: 'Negotiated',
    color: 'border-gold/20 bg-gold/[0.02]',
    btnStyle: 'border border-gold/30 text-gold hover:bg-gold/5',
    cta: 'Contact Sales', ctaHref: '/contact',
    features: ['Up to 1,000 employees','Everything in Enterprise','Custom pricing & contract','Custom integrations','Onsite training available','Executive reporting','Implementation support'],
  },
]

const FAQ = [
  { q: 'How do I pay?', a: 'All plans are paid monthly via EFT to our FNB business account. Submit your proof of payment in the app and we activate your plan within 1 business day.' },
  { q: 'Is there a contract?', a: 'No. All plans are month-to-month with no lock-in. Cancel at any time. Core plan contracts are negotiated separately.' },
  { q: 'What happens when I exceed my employee limit?', a: "You'll be prompted to upgrade. We never delete your data -- we just ask you to move to the right plan." },
  { q: 'Why is the per-employee rate lower on higher tiers?', a: 'Volume pricing. A 100-person company pays R20/employee vs R30 on Professional. The more you grow, the more you save per person.' },
  { q: 'Are prices VAT inclusive?', a: 'No. All prices exclude VAT. VAT will be added on your invoice where applicable.' },
  { q: 'Can I switch plans?', a: 'Yes. Upgrade instantly, downgrade at the next billing cycle. No penalties either way.' },
]

export default function PricingPage() {
  return (
    <>
      <Head><title>Pricing -- PeopleCore HR &amp; Payroll</title></Head>
      <Nav/>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Pricing</div>
            <h1 className="font-display text-5xl font-bold text-white mb-4">
              Priced for South African businesses
            </h1>
            <p className="text-[16px] text-white/35 max-w-xl mx-auto">
              No per-seat tricks. No hidden fees. Flat monthly rate via EFT.
              Less than a cup of coffee per employee per day.
            </p>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {PLANS.map(p => (
              <div key={p.name} className={`relative border rounded-2xl p-6 flex flex-col ${p.color}`}>
                {p.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    p.badge === 'Most Popular' ? 'text-black bg-gold' : 'text-gold bg-gold/10 border border-gold/20'
                  }`}>{p.badge}</div>
                )}
                <div className="mb-5">
                  <div className="text-[13px] font-bold text-white mb-0.5">{p.name}</div>
                  <div className="text-[11px] text-white/25 mb-3">Up to {p.employees} employees</div>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-display text-2xl font-bold text-white">{p.price}</span>
                    {p.period && <span className="text-white/30 text-[12px] mb-0.5">{p.period}</span>}
                  </div>
                  {p.perEmployee && <div className="text-[10px] text-gold/60">{p.perEmployee}</div>}
                </div>
                <p className="text-[11px] text-white/30 leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[11px] text-white/45">
                      <Check size={11} className="text-gold mt-0.5 flex-shrink-0"/>{f}
                    </li>
                  ))}
                </ul>
                <a href={p.ctaHref} className={`w-full py-2.5 rounded-xl text-[12px] font-semibold text-center transition-all ${p.btnStyle}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Value callout */}
          <div className="card-border rounded-2xl p-6 text-center mb-20">
            <p className="text-[13px] text-white/40">
              <span className="text-white font-semibold">Compare to the market:</span> Sage HR starts at R350+/employee/month. PaySpace at R400+/employee/month.
              PeopleCore Professional works out to <span className="text-gold font-semibold">R30/employee/month</span> -- full payroll, leave, recruitment and more included.
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-4 mb-14">
              {FAQ.map(f => (
                <div key={f.q} className="card-border rounded-2xl p-6">
                  <div className="text-[14px] font-semibold text-white mb-2">{f.q}</div>
                  <div className="text-[13px] text-white/40 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
            <div className="gold-border rounded-2xl p-8 text-center">
              <MessageSquare size={22} className="text-gold mx-auto mb-3"/>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Need a custom quote?</h3>
              <p className="text-[13px] text-white/35 mb-5">Large team or special requirements? We will put together a tailored proposal.</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-black font-semibold text-[13px] px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
                Contact Sales <ArrowRight size={14}/>
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </>
  )
}
