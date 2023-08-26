import classes from './CurrentPageMark.module.scss';

const CurrentPageMark = ({ text }: { text: string }) => {

  return <div className={classes.Button}>{text}</div>;
};

export { CurrentPageMark };
