import { useGetPostCategorySuspenseQuery } from '@/gql/getPostCategoryList'
import { Select, SelectProps } from 'antd'
import { memo, useMemo } from 'react'

export const CategoryPostSelect = memo((props: SelectProps) => {
  const { data } = useGetPostCategorySuspenseQuery()
  const blogCategory = data?.getPostCategory

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