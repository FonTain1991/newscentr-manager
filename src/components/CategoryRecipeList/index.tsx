'use client'

import { useGetRecipeCategorySuspenseQuery } from '@/gql/getRecipeCategoryList'
import { memo } from 'react'
import { CategoryList } from '../CategoryList'

export const CategoryRecipeList = memo(() => {
  const { data } = useGetRecipeCategorySuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })
  const recipeCategoryList = data?.getRecipeCategory

  return (
    <CategoryList
      title='Категория. Блог'
      linkToCreatePage='/category-recipe/add'
      dataSource={recipeCategoryList ?? []}
    />
  )
})