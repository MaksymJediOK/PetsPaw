'use client'
import classes from './SortBlock.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { SortStates } from '@/types/constants'
import { getImagesDepOnState } from './util'

const SortBlock = () => {
  const [sortState, setSort] = useState(SortStates.bothDisabled)

  const { sort, revSort } = getImagesDepOnState(sortState)

  return (
    <div className={classes.flex}>
      <div className={classes.container} onClick={() => setSort(SortStates.reverseSort)}>
        <Image src={revSort} width={revSort.width} height={revSort.height} alt='reverse sort' />
      </div>
      <div className={classes.container} onClick={() => setSort(SortStates.sort)}>
        <Image src={sort} width={sort.width} height={sort.height} alt='sort' />
      </div>
    </div>
  )
}

export { SortBlock }
