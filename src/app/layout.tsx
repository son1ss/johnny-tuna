'use client'

import Header from '@/components/header'
import { store } from '@/services/redux'
import { Montserrat } from 'next/font/google'
import { Provider } from 'react-redux'
import './globals.css'
import Footer from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
