import classes from './VotingLog.module.scss'
import './VotingLog.module.scss'
import Image from 'next/image'
import { getReactionIcon } from '@/utils'
import { Reactions } from '@/types/constants'

interface VotingLogProps {
  timeStamp: string
  imageID: string
  reactionType: 'Favourites' | 'Likes' | 'Dislikes'
  action: 'added' | 'removed'
}

const VotingLog = () => {
  const img = getReactionIcon(Reactions.Likes)
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.inner_container}>
          <div className={classes.time}>22:35</div>
          <div className={classes.log_text}>
            Image ID: <span id='highlighted-text'>HJd0XecNX</span> was added to Likes
          </div>
        </div>
        <div>
          <Image src={img} width={30} height={30} alt='reaction' />
        </div>
      </div>
    </div>
  )
}

export { VotingLog }
