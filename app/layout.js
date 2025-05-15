// app/layout.js
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import './globals.css'

import { Poppins, Open_Sans } from 'next/font/google'
import WhatsAppWidget from '@/components/WhatsAppWidget'

// Font imports for heading and body
const headingFont = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Dr. SkinCare | Dermatologist Clinic',
  description: 'Your trusted skin & hair care expert.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-[#F5F9FC] text-slate-800 font-sans">
        <Navbar />
        <WhatsAppWidget/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
