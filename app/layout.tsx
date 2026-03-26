import type { Metadata } from 'next'
import './globals.css'

const APP_URL = 'https://peoplecore.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'PeopleCore - HR & Payroll Software for South Africa',
    template: '%s | PeopleCore HR',
  },
  description: "South Africa's leading HR & Payroll platform. SARS IRP5, B-BBEE Skills Development, Employment Equity, Leave Management, and full SA Labour Law compliance — all in one platform.",
  keywords: ['HR software South Africa','payroll software South Africa','SARS IRP5','B-BBEE compliance','Employment Equity software','leave management South Africa','HR system SA','BCEA compliance','LRA compliance','South Africa HR platform','PeopleCore'],
  authors: [{ name: 'PeopleCore', url: APP_URL }],
  robots: { index: true, follow: true },
  icons: {
    icon:      [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut:  '/favicon.svg',
    apple:     '/favicon.svg',
  },
  openGraph: {
    type: 'website', locale: 'en_ZA', url: APP_URL, siteName: 'PeopleCore HR',
    title: 'PeopleCore — HR & Payroll Built for South Africa',
    description: "The all-in-one HR platform designed for South African businesses. SARS compliant, B-BBEE ready.",
  },
  alternates: { canonical: APP_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'SoftwareApplication',
          name: 'PeopleCore HR', url: APP_URL,
          description: 'HR & Payroll platform built for South African businesses',
          applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
          areaServed: { '@type': 'Country', name: 'South Africa' },
          provider: { '@type': 'Organization', name: 'PeopleCore', url: APP_URL },
        })}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
