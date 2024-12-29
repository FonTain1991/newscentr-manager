import { SORT } from '@/constants'
import type { TableColumnsType } from 'antd'
import { TableProps } from 'antd/lib'
import { useMemo, useState } from 'react'

type OnChange = NonNullable<TableProps['onChange']>;
type GetSingle<T> = T extends (infer U)[] ? U : never;
export type Sorts = GetSingle<Parameters<OnChange>[2]>;

export function useTranslationListColumns() {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({
    columnKey: 'value',
    order: 'ascend'
  })

  const columns: TableColumnsType = useMemo(() => {
    return [
      {
        dataIndex: 'value',
        key: 'value',
        title: 'Название',
        render: text => text,
        sorter: true,
        sortDirections: ['ascend', 'descend', 'ascend'],
        sortOrder: sortedInfo.columnKey === 'value' ? sortedInfo.order : null
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