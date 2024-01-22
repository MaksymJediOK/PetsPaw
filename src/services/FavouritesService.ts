import { api_key, base_url, subId_key } from '@/types/constants'
import { Vote } from '@/types/voting'
import { FavouriteResponse } from '@/types/favourites'
import { makeApiRequest } from '@/utils/configuredFetch'

const url = `favourites`
const fullUrl = `${url}?sub_id=${subId_key}`
type FavouriteType = Omit<Vote, 'value'>

export const addToFavourites = async (imageId: string) => {
  const rawBody: FavouriteType = {
    image_id: imageId,
    sub_id: subId_key,
  }
  await makeApiRequest(url, 'POST', rawBody)
}

export const getFavourites = async (): Promise<FavouriteResponse[]> =>
  await makeApiRequest<FavouriteResponse[]>(fullUrl)
