import './NavigationItems.scss'
import Image from 'next/image'
import Phone from '@/assets/images-search.svg'
import { Button } from '@/ui/Button'
import { NavRoutes } from '@/types/constants/NavRoutes'

const NavigationGallery = ({ path }: { path: string }) => {
  const active = path === NavRoutes.gallery
  return (
    <>
      <Image src={Phone} width={Phone.width} alt='' className='icon_gallery' />
      <Button href='/gallery' isActive={active}>
        gallery
      </Button>
    </>
  )
}

export { NavigationGallery }
