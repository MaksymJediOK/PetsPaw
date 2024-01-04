import { SubId } from '@/types/constants'

export const initSubId = () => {
  const sub_id = localStorage.getItem(SubId)
  if (sub_id) return
  localStorage.setItem(SubId, process.env.USER_ID || 'hsX8F8jukORmoN')
}
