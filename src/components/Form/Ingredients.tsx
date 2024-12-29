import { useGetIngredientsSuspenseQuery } from '@/gql/getIngredientList'
import { useTree } from '@/hooks/useTree'
import { SelectProps, TreeSelect } from 'antd'
import { memo, useMemo } from 'react'

export const Ingredients = memo((props: SelectProps) => {
  const { data } = useGetIngredientsSuspenseQuery()

  const dataSource = useMemo(() => {
    if (data?.getIngredients === undefined) {
      return []
    }
    return data?.getIngredients?.map(v => {
      return {
        ...v,
        value: v.id,
        title: v.title
      }
    })
  }, [data?.getIngredients])
  const ingredients = useTree({ array: dataSource, foreignKey: 'id', targetKey: 'parentId' })

  return (
    <TreeSelect
      {...props}
      placeholder='Выберите ингридиент'
      treeData={ingredients}
      showSearch
      treeLine={{
        showLeafIcon: true
      }}
      filterTreeNode={(input, option) => String((option?.title ?? '')).toLowerCase().includes(input.toLowerCase())}
    />
  )
})