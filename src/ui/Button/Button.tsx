import React from 'react'
import Link from 'next/link'
import './Button.scss'

interface ButtonProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const Button = ({ href, children, isActive }: ButtonProps) => {
  const linkClassName = `btn_text ${isActive ? 'active' : ''}`
  return (
    <Link className={linkClassName} href={href}>
      {children}
    </Link>
  )
}

export { Button }

