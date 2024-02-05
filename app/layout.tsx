import type { Metadata } from 'next'
import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const EB_garamond = EB_Garamond({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'La Fondazza',
  description: 'Azienda Agricola',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} font-sans ${EB_garamond.variable} font-display`}>
      <body>
        <div id='page-container' className='min-h-[100vh] relative'>
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
