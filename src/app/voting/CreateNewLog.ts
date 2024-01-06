import { ActionLog } from '@/types/voting'

type SimpleLog = Omit<ActionLog, 'time' | 'imageId'>

export const formLog = (imageId: string, fields: SimpleLog): ActionLog => {
  return {
    time: new Date(),
    imageId,
    reaction: fields.reaction,
    action: fields.action,
  }
}
