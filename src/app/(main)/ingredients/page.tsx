import { IngredientList } from '@/components/IngredientList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ингредиенты'
}

export default function PostListPage() {
  return (
    <IngredientList />
  )
} 