import { Tabs, TabsProps } from 'antd'
import { memo } from 'react'
import { CeoInfo } from './CeoInfo'
import { MainInfo } from './MainInfo'

export const TabForm = memo(() => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Основная информация',
      children: <MainInfo />
    },
    {
      key: '2',
      label: 'CEO',
      children: <CeoInfo />,
      forceRender: true
    },
    {
      key: '3',
      label: 'Статистика',
      children: 'Здесь будет статистика',
      forceRender: true
    }
  ]

  return (
    <Tabs items={items} />
  )
})