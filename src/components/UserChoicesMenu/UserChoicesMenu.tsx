'use client'
import './UserChoicesMenu.scss'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { options } from '@/components/UserChoicesMenu/MenuOptions'

const UserChoicesMenu = () => {
  const pathName = usePathname()

  return (
    <div className='Nav_container'>
      {options.map((item) => {
        const isActive = item.href === pathName
        const currentIcon = isActive ? item.AltImg : item.Img
        return (
          <Link key={item.href} href={item.href}>
            <Image
              className={`Nav_icon ${isActive ? 'nav_active' : ''}`}
              src={currentIcon}
              width={currentIcon.width}
              alt={item.href}
            />
          </Link>
        )
      })}
    </div>
  )
}

export { UserChoicesMenu }
