'use client'
import { useLogStore } from '@/store'
import { VotingLog } from '@/components/VotingLog/VotingLog'
import { NoLogsFound } from '@/components/NotFound/NoLogs'

const VotingLogs = () => {
  const userLogs = useLogStore((state) => state.logs)
  return (
    <>
      {userLogs.length ? (
        userLogs.map((log) => <VotingLog key={log.imageId} {...log} />)
      ) : (
        <NoLogsFound />
      )}
    </>
  )
}

export { VotingLogs }
