import { Metadata } from 'next';
import classes from './VotingPage.module.scss';
import { BackButton } from '@/ui/BackButton';
import { CurrentPageMark } from '@/ui/CurrentPageMark';

export const metadata: Metadata = {
  title: 'Voting',
};

export default function VotingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.row_container}>
        <BackButton />
        <CurrentPageMark text='/voting' />
      </div>

    </div>
  );
}
