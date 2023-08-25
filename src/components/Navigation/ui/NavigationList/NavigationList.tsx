import classes from './NavigationList.module.scss';
import { NavigationBreeds, NavigationGallery, NavigationVoting } from '../NavigationItem';

const NavigationList = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.item_container}>
          <NavigationVoting />
        </div>
        <div className={classes.item_container}>
          <NavigationBreeds />
        </div>
        <div className={classes.item_container}>
          <NavigationGallery />
        </div>
      </div>
    </>
  );
};

export { NavigationList };
