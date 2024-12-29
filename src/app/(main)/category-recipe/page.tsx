import { CategoryRecipeList } from '@/components/CategoryRecipeList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Категории. Рецепт'
}

export default function CategoryListPage() {
  return (
    <CategoryRecipeList />
  )
} 