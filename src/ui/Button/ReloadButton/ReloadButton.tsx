'use client'
import React from 'react'
import UpdateIcon from '@/assets/icons/update-20.svg'
import classes from './ReloadButton.module.scss'
import Image from 'next/image'

type ReloadButtonProps = {
  click: () => void
}

const ReloadButton = ({ click }: ReloadButtonProps) => {
  return (
    <button onClick={click} className={classes.btn} type='submit'>
      <Image src={UpdateIcon} width={UpdateIcon.width} height={UpdateIcon.height} alt='update' />
    </button>
  )
}

export { ReloadButton }
