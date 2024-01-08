import classes from './VotingLog.module.scss'
import './VotingLog.module.scss'
import Image from 'next/image'
import { formatDate, getReactionIcon } from '@/utils'
import { ActionLog } from '@/types/voting'

const VotingLog = ({ imageId, time, reaction, action }: ActionLog) => {

  const img = getReactionIcon(reaction)
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.inner_container}>
          <div className={classes.time}>{formatDate(time)}</div>
          <div className={classes.log_text}>
            Image ID: <span id='highlighted-text'>{imageId}</span> was {action} {reaction}
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
