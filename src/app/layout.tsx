import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Navigation } from '@/components/Navigation'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PetsPaw',
  description: 'Gallery of cats',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true} lang='en'>
      <body suppressHydrationWarning={true} className={jost.className}>
        <div className='global-container'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
