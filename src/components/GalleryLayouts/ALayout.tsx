import './GalleryLayout.scss'

import { GridLayoutProps } from '@/types/gallery'

const ALayout = <T extends { id: string }>({
  itemsBatch,
  CardComponent,
  getUrl,
  getName,
}: GridLayoutProps<T>) => {
  return (
    <div className='parent'>
      {itemsBatch.map((entity, index) => (
        <div className={`a${index + 1}`} key={entity.id}>
          <CardComponent url={getUrl(entity)} id={entity.id} name={getName(entity)} />
        </div>
      ))}
    </div>
  )
}

export { ALayout }
