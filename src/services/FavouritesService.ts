import { api_key, base_url, subId_key } from '@/types/constants'
import { Vote } from '@/types/voting'
import { FavouriteResponse } from '@/types/favourites'

const url = `${base_url}/favourites`
type FavouriteType = Omit<Vote, 'value'>

export const addToFavourites = async (imageId: string) => {
  const rawBody: FavouriteType = {
    image_id: imageId,
    sub_id: subId_key,
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

export const getFavourites = async (): Promise<FavouriteResponse[]> => {
  const res = await fetch(`${url}?sub_id=${subId_key}`, {
    headers: {
      'x-api-key': api_key,
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  })
  return res.json()
}
