import { Metadata } from 'next'
import React from 'react'
import { SharedLayout } from '@/components/SharedLayout'

export const metadata: Metadata = {
  title: 'Breeds',
}
export default function BreedsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SharedLayout />
      {children}
    </div>
  )
}
