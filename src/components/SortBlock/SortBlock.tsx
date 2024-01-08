'use client'
import classes from './SortBlock.module.scss'
import Image from 'next/image'
import SortImage from '@/assets/icons/sort-color-20.svg'
import ReverseSortImage from '@/assets/icons/sort-revert-color-20.svg'
import { useState } from 'react'

const SortBlock = () => {
  const [sort, setSort] = useState(false)
  const [reverseSort, setReverseSort] = useState(false)

  return (
    <div className={classes.container}>
      {sort ? (
        <Image src={SortImage} width={SortImage.width} height={SortImage.height} alt='sort' />
      ) : (
        <Image src={ReverseSortImage} width={SortImage.width} height={SortImage.height} alt='reverse sort' />
      )}
    </div>
  )
}

export { SortBlock }
