'use client'
import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import { buildQueryString } from '@/services/QueryBuilder'
import { useGalleryFilterStore } from '@/store'
import { redirect } from 'next/navigation'
import { SingleCat } from '@/types'
import { GalleryCardsList } from '@/app/gallery/ui'
import { Spinner } from '@/components/Spinner'

const GalleryScreen = () => {
  const filterObj = useGalleryFilterStore((state) => state.filter)
  const url = buildQueryString(filterObj)
  const { data, isLoading, error } = useSWR<SingleCat[]>(url, fetcher)
  let itemsArray: SingleCat[] | null = null
  if (!isLoading && data) itemsArray = data.map((item) => item)

  if (error) redirect('/')

  return <div>{!isLoading && data ? <GalleryCardsList cats={itemsArray} /> : <Spinner />}</div>
}

export { GalleryScreen }
