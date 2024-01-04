'use client'

import classes from './Reactions.module.scss'
import Like from '@/assets/icons/white/like-white-30.svg'
import Fav from '@/assets/icons/white/fav-white-30.svg'
import Dislike from '@/assets/icons/white/dislike-white-30.svg'
import Image from 'next/image'
import { VoteUpOrDown } from '@/services/VotingService'
import { addToFavourites } from '@/services/FavouritesService'

interface ReactionsProps {
  imageId: string
  nextImage: () => Promise<void>
}

const Reactions = ({ imageId, nextImage }: ReactionsProps) => {
  const voteUp = async () => {
    await VoteUpOrDown(imageId)
    await nextImage()
  }
  const addToFav = async () => {
    await addToFavourites(imageId)
    await nextImage()
  }
  const dislike = async () => {
    await VoteUpOrDown(imageId, false)
    await nextImage()
  }

  return (
    <div className={classes.container}>
      <Image
        className={classes.like}
        src={Like}
        width={Like.width}
        alt='like reaction'
        onClick={voteUp}
      />
      <Image
        className={classes.fav}
        src={Fav}
        width={Like.width}
        alt='fav reaction'
        onClick={addToFav}
      />
      <Image
        className={classes.dislike}
        src={Dislike}
        width={Dislike.width}
        alt='dislike reaction'
        onClick={dislike}
      />
    </div>
  )
}

export { Reactions }
