import classes from './NoLogs.module.scss'

const NoLogsFound = () => {
  return (
    <div className={classes.container}>
      <h6 className={classes.text}>No item found</h6>
    </div>
  )
}

export { NoLogsFound }
