import { api_key } from '@/types/constants'

export const fetcher = (url: string) => {
  return fetch(url, {
    headers: {
      'x-api-key': api_key,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}
