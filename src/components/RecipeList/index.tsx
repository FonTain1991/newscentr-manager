'use client'

import { TABLE_LOCALE } from '@/constants'
import { useGetRecipesSuspenseQuery } from '@/gql/getRecipeList'
import { useEvent } from '@/hooks/useEvent'
import { usePostListColumns } from '@/hooks/Columns/usePostListColumns'
import { Table } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useState } from 'react'
import { ContentList } from '../Layout'
import { TotalResult } from '../Layout/TotalResult'

export const RecipeList = memo(() => {
  const { push } = useRouter()
  const [searchText, setSearchText] = useState<string>('')
  const { data } = useGetRecipesSuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })
  const recipes = data?.getRecipes

  const { columns, setSortedInfo, orderBy } = usePostListColumns()

  const goToEmployee = useEvent(({ id }) => {
    push(`/recipes/${id}`)
  })

  const onRow = useEvent(record => {
    return {
      onClick: () => goToEmployee(record)
    }
  })

  const onChange = useEvent((pagination, filters, sorter) => {
    // setSortedInfo(sorter as Sorts)
  })

  return (
    <ContentList
      title='Рецепты'
      linkToCreatePage='/recipes/add'
      onSearch={setSearchText}
      searchValue={searchText}
      extra={<TotalResult text={recipes?.length} />}
      textNewAction='Новый рецепт'
    >
      <Table
        columns={columns}
        dataSource={recipes ?? []}
        bordered
        pagination={false}
        onRow={onRow}
        rowHoverable
        sticky
        locale={TABLE_LOCALE}
        rowClassName='cursor-pointer'
        onChange={onChange}
        rowKey={({ id }) => id}
      />
    </ContentList>
  )
})