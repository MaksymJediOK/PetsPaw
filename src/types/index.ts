export interface CatWithImage {
  id: string
  url: string
  breeds: string[]
  categories: string[]
}
export type CatWithImageShort = Pick<CatWithImage, 'id' | 'url'>
