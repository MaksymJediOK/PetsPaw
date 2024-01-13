import { BreedInfo, SingleBreed } from '@/types/breed'

export const mappedBreeds = (breeds: BreedInfo[]): SingleBreed[] => {
  return breeds.map((item, index) => {
    return {
      id: item.id,
      temperament: item.temperament,
      origin: item.origin,
      weight: item.weight,
      life_span: item.life_span,
      alt_names: item.alt_names,
      image: {
        id: item.image?.id || `${item.id}${index}`,
        url: item.image?.url || 'https://cdn2.thecatapi.com/images/BQMSld0A0.jpg',
      },
    }
  })
}
