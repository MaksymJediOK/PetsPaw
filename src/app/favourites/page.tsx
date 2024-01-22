import { getFavourites } from '@/services/FavouritesService'

export default async function FavouritesPage() {
  const data = await getFavourites()
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </div>
  )
}
