'use client'
import { useLogStore } from '@/store'
import { VotingLog } from '@/components/VotingLog/VotingLog'

const VotingLogs = () => {
  const userLogs = useLogStore((state) => state.logs)
  return <>{userLogs.length ? userLogs.map((log) => <VotingLog key={log.imageId} {...log} />) : null}</>
}

export { VotingLogs }
