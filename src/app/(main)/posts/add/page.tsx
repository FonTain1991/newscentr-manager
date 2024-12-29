import { PostForm } from '@/components/PostForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Новый пост'
}

export default function PostFormPage() {
  return (
    <PostForm />
  )
} 