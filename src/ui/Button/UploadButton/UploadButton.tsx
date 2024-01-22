'use client'
import classes from './UploadButton.module.scss'
import UploadIcon from '@/assets/icons/upload-16.svg'
import { MouseEventHandler } from 'react'
import Image from 'next/image'

const UploadButton = ({ click }: { click: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button className={classes.btn} onClick={click}>
      <div className={classes.content}>
        <Image src={UploadIcon} alt='upload' />
        <div className={classes.text}>upload</div>
      </div>
    </button>
  )
}

export { UploadButton }
