import { QueryParams } from '@/types/queryParams'
import { api_key, base_url } from '@/types/constants'

const buildQueryString = (params?: QueryParams, endpoint: string = 'images/search'): string => {
  const baseUrl = `${base_url}/${endpoint}`
  const queryParams = new URLSearchParams()
  if (!params) {
    return baseUrl
  }
  queryParams.append('?api_key', api_key)
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      queryParams.append(key, value.toString())
    }
  }

  return baseUrl.concat(queryParams.toString())
}

export { buildQueryString }
