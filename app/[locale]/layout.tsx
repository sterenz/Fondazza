import type { Metadata } from 'next'

import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'
import { IubendaProvider, IubendaCookieSolutionBannerConfigInterface, i18nDictionaries } from '@mep-agency/next-iubenda';
import Header from '../components/Header'
import Footer from '../components/Footer'

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

// const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
//   siteId: 3469226, // Your site ID
//   cookiePolicyId: 93796554, // Your cookie policy ID
//   lang: 'en',

//   // See https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide
// };

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  return (
    <html lang={locale} className={`${inter.variable} font-sans ${EB_garamond.variable} font-display`}>
      <body className='min-h-[100vh]'>
        {/* <IubendaProvider bannerConfig={iubendaBannerConfig}> */}
          <Header />
          {children}
          <Footer />
        {/* </IubendaProvider> */}
      </body>
    </html>
  )
}
