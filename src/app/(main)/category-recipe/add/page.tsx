import { CategoryFormRecipe } from '@/components/CategoryFormRecipe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Категории'
}

export default function CategoryFormPage() {
  return (
    <CategoryFormRecipe />
  )
} 