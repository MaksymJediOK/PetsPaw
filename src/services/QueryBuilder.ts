import { QueryParams } from '@/types/queryParams'
import { base_url } from '@/types/constants'

const buildQueryString = (params?: QueryParams, endpoint: string = 'images/search?'): string => {
  const baseUrl = `${base_url}/${endpoint}`
  const queryParams = new URLSearchParams()
  if (!params) return baseUrl

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined || null) {
      queryParams.append(key, value.toString())
    }
  }

  return baseUrl.concat(queryParams.toString())
}

export { buildQueryString }
