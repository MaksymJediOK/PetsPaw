'use client'
import classes from './GalleryFilterSection.module.scss'
import { FilterSelect } from '@/components/Selects'
import { useForm } from 'react-hook-form'
import { OrderOptions, ImageTypeOptions, LimitOptions } from '@/types/constants/options'
import { filterStylesConfig } from '@/app/gallery/selectStyles'
import { ReloadButton } from '@/ui/Button'
import { GalleryOrder, ImageType, useGalleryFilterStore } from '@/store'

type Filter = {
  order: GalleryOrder
  breed: string
  imageType: ImageType
  limit: number
}

const GalleryFilterSection = () => {
  const { control, handleSubmit } = useForm<Filter>({
    defaultValues: { order: 'RAND', breed: 'All', imageType: 'All', limit: 10 },
  })
  const updateFilter = useGalleryFilterStore((state) => state.setFilter)
  const changeFilter = (data: Filter) => updateFilter(data)

  return (
    <form className={classes.container} onSubmit={handleSubmit(changeFilter)}>
      <div className={classes.grid}>
        <FilterSelect
          label='Order'
          name='order'
          placeholder='random'
          control={control}
          options={OrderOptions}
          styles={filterStylesConfig}
        />
        <FilterSelect
          label='Type'
          name='imageType'
          placeholder='image type'
          control={control}
          options={ImageTypeOptions}
          styles={filterStylesConfig}
        />
        <FilterSelect
          label='Breeds'
          name='breed'
          placeholder='Breeds'
          control={control}
          options={ImageTypeOptions}
          styles={filterStylesConfig}
        />
        <div className={classes.reload_container}>
          <div style={{ width: '100%' }}>
            <FilterSelect
              label='Limit'
              name='limit'
              placeholder='Limit'
              control={control}
              options={LimitOptions}
              styles={filterStylesConfig}
            />
          </div>
          <ReloadButton click={() => console.log('reload')} />
        </div>
      </div>
    </form>
  )
}

export { GalleryFilterSection }
