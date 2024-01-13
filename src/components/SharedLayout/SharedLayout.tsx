import classes from './SharedLayout.module.scss'
import { UserSearch } from '@/components/UserSearch'
import { UserChoicesMenu } from '@/components/UserChoicesMenu'

const SharedLayout = () => {
  return (
    <div>
      <div className={classes.container}>
        <UserSearch />
        <UserChoicesMenu />
      </div>
    </div>
  )
}

export { SharedLayout }
