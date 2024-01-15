'use client'
import Select from 'react-select'
import { limitOptions } from './options'
import { useBreedsFilterStore } from '@/store'

const LimitSelect = () => {
  const setLimit = useBreedsFilterStore((state) => state.setLimit)

  return (
    <Select
      instanceId={'limit select'}
      options={limitOptions}
      defaultValue={limitOptions[1]}
      onChange={(newValue) => setLimit(newValue ? newValue.value : 5)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: '#F8F8F7',
          borderRadius: 10,
          borderWidth: '2px',
          maxWidth: '120px',
          borderColor: state.isFocused ? '#FBE0DC' : 'transparent',
          width: '226px',
        }),
      }}
    />
  )
}

export { LimitSelect }
