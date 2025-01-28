import type { Metadata } from 'next'
import '../globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Shipping Components App',
  icons: {
    icon: '/images/ship.svg'
  }
}

export default function RedditComponentsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='container mx-auto py-4'>{children}</div>
}
