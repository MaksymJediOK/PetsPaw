import { Reactions } from '@/types/constants'

export interface ActionLog {
  time: Date
  imageId: string
  reaction: Reactions
  action: 'added to' | 'removed from'
}
