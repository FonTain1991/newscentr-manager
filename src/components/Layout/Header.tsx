import { Layout } from 'antd'
import { FC, memo } from 'react'
import { UserMenu } from '../Menu/UserMenu'

export const Header: FC = memo(() => {
  return (
    <Layout.Header
      className='!bg-white !p-0 border-b border-header-border !px-4 flex justify-end items-center'
    >
      <UserMenu />
    </Layout.Header>
  )
})