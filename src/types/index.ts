import { CatSearchBreed} from '@/types/breed'

export type CatWithImage = {
  id: string
  url: string
  breeds: string[]
  categories: string[]
}
export type CatWithImageShort = Pick<CatWithImage, 'id' | 'url'>

export type SingleCat = CatWithImageShort & {
  width: number
  height: number
  breeds: CatSearchBreed[]
}
