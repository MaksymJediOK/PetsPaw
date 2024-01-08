'use client'
import Select from 'react-select'
import { limitOptions } from './options'

const LimitSelect = () => {
  return (
    <Select
      instanceId={'limit select'}
      options={limitOptions}
      defaultValue={limitOptions[1]}
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
