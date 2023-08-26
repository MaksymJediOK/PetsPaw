import { Metadata } from 'next';
import classes from './VotingPage.module.scss';
import { BackButton } from '@/ui/BackButton';
import { CurrentPageMark } from '@/ui/CurrentPageMark';
import { getCatImage } from '@/services/getCatImage';
import { Reactions } from '@/components/Reactions';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Voting',
};

export default async function VotingPage() {
  const Cat = await getCatImage();
  const { url, id } = Cat[0];
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.row_container}>
          <BackButton />
          <CurrentPageMark text='voting' />
        </div>
        <div className={classes.image_container}>
          <Image className={classes.img} src={url} width={640} height={360} alt={id} />
          <Reactions />
        </div>

      </div>
    </div>
  );
}
