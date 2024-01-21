'use client'
import classes from './GalleryCard.module.scss'
import Image from 'next/image'
import HeartIcon from '@/assets/icons/fav-20.svg'
import FilledHeartIcon from '@/assets/icons/fav-color-20.svg'

type GalleryCardProps = {
  url: string
  id: string
  name: string
}

const GalleryCard = ({ url, id }: GalleryCardProps) => {
  return (
    <div className={classes.image_container}>
      <Image src={url} alt={id} width={200} height={140} className={`${classes.image} ${classes.img}`} />
      <div className={classes.hover_container}>
        <div className={classes.heart}>
          <div className={classes.icon_container} onClick={() => console.log('clicked', id)}>
            <Image src={HeartIcon} width={HeartIcon.width} height={HeartIcon.height} alt='heart' />
          </div>
        </div>
      </div>
    </div>
  )
}

export { GalleryCard }
