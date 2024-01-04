import { Metadata } from 'next'
import classes from './VotingPage.module.scss'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import { getCatImage } from '@/services/getCatImage'

import { VotingLog } from '@/components/VotingLog/VotingLog'
import { VotingScreen } from '@/app/voting/VotingScreen'

export const metadata: Metadata = {
  title: 'Voting',
}

export default async function VotingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.row_container}>
          <BackButton />
          <CurrentPageMark text='voting' />
        </div>
        <VotingScreen />
      </div>
      <div className={classes.user_logs}>
        <VotingLog />
        <VotingLog />
        <VotingLog />
        <VotingLog />
      </div>
    </div>
  )
}
