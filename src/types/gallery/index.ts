import { ComponentType } from 'react'

export type CardProps = {
  url: string
  id: string
  name: string
}

export type GridLayoutProps<T> = {
  itemsBatch: T[]
  CardComponent: ComponentType<CardProps>
  getUrl: (item: T) => string
  getName: (item: T) => string
}
