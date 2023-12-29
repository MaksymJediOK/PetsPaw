import { buildQueryString } from '@/services/QueryBuilder'

interface CatWithImage {
  id: string
  url: string
  breeds: string[]
  categories: string[]
}

export const getCatImage = async (): Promise<CatWithImage[]> => {
  const url = buildQueryString()
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('unable to fetch')
  }

  return response.json()
}
