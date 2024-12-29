'use client'

import { TABLE_LOCALE } from '@/constants'
import { useGetIngredientsSuspenseQuery } from '@/gql/getIngredientList'
import { useIngredientListColumns } from '@/hooks/Columns/useIngredientListColumns'
import { useEvent } from '@/hooks/useEvent'
import { Table } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useState } from 'react'
import { ContentList } from '../Layout'
import { TotalResult } from '../Layout/TotalResult'

export const IngredientList = memo(() => {
  const { push } = useRouter()
  const [searchText, setSearchText] = useState<string>('')
  const { data } = useGetIngredientsSuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })
  const ingredients = data?.getIngredients

  const { columns, setSortedInfo, orderBy } = useIngredientListColumns()

  const goToEmployee = useEvent(({ id }) => {
    push(`/ingredients/${id}`)
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
      title='Ингредиенты'
      linkToCreatePage='/ingredients/add'
      onSearch={setSearchText}
      searchValue={searchText}
      extra={<TotalResult text={ingredients?.length} />}
      textNewAction='Новый ингредиент'
    >
      <Table
        columns={columns}
        dataSource={ingredients ?? []}
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