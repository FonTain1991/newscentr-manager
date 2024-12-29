'use client'

import { TABLE_LOCALE } from '@/constants'
import { useGetPostsSuspenseQuery } from '@/gql/getPostList'
import { usePostListColumns } from '@/hooks/Columns/usePostListColumns'
import { useEvent } from '@/hooks/useEvent'
import { Table } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useState } from 'react'
import { ContentList } from '../Layout'
import { TotalResult } from '../Layout/TotalResult'

export const PostList = memo(() => {
  const { push } = useRouter()
  const [searchText, setSearchText] = useState<string>('')
  const { data } = useGetPostsSuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })
  const posts = data?.getPosts

  const { columns, setSortedInfo, orderBy } = usePostListColumns()

  const goToEmployee = useEvent(({ id }) => {
    push(`/posts/${id}`)
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
      title='Посты'
      linkToCreatePage='/posts/add'
      onSearch={setSearchText}
      searchValue={searchText}
      extra={<TotalResult text={posts?.length} />}
      textNewAction='Новый пост'
    >
      <Table
        columns={columns}
        dataSource={posts ?? []}
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