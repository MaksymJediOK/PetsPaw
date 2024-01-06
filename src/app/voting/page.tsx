import { Metadata } from 'next'
import classes from './VotingPage.module.scss'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import { VotingScreen } from '@/app/voting/VotingScreen'
import { VotingLogs } from '@/app/voting/VotingLogs'

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
        <VotingLogs />
      </div>
    </div>
  )
}
