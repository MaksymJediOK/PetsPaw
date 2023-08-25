import './NavigationItems.scss';
import Image from 'next/image';
import Phone from '@/assets/images-search.svg';
import { Button } from '@/ui/Button';

const NavigationGallery = () => {
  return (
    <>
      <Image src={Phone} width={Phone.width} alt='' className='icon_gallery' />
      <Button href='/gallery'>gallery</Button>
    </>
  );
};

export { NavigationGallery };
