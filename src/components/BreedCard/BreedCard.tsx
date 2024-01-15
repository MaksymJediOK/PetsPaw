import './BreedCard.styles.scss'
import Image from 'next/image'
import Link from 'next/link'

export const BreedCard = ({ id, url, name }: { url: string; id: string; name: string }) => {
  return (
    <div className='image_container'>
      <Image src={url} alt={id} width={200} height={140} className='image' />
      <div className='hover_container'>
        <Link href={`breeds/${id}`} className='link'>
          <span className='text'>{name}</span>
        </Link>
      </div>
    </div>
  )
}
