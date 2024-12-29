import { IngredientForm } from '@/components/IngredientForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Новый ингредиент'
}

export default function PostFormPage() {
  return (
    <IngredientForm />
  )
} 