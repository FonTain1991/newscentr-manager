import { CategoryPostList } from '@/components/CategoryPostList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Категории. Блог'
}

export default function CategoryListPage() {
  return (
    <CategoryPostList />
  )
} 