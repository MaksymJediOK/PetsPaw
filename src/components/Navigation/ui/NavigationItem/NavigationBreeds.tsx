import './NavigationItems.scss'
import Image from 'next/image'
import Breeds from '@/assets/pet-breeds.svg'
import { Button } from '@/ui/Button'
import { NavRoutes } from '@/types/constants/NavRoutes'

const NavigationBreeds = ({ path }: { path: string }) => {
  const active = path === NavRoutes.breeds
  return (
    <>
      <Image src={Breeds} width={Breeds.width} alt='' className='icon_breeds' priority />
      <Button href='/breeds' isActive={active}>
        breeds
      </Button>
    </>
  )
}

export { NavigationBreeds }
