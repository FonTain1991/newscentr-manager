import { SlackOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { memo } from 'react'
import { SidebarMenu } from '../Menu/SidebarMenu'

const { Sider } = Layout
export const SiderBar = memo(() => {
  return (
    <Sider collapsible width={250}>
      <div className='!overflow-auto !sticky !left-0 !top-0 !bottom-0'>
        <div className='w-full flex justify-center items-center h-16 border-b border-logo-border'>
          <SlackOutlined className='bg-white text-3xl' />
        </div>
        <SidebarMenu />
      </div>
    </Sider>
  )
})