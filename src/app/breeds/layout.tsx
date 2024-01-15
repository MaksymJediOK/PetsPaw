import { Metadata } from 'next'
import React from 'react'
import { SharedLayout } from '@/components/SharedLayout'
import classes from '@/app/breeds/Breeds.module.scss'

export const metadata: Metadata = {
  title: 'Breeds',
}
export default function BreedsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SharedLayout />
      <div className={classes.container}>{children}</div>
    </div>
  )
}
