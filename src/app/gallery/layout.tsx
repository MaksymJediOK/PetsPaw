import { Metadata } from 'next'
import React from 'react'
import { SharedLayout } from '@/components/SharedLayout'

export const metadata: Metadata = {
  title: 'Gallery',
}
export default function BreedsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SharedLayout />
      <div className='layout-container'>{children}</div>
    </div>
  )
}
