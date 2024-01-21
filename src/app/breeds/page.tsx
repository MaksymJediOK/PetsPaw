import classes from './Breeds.module.scss'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import { makeApiRequest } from '@/utils/configuredFetch'
import { BreedInfo } from '@/types/breed'
import { LimitSelect } from '@/components/Selects'
import { SortBlock } from '@/components/SortBlock'
import { Gallery } from './Gallery'
import { mapToSelectOptions } from './mappedBreeds'
import { BreedSelect } from '@/components/Selects/BreedSelect/BreedSelect'

export default async function BreedsPage() {
  const breeds = await makeApiRequest<BreedInfo[]>('breeds')
  const breedsForSelect = mapToSelectOptions(breeds)
  return (
    <>
      <div className={classes.row}>
        <BackButton />
        <CurrentPageMark text='breeds' />
        <BreedSelect breeds={breedsForSelect} />
        <LimitSelect />
        <SortBlock />
      </div>
      <Gallery breeds={breeds} />
    </>
  )
}
