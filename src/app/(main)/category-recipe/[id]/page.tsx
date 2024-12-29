import { CategoryFormRecipe } from '@/components/CategoryFormRecipe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Обновление категории'
}

export default function CategoryFormPage() {
  return (
    <CategoryFormRecipe />
  )
} 