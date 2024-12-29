import { PostList } from '@/components/PostList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог'
}

export default function PostListPage() {
  return (
    <PostList />
  )
} 