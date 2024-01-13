import './GalleryLayout.scss'
import Image from 'next/image'
import { SingleBreed } from '@/types/breed'
import {BreedCard} from "@/components/BreedCard";

const BLayout = ({ breedsBatch }: { breedsBatch: SingleBreed[] }) => {
  return (
    <div className='second_parent'>
      {breedsBatch.map((breed, index) => (
        <div className={`b${index + 1}`} key={breed.id}>
          <BreedCard url={breed.image.url} id={breed.image.id} />
        </div>
      ))}
    </div>
  )
}

export { BLayout }
