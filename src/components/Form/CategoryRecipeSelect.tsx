import { useGetRecipeCategorySuspenseQuery } from '@/gql/getRecipeCategoryList'
import { Select, SelectProps } from 'antd'
import { memo, useMemo } from 'react'

export const CategoryRecipeSelect = memo((props: SelectProps) => {
  const { data } = useGetRecipeCategorySuspenseQuery()
  const blogCategory = data?.getRecipeCategory

  const options = useMemo(() => {
    if (blogCategory === undefined || blogCategory === null) {
      return []
    }
    return blogCategory.map(v => ({ value: v.id, label: v.name }))
  }, [blogCategory])

  return (
    <Select
      {...props}
      placeholder='Выберите категорию'
      options={options}
      showSearch
      filterOption={(input, option) => String((option?.label ?? '')).toLowerCase().includes(input.toLowerCase())
      }
    />
  )
})