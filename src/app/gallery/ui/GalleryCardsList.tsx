'use client'
import { SingleCat } from '@/types'
import { distributeItems } from '@/utils'
import { ALayout } from '@/components/GalleryLayouts/ALayout'
import { BLayout } from '@/components/GalleryLayouts/BLayout'
import { NoLogsFound } from '@/components/NotFound/NoLogs'
import { GalleryCard } from '@/components/GalleryCard'

const GalleryCardsList = ({ cats }: { cats: SingleCat[] | null }) => {
  if (!cats) return <NoLogsFound />
  const realCats = cats.map((item) => item)
  const batches = distributeItems<SingleCat>(realCats, 5)

  return (
    <div>
      {batches.map((batch, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <ALayout<SingleCat>
              CardComponent={GalleryCard}
              key={index}
              itemsBatch={batch}
              getName={(item) => item.id}
              getUrl={(item) => item.url}
            />
          ) : (
            <BLayout<SingleCat>
              CardComponent={GalleryCard}
              key={index}
              itemsBatch={batch}
              getName={(item) => item.id}
              getUrl={(item) => item.url}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export { GalleryCardsList }
