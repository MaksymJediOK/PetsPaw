export type BreedInfo = {
  weight: {
    imperial: string
    metric: string
  }
  id: string
  name: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
  image: {
    id: string
    width: number
    height: number
    url: string
  }
}

export type SingleBreed = Pick<
  BreedInfo,
  'id' | 'name' | 'temperament' | 'origin' | 'weight' | 'life_span' | 'alt_names'
> & {
  image: Pick<BreedInfo['image'], 'id' | 'url'>
}

export type CatSearchBreed = Omit<BreedInfo, 'image'> & {
  cfa_url: string
  vcahospitals_url: string
  vetstreet_url: string
}