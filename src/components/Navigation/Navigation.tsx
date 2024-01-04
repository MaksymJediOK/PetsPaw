import React from 'react'
import Image from 'next/image'
import Img from '@/assets/Logo.png'
import classes from './Navigation.module.scss'
import { NavigationList } from './ui/NavigationList'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link href='/'>
          <Image src={Img} width={Img.width} alt='logo' priority />
        </Link>
        <div className={classes.welcome_container}>
          <h2 className={classes.welcome_text}>Hi!👋</h2>
          <p className={classes.welcome_text__sub}>Welcome to MacPaw Bootcamp 2023</p>
        </div>
        <h3 className={classes.lets_text}>Lets start using The Cat API</h3>
        <NavigationList />
      </div>
    </div>
  )
}

export { Navigation }
