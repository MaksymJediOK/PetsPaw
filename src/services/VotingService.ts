import { Vote } from '@/types/voting'
import { api_key, subId_key } from '@/types/constants'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
const url = `${baseURL}/votes`

export const VoteUpOrDown = async (image_id: string, voteUp: boolean = true) => {
  const value = voteUp ? 1 : -1
  const rawBody: Vote = {
    image_id,
    sub_id: subId_key,
    value,
  }

  await fetch(url, {
    method: 'POST',
    headers: {
      'x-api-key': api_key,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rawBody),
  })
}

export const getLikedCats = async () => {
  const response = await fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
  return response.json()
}
