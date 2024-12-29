import { RecipeList } from '@/components/RecipeList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Рецепты'
}

export default function PostListPage() {
  return (
    <RecipeList />
  )
} 