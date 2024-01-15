import classes from './DetailedBreedInfo.module.scss'
import { SingleBreed } from '@/types/breed'
import { getShortenedText } from '@/utils'

const DetailedBreedInfo = ({ life_span, origin, weight, temperament, alt_names, name }: SingleBreed) => {
  return (
    <div className={classes.border_container}>
      <div className={classes.title}>{getShortenedText(name, 7)}</div>
      <div className={classes.center}>
        <p className={classes.breed_for}>{alt_names || 'Family companion cat'}</p>
      </div>
      <div className={classes.category_container}>
        <div>
          <div className={classes.category}>Temperament</div>
          <div className={classes.text}>{temperament}</div>
        </div>
        <div className={classes.cat_info_container}>
          <div>
            <span className={classes.category}>Origin: </span>
            <span className={classes.text}>{origin}</span>
          </div>
          <div>
            <span className={classes.category}>Weight: </span>
            <span className={classes.text}>{weight.metric}</span>
          </div>
          <div>
            <span className={classes.category}>Life span: </span>
            <span className={classes.text}>{life_span} years</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DetailedBreedInfo }
