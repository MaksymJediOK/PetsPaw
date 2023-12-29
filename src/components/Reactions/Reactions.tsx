import classes from './Reactions.module.scss'
import Like from '@/assets/icons/white/like-white-30.svg'
import Fav from '@/assets/icons/white/fav-white-30.svg'
import Dislike from '@/assets/icons/white/dislike-white-30.svg'
import Image from 'next/image'

const Reactions = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.like} src={Like} width={Like.width} alt='like reaction' />
      <Image className={classes.fav} src={Fav} width={Like.width} alt='fav reaction' />
      <Image className={classes.dislike} src={Dislike} width={Like.width} alt='dislike reaction' />
    </div>
  )
}

export { Reactions }
