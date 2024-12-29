import { CategoryFormPost } from '@/components/CategoryFormPost'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Обновление категории'
}

export default function CategoryFormPage() {
  return (
    <CategoryFormPost />
  )
} 