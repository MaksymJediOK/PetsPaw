'use client'
import Select, { StylesConfig } from 'react-select'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { BaseSelectOption } from '@/types/Select'
import classes from './FilterSelect.module.scss'

type SelectInputProps<T extends FieldValues, U extends BaseSelectOption> = {
  label: string
  name: Path<T>
  placeholder: string
  control: Control<T>
  options: readonly U[]
  styles?: StylesConfig<U, false>
}

export const FilterSelect = <T extends FieldValues, U extends BaseSelectOption>({
  label,
  name,
  placeholder,
  options,
  control,
  styles,
}: SelectInputProps<T, U>) => {
  return (
    <div className={classes.container}>
      <span className={classes.text}>{label}</span>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, onChange, value } }) => (
          <Select
            instanceId={`${label}`}
            className={classes.select}
            ref={ref}
            placeholder={placeholder}
            defaultValue={options[0]}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => onChange(val?.value)}
            styles={styles}
          />
        )}
      />
    </div>
  )
}
