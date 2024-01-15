import classes from './DetailedBreed.module.scss'
import { makeApiRequest } from '@/utils/configuredFetch'
import { BreedInfo } from '@/types/breed'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import Link from 'next/link'
import Image from 'next/image'
import { DetailedBreedInfo } from '@/components/DetailedBreedInfo'
import { mappedBreeds } from '@/app/breeds/mappedBreeds'

export default async function Page({ params }: { params: { id: string } }) {
  const breeds = await makeApiRequest<BreedInfo[]>('breeds')
  const desiredBreed = breeds.find((item) => item.id === params.id)
  const transformedBreed = mappedBreeds([{ ...desiredBreed! }])[0]

  return (
    <>
      <div className={classes.row_container}>
        <BackButton />
        <Link href='/breeds' className={classes.link}>
          Breeds
        </Link>
        <CurrentPageMark text={params.id} />
      </div>
      <div className={classes.center_cat}>
        <Image
          src={transformedBreed?.image.url!}
          alt={params.id}
          width={640}
          height={360}
          className={classes.cat_image}
          priority
        />
        <div className={classes.switcher}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className={classes.circle} key={item}></div>
          ))}
        </div>
      </div>
      <DetailedBreedInfo {...transformedBreed} />
    </>
  )
}
