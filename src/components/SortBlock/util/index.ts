import { SortStates } from '@/types/constants'
import SortImageReverse from '@/assets/icons/sort-color-20.svg'
import SortImage from '@/assets/icons/sort-revert-color-20.svg'
import DisabledSortImageReverse from '@/assets/icons/sort-20.svg'
import DisabledSortImage from '@/assets/icons/soft-revert-20.svg'

type IconType = typeof SortImage
type ImageReturnType = {
  sort: IconType
  revSort: IconType
}

export const getImagesDepOnState = (state: SortStates): ImageReturnType => {
  switch (state) {
    case SortStates.bothDisabled:
      return {
        sort: DisabledSortImage,
        revSort: DisabledSortImageReverse,
      }
    case SortStates.sort:
      return {
        sort: SortImage,
        revSort: DisabledSortImageReverse,
      }

    case SortStates.reverseSort:
      return {
        sort: DisabledSortImage,
        revSort: SortImageReverse,
      }
    default:
      return {
        sort: SortImage,
        revSort: DisabledSortImageReverse,
      }
  }
}
