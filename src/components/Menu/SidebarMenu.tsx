
import { SIDEBAR_MENU_BG } from '@/constants/colors'
import { AppstoreOutlined, BookOutlined, FolderOutlined, GlobalOutlined, HomeOutlined, OneToOneOutlined } from '@ant-design/icons'
import { ConfigProvider, Menu, MenuProps } from 'antd'
import Link from 'next/link'
import { FC, createElement, memo } from 'react'

const items: MenuProps['items'] = [
  { icon: HomeOutlined, title: 'Панель управления', href: '/' },
  { icon: FolderOutlined, title: 'Категории. Блог', href: '/category-post' },
  { icon: FolderOutlined, title: 'Категории. Рецепты', href: '/category-recipe' },
  { icon: BookOutlined, title: 'Блог', href: '/posts' },
  { icon: OneToOneOutlined, title: 'Рецепты', href: '/recipes' },
  { icon: AppstoreOutlined, title: 'Ингредиенты', href: '/ingredients' }
].map((item, index) => ({
  key: String(index + 1),
  icon: createElement(item.icon),
  label: <Link href={item.href} key={index}>{item.title}</Link>
}))

export const SidebarMenu: FC = memo(() => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemHoverBg: SIDEBAR_MENU_BG,
            darkItemSelectedBg: SIDEBAR_MENU_BG,
            itemBorderRadius: 0,
            itemMarginInline: 0
          }
        }
      }}
    >
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['0']} items={items} />
    </ConfigProvider>
  )
})