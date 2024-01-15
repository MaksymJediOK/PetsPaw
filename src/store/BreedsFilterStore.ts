import { create } from 'zustand'

export type Order = 'ASC' | 'DESC'

interface BreedsFilterState {
  limit: number
  order: Order
  setLimit: (payload: number) => void
  setOrder: (payload: Order) => void
}

export const useBreedsFilterStore = create<BreedsFilterState>()((set) => ({
  limit: 15,
  order: 'ASC',
  setLimit: (payload: number) =>
    set(() => {
      return {
        limit: payload,
      }
    }),
  setOrder: (payload: Order) =>
    set(() => {
      return {
        order: payload,
      }
    }),
}))
