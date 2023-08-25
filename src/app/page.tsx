import classes from './page.module.scss';
import Image from 'next/image';
import GirlImg from '@/assets/girl-and-pet.svg';

export default function GirlAndPet() {
  return (
    <div className={classes.container}>
      <div className={classes.background}></div>
      <Image
        src={GirlImg}
        width={GirlImg.width}
        height={GirlImg.height}
        alt='girl and pet'
        className={classes.girl_icon}
      />
    </div>
  );
}
