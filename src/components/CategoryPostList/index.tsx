'use client'

import { useGetPostCategorySuspenseQuery } from '@/gql/getPostCategoryList'
import { memo } from 'react'
import { CategoryList } from '../CategoryList'

export const CategoryPostList = memo(() => {
  const { data } = useGetPostCategorySuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })
  const postCategory = data?.getPostCategory

  return (
    <CategoryList
      title='Рубрики'
      linkToCreatePage='/category-post/add'
      dataSource={postCategory ?? []}
    />
  )
})