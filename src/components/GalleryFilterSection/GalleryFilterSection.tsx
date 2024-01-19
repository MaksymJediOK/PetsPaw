'use client'
import classes from './GalleryFilterSection.module.scss'
import { FilterSelect } from '@/components/Selects'
import { useForm } from 'react-hook-form'
import { OrderOptions, ImageTypeOptions, LimitOptions } from '@/types/constants/options'
import { filterStylesConfig } from '@/app/gallery/selectStyles'
import { ReloadButton } from '@/ui/Button'

type Filter = {
  order: 'Random' | 'Desc' | 'Asc'
  breed: string
  imageType: 'All' | 'static' | 'animated'
  limit: number
}

const GalleryFilterSection = () => {
  const { control, handleSubmit } = useForm<Filter>({
    mode: 'onBlur',
    defaultValues: { order: 'Random', breed: 'All', imageType: 'All', limit: 10 },
  })

  const changeFilter = (data: Filter) => {
    console.log(data)
  }
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
