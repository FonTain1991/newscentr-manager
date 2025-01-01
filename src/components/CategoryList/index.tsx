'use client'

import { TABLE_LOCALE } from '@/constants'
import { useCategoryListColumns } from '@/hooks/Columns/useCategoryListColumns'
import { useEvent } from '@/hooks/useEvent'
import { Table } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import { memo, useState } from 'react'
import { ContentList } from '../Layout'
import { TotalResult } from '../Layout/TotalResult'

interface IRubricList {
  title: string
  linkToCreatePage: string
  dataSource: any

}
export const CategoryList = memo((props: IRubricList) => {
  const { title, linkToCreatePage, dataSource } = props
  const { push } = useRouter()
  const pathname = usePathname()

  const [searchText, setSearchText] = useState<string>('')

  const { columns, setSortedInfo, orderBy } = useCategoryListColumns()

  const goToRow = useEvent(({ id }) => {
    push(`${pathname}/${id}`)
  })

  const onRow = useEvent(record => {
    return {
      onClick: () => goToRow(record)
    }
  })

  const onChange = useEvent((pagination, filters, sorter) => {
    // setSortedInfo(sorter as Sorts)
  })

  return (
    <ContentList
      title={title}
      linkToCreatePage={linkToCreatePage}
      onSearch={setSearchText}
      searchValue={searchText}
      extra={<TotalResult text={dataSource?.length} />}
      textNewAction='Новая рубрика'
    >
      <Table
        columns={columns}
        dataSource={dataSource ?? []}
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