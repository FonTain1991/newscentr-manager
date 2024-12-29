import { Tabs, TabsProps } from 'antd'
import { memo } from 'react'
import { UploadFile } from './UploadFile'
import { Body } from './Body'

export const FileManagerTabs = memo(() => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Список',
      children: <Body />
    },
    {
      key: '2',
      label: 'Загрузить',
      children: <UploadFile />
    }
  ]

  return (
    <Tabs items={items} />
  )
})