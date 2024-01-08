'use client'
import Select, { SingleValue } from 'react-select'
import { useState } from 'react'
import { BreedOption } from '@/types/breed'

const BreedsSelect = ({ breeds }: { breeds: BreedOption[] }) => {
  const [breed, setBreed] = useState<SingleValue<BreedOption>>({ value: '', label: '' })
  const handleChange = (option: SingleValue<BreedOption>) => setBreed(option)
  return (
    <div>
      <Select
        instanceId={'breeds select'}
        onChange={handleChange}
        options={breeds}
        defaultValue={breeds[0]}
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

export { BreedsSelect }
