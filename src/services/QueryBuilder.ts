const api_key = process.env.API_KEY || '';

interface QueryParams {
  limit?: number;
  page?: number;
  order?: 'ASC' | 'DESC' | 'RAND';
  has_breeds?: boolean;
  breed_ids?: string;
  category_ids?: string;
  sub_id?: string;
}

const buildQueryString = (params?: QueryParams, endpoint: string = 'images/search'): string => {
  const baseUrl = `https://api.thecatapi.com/v1/${endpoint}`;
  const queryParams = new URLSearchParams();
  if (!params) {
    return baseUrl
  }
  queryParams.append('?api_key', api_key);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  }

  return baseUrl.concat(queryParams.toString());
};

export { buildQueryString };

console.log(buildQueryString())