import { RecipeForm } from '@/components/RecipeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Новый рецепт'
}

export default function PostFormPage() {
  return (
    <RecipeForm />
  )
} 