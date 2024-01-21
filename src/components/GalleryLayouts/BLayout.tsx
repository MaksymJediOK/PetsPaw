import './GalleryLayout.scss'
import { GridLayoutProps } from '@/types/gallery'

const BLayout = <T extends { id: string }>({
  itemsBatch,
  CardComponent,
  getUrl,
  getName,
}: GridLayoutProps<T>) => {
  return (
    <div className='second_parent'>
      {itemsBatch.map((entity, index) => (
        <div className={`b${index + 1}`} key={entity.id}>
          <CardComponent url={getUrl(entity)} id={entity.id} name={getName(entity)} />
        </div>
      ))}
    </div>
  )
}

export { BLayout }
