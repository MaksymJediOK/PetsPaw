import { BaseSelectOption } from '@/types/Select'

export const OrderOptions: BaseSelectOption[] = [
  { value: 'RAND', label: 'Random' },
  { value: 'DESC', label: 'Desc' },
  { value: 'ASC', label: 'Asc' },
]

export const ImageTypeOptions: BaseSelectOption[] = [
  { value: 'All', label: 'All' },
  { value: 'Static', label: 'Static' },
  { value: 'Animated', label: 'Animated' },
]

export const LimitOptions: BaseSelectOption[] = [
  { value: '5', label: '5 items per page' },
  { value: '10', label: '10 items per page' },
  { value: '15', label: '15 items per page' },
  { value: '20', label: '20 items per page' },
]
