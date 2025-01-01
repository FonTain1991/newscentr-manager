import { CategoryPostList } from '@/components/CategoryPostList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Рубрики'
}

export default function CategoryListPage() {
  return (
    <CategoryPostList />
  )
} 