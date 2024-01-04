import Like from '@/assets/icons/like-30.svg'
import Fav from '@/assets/icons/fav-30.svg'
import Dislike from '@/assets/icons/dislike-30.svg'
import { Reactions } from '@/types/constants'

export const getReactionIcon = (reaction: string): typeof Like => {
  switch (reaction) {
    case Reactions.Likes:
      return Like
    case Reactions.Dislikes:
      return Dislike
    case Reactions.Favourites:
      return Fav
  }
}
