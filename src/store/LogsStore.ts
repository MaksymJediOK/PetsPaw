import { create } from 'zustand'
import { ActionLog } from '@/types/voting'

interface LogState {
  logs: ActionLog[]
  isLoaded: boolean
  setIsLoaded: (newValue: boolean) => void
  addNewLog: (logInfo: ActionLog) => void
}

export const useLogStore = create<LogState>()((set) => ({
  logs: [],
  isLoaded: false,
  setIsLoaded: (newValue) =>
    set(() => {
      return {
        isLoaded: newValue,
      }
    }),
  addNewLog: (logInfo) =>
    set((state) => {
      if (state.logs.length > 3) return { logs: [...state.logs.slice(1), logInfo] }
      return { logs: [...state.logs, logInfo] }
    }),
}))
