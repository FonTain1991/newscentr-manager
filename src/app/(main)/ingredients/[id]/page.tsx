import { IngredientForm } from '@/components/IngredientForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Редактирование ингредиента'
}

export default function PostFormPage() {
  return (
    <IngredientForm />
  )
} 