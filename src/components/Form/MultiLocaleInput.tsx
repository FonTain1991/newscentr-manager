import { DEFAULT_LOCALE, LOCALES } from '@/constants'
import { Input, Tabs, TabsProps } from 'antd'
import { memo, useMemo } from 'react'

interface IMultiLocaleField {
  onChange?: (object: any) => void,
  value?: any
}

export const MultiLocaleInput = memo(({ onChange, value }: IMultiLocaleField) => {
  const items = useMemo(() => {
    return LOCALES.map(({ label, value: key }) => {
      return {
        key,
        label,
        children: (
          <Input
            onChange={e => {
              if (onChange) {
                onChange({ ...value, [key]: e.target.value })
              }
            }}
            value={value?.[key]}
          />
        )
      }
    })
  }, [value, onChange])

  return (
    <Tabs
      type='card'
      defaultActiveKey={DEFAULT_LOCALE}
      items={items}
      size='small'
    />
  )
})