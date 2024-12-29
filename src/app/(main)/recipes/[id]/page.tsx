import { RecipeForm } from '@/components/RecipeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Рецепт'
}

export default function PostFormPage() {
  return (
    <RecipeForm />
  )
} 