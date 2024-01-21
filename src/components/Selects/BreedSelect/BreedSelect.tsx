'use client'
import Select from 'react-select'
import { BaseSelectOption } from '@/types/Select'

const BreedSelect = ({ breeds }: { breeds: BaseSelectOption[] }) => {
  const baseOption = [{ value: 'base', label: 'All Breeds' }]
  return (
    <div>
      <Select
        instanceId='breeds select'
        options={[...baseOption, ...breeds]}
        defaultValue={baseOption[0]}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: '#F8F8F7',
            borderRadius: 10,
            borderWidth: '2px',
            borderColor: state.isFocused ? '#FBE0DC' : 'transparent',
            width: '226px',
          }),
        }}
      />
    </div>
  )
}

export { BreedSelect }
