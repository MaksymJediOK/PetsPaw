import Arrow from '@/assets/icons/back-20.svg';
import Image from 'next/image';
import classes from './BackButton.module.scss';

const BackButton = () => {
  return <Image className={classes.icon} src={Arrow} width={Arrow.width} alt='back button' />;
};

export { BackButton };
