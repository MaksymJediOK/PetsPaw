import classes from './Breeds.module.scss'
import { BreedInfo, SingleBreed } from '@/types/breed'
import { ALayout } from '@/components/GalleryLayouts/ALayout'
import { mappedBreeds } from '@/app/breeds/mappedBreeds'
import { BLayout } from '@/components/GalleryLayouts/BLayout'
import { distributeItems } from '@/utils'

const Gallery = ({ breeds }: { breeds: BreedInfo[] }) => {
  const galleryArray = mappedBreeds(breeds)
  const batches = distributeItems<SingleBreed>(galleryArray.slice(0, -2), 5)

  return (
    <div className={classes.gallery}>
      {batches.map((batch, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <ALayout key={index} breedsBatch={batch} />
          ) : (
            <BLayout key={index} breedsBatch={batch} />
          )}
        </div>
      ))}
    </div>
  )
}

export { Gallery }
