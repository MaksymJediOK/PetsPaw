'use client'

import classes from './Reactions.module.scss'
import Like from '@/assets/icons/white/like-white-30.svg'
import Fav from '@/assets/icons/white/fav-white-30.svg'
import Dislike from '@/assets/icons/white/dislike-white-30.svg'
import Image from 'next/image'
import { VoteUpOrDown } from '@/services/VotingService'
import { addToFavourites } from '@/services/FavouritesService'
import { useLogStore } from '@/store'
import { Reactions as LogReactions } from '@/types/constants'
import { formLog } from '@/app/voting/CreateNewLog'

interface ReactionsProps {
  imageId: string
  nextImage: () => Promise<void>
}

const Reactions = ({ imageId, nextImage }: ReactionsProps) => {
  const addNewLog = useLogStore((state) => state.addNewLog)

  const voteUp = async () => {
    await VoteUpOrDown(imageId)
    addNewLog(formLog(imageId, { reaction: LogReactions.Likes, action: 'added to' }))
    await nextImage()
  }
  const addToFav = async () => {
    await addToFavourites(imageId)
    addNewLog(formLog(imageId, { reaction: LogReactions.Favourites, action: 'added to' }))
    await nextImage()
  }
  const dislike = async () => {
    await VoteUpOrDown(imageId, false)
    addNewLog(formLog(imageId, { reaction: LogReactions.Dislikes, action: 'added to' }))
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
