import { create } from 'zustand'
import { Order } from '@/store/BreedsFilterStore'

type GalleryOrder = 'RAND' | Order
type ImageType = 'All' | 'Static' | 'Animated'

type GalleryFilterState = {
  filter: {
    limit: number
    order: GalleryOrder
    imageType: ImageType
    breed: string | undefined
  }
}

type GalleryFn = {
  setFilter: (filters: Partial<GalleryFilterState['filter']>) => void
}

export const useGalleryFilterStore = create<GalleryFilterState & GalleryFn>()((set) => ({
  filter: {
    limit: 5,
    order: 'RAND',
    imageType: 'All',
    breed: undefined,
  },
  setFilter: (payload: Partial<GalleryFilterState['filter']>) =>
    set((state) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...payload,
        },
      }
    }),
}))

export type { GalleryOrder, ImageType }
