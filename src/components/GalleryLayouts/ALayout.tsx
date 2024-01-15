import './GalleryLayout.scss'
import { SingleBreed } from '@/types/breed'

import {BreedCard} from "@/components/BreedCard";

const ALayout = ({ breedsBatch }: { breedsBatch: SingleBreed[] }) => {
  return (
    <div className='parent'>
      {breedsBatch.map((breed, index) => (
        <div className={`a${index + 1}`} key={breed.id}>
          <BreedCard url={breed.image.url} id={breed.id} name={breed.name} />
        </div>
      ))}
    </div>
  )
}

export { ALayout }
