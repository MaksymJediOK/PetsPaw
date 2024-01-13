import classes from './Breeds.module.scss'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import { makeApiRequest } from '@/utils/configuredFetch'
import { BreedInfo, BreedOption } from '@/types/breed'
import { BreedsSelect, LimitSelect } from '@/components/Selects'
import { SortBlock } from '@/components/SortBlock'
import { Gallery } from './Gallery'

export default async function BreedsPage() {
  const breeds = await makeApiRequest<BreedInfo[]>('breeds')
  const breedsForSelect: BreedOption[] = breeds.map((breed) => {
    return {
      value: breed.name,
      label: breed.name,
    }
  })
  const baseOption = { value: 'base', label: 'All Breeds' }
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <BackButton />
        <CurrentPageMark text='breeds' />
        <BreedsSelect breeds={[baseOption, ...breedsForSelect]} />
        <LimitSelect />
        <SortBlock />
      </div>
      <Gallery breeds={breeds} />
    </div>
  )
}
