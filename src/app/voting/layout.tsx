import { Metadata } from 'next'
import React from 'react'
import { SharedLayout } from '@/components/SharedLayout'

export const metadata: Metadata = {
  title: 'Voting',
}
export default function VotingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginRight: '30px' }}>
      <SharedLayout />
      {children}
    </div>
  )
}
