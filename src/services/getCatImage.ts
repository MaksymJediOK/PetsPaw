import { buildQueryString } from '@/services/QueryBuilder'
import { CatWithImageShort } from '@/types'

export const getCatImage = async (): Promise<CatWithImageShort> => {
  const requestUrl = buildQueryString()
  const response = await fetch(requestUrl, {
    cache: 'no-cache',
  })
  if (!response.ok) {
    throw new Error('unable to fetch')
  }
  const result = await response.json()
  return result[0] as CatWithImageShort
}
