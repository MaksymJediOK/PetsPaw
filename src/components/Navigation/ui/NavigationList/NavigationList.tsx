'use client'
import classes from './NavigationList.module.scss'
import { NavigationBreeds, NavigationGallery, NavigationVoting } from '../NavigationItem'
import { usePathname } from 'next/navigation'
import { initSubId } from '@/utils'
import { useEffect } from 'react'

const NavigationList = () => {
  const pathName = usePathname()

  useEffect(() => {
    // initSubId()
  }, [])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.item_container}>
          <NavigationVoting path={pathName} />
        </div>
        <div className={classes.item_container}>
          <NavigationBreeds path={pathName} />
        </div>
        <div className={classes.item_container}>
          <NavigationGallery path={pathName} />
        </div>
      </div>
    </>
  )
}

export { NavigationList }
