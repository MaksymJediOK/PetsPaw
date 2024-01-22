import classes from './GalleryPage.module.scss'
import { Suspense } from 'react'
import { BackButton } from '@/ui/BackButton'
import { CurrentPageMark } from '@/ui/CurrentPageMark'
import { GalleryFilterSection } from '@/components/GalleryFilterSection'
import { GalleryScreen } from '@/components/GalleryScreen'
import { Spinner } from '@/components/Spinner'
import UploadBlock from "@/app/gallery/ui/UploadBlock";

export default async function GalleryPage() {
  return (
    <div className={classes.main_container}>
      <div className={classes.nav_container}>
        <div className={classes.inner_container}>
          <BackButton />
          <CurrentPageMark text='Gallery' />
        </div>
        <UploadBlock />
      </div>
      <GalleryFilterSection />
      <Suspense fallback={<Spinner />}>
        <GalleryScreen />
      </Suspense>
    </div>
  )
}
