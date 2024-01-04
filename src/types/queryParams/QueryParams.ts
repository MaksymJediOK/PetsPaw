export interface QueryParams {
  limit?: number
  page?: number
  order?: 'ASC' | 'DESC' | 'RAND'
  has_breeds?: boolean
  breed_ids?: string
  category_ids?: string
  sub_id?: string
}

