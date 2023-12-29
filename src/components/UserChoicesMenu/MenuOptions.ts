import LikeIcon from '@/assets/icons/like-30.svg'
import AltLikeIcon from '@/assets/icons/white/like-white-30.svg'
import HeartIcon from '@/assets/icons/fav-30.svg'
import AltHeartIcon from '@/assets/icons/white/fav-white-30.svg'
import DislikeIcon from '@/assets/icons/dislike-30.svg'
import AltDislikeIcon from '@/assets/icons/white/dislike-white-30.svg'

export interface MenuOption {
  href: string
  Img: any
  AltImg: any
}

const options: MenuOption[] = [
  { href: '/likes', Img: LikeIcon, AltImg: AltLikeIcon },
  { href: '/favourites', Img: HeartIcon, AltImg: AltHeartIcon },
  { href: '/dislikes', Img: DislikeIcon, AltImg: AltDislikeIcon },
]

export { options }
