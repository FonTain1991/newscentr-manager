import { SORT } from '@/constants'
import type { TableColumnsType } from 'antd'
import { TableProps } from 'antd/lib'
import { useMemo, useState } from 'react'

type OnChange = NonNullable<TableProps['onChange']>;
type GetSingle<T> = T extends (infer U)[] ? U : never;
export type Sorts = GetSingle<Parameters<OnChange>[2]>;

export function usePostListColumns() {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({
    columnKey: 'pageName',
    order: 'ascend'
  })

  const columns: TableColumnsType = useMemo(() => {
    return [
      {
        dataIndex: 'pageName',
        key: 'pageName',
        title: 'Название',
        render: pageName => pageName,
        sorter: true,
        sortDirections: ['ascend', 'descend', 'ascend'],
        sortOrder: sortedInfo.columnKey === 'pageName' ? sortedInfo.order : null
      }
    ]
  }, [sortedInfo])

  const orderBy = JSON.stringify({
    [String(sortedInfo.columnKey)]: sortedInfo.order === 'ascend' ? SORT.ASCEND : SORT.DESCEND
  })

  return {
    columns,
    orderBy,
    setSortedInfo
  }
}