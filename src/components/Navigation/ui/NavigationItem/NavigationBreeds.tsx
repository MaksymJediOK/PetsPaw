import './NavigationItems.scss';
import Image from 'next/image';
import Breeds from '@/assets/pet-breeds.svg';
import { Button } from '@/ui/Button';

const NavigationBreeds = () => {
  return (
    <>
      <Image src={Breeds} width={Breeds.width} alt='' className='icon_breeds' />
      <Button href='/breeds'>breeds</Button>
    </>
  );
};

export { NavigationBreeds };
