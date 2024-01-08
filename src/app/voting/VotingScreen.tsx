'use client'
import Image from 'next/image'
import classes from '@/app/voting/VotingPage.module.scss'
import { Reactions } from '@/components/Reactions'
import { getCatImage } from '@/services/getCatImage'
import { useEffect, useState } from 'react'
import { CatWithImageShort } from '@/types'
import { ImageSkeleton } from '@/components/Skeletons/Image'
import { useLogStore } from '@/store'

const VotingScreen = () => {
  const setLoaded = useLogStore((state) => state.setIsLoaded)
  const [catData, setCatData] = useState<CatWithImageShort>({
    url: '',
    id: '',
  })
  const fetchCatImage = async () => {
    const data = await getCatImage()
    setCatData(data)
    setLoaded(true)
  }

  useEffect(() => {
    fetchCatImage()
  }, [])

  return (
    <div className={classes.image_container}>
      {catData.url ? (
        <>
          <Image className={classes.img} src={catData.url} width={640} height={360} alt={catData.id} />
          <Reactions imageId={catData.id} nextImage={fetchCatImage} />
        </>
      ) : (
        <ImageSkeleton />
      )}
    </div>
  )
}

export { VotingScreen }
