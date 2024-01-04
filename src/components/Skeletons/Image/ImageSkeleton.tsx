import classes from './ImageSkeleton.module.scss'

const ImageSkeleton = () => {
  return (
    <div className={classes['placeholder-container']}>
      <div className={classes['placeholder-animation']}></div>
    </div>
  )
}

export { ImageSkeleton }
