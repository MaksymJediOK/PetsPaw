import { StylesConfig } from 'react-select'
import { BaseSelectOption } from '@/types/Select'

export const filterStylesConfig: StylesConfig<BaseSelectOption, false> = {
  control: (styles) => ({
    ...styles,
    borderRadius: '10px',
    padding: '2px 4px',
    color: '#1D1D1D',
    fontSize: '16px',
    lineHeight: '24px',
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '10px',
    color: '#1D1D1D',
    fontSize: '16px',
    lineHeight: '24px',
    background: state.isSelected ? '#FBE0DC' : 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '10px',
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: '10px',
  }),
}
