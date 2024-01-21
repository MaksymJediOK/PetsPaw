import classes from './GalleryPage.module.scss'
import { Suspense } from 'react'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import { UploadButton } from '@/ui/Button/UploadButton'
import { GalleryFilterSection } from '@/components/GalleryFilterSection'
import { GalleryScreen } from '@/components/GalleryScreen'
import { Spinner } from '@/components/Spinner'

export default async function GalleryPage() {
  return (
    <div className={classes.main_container}>
      <div className={classes.nav_container}>
        <div className={classes.inner_container}>
          <BackButton />
          <CurrentPageMark text='Gallery' />
        </div>
        <UploadButton />
      </div>
      <GalleryFilterSection />
      <Suspense fallback={<Spinner />}>
        <GalleryScreen />
      </Suspense>
    </div>
  )
}
