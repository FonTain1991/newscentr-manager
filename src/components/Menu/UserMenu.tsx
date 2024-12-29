import { UserOutlined } from '@ant-design/icons'
import { Dropdown, type MenuProps } from 'antd'
import { FC, memo } from 'react'
import { SignOut } from '../Auth/SignOut'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: <SignOut />
  }
]
export const UserMenu: FC = memo(() => {
  return (
    <Dropdown menu={{ items }}>
      <a>
        <UserOutlined />
      </a>
    </Dropdown>
  )
})