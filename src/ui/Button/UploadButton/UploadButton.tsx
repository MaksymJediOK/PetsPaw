'use client'
import classes from './UploadButton.module.scss'
import UploadIcon from '@/assets/icons/upload-16.svg'
import Image from 'next/image'

const UploadButton = () => {
  const openModal = () => {}

  return (
    <button className={classes.btn} onClick={openModal}>
      <div className={classes.content}>
        <Image src={UploadIcon} alt='upload' />
          <div className={classes.text}>upload</div>
      </div>
    </button>
  )
}

export { UploadButton }
