import './NavigationItems.scss'
import Image from 'next/image'
import Voting from '@/assets/vote-table.svg'
import { Button } from '@/ui/Button'
import { NavRoutes } from '@/types/constants/NavRoutes'

const NavigationVoting = ({ path }: { path: string }) => {
  const active = path === NavRoutes.voting
  return (
    <>
      <Image src={Voting} width={Voting.width} alt='' className='icon_voting' />
      <Button href='/voting' isActive={active}>
        voting
      </Button>
    </>
  )
}

export { NavigationVoting }
