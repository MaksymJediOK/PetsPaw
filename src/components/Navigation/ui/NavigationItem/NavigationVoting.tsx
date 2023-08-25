import './NavigationItems.scss';
import Image from 'next/image';
import Voting from '@/assets/vote-table.svg';
import { Button } from '@/ui/Button';

const NavigationVoting = () => {
  return (
    <>
      <Image src={Voting} width={Voting.width} alt='' className='icon_voting' />
      <Button href='/voting'>voting</Button>
    </>
  );
};

export { NavigationVoting };
