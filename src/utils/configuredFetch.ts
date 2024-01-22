import { api_key, base_url } from '@/types/constants'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type RequestOptions<T> = {
  method: RequestMethod
  headers: { [key: string]: string }
  body?: string
}

export const makeApiRequest = async <T>(
  endpoint: string,
  method: RequestMethod = 'GET',
  data: T | null = null,
): Promise<T> => {
  const headers = {
    'x-api-key': api_key,
    'Content-Type': 'application/json',
  }

  const requestOptions: RequestOptions<T> = {
    method,
    headers,
  }

  if (data) {
    requestOptions.body = JSON.stringify(data)
  }
  const url = `${base_url}/${endpoint}`
  try {
    const response = await fetch(url, requestOptions)
    return await response.json()
  } catch (error) {
    console.error('Error making API request:', error)
    throw error
  }
}
