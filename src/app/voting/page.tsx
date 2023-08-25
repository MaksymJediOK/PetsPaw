import { Metadata } from 'next';
import { UserChoiceMenu } from '@/components/UserChoiceMenu';

export const metadata: Metadata = {
  title: 'Voting',
};

export default function VotingPage() {
  return (

      <UserChoiceMenu />

  );
}
