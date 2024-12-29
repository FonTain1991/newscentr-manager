import { Breadcrumb } from 'antd'
import { memo } from 'react'

interface IBreadcrumb {
  title: string | React.ReactNode
  href?: string
}

interface IBreadcrumbs {
  items: IBreadcrumb[]
}

export const Breadcrumbs = memo(({ items }: IBreadcrumbs) => {
  return (
    <Breadcrumb
      items={items}
    />
  )
})