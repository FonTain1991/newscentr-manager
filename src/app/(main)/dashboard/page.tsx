'use client'

import { useMeSuspenseQuery } from '@/gql/me'

export default function DashboardPage() {
  useMeSuspenseQuery()
  return (
    <div>Dashboard</div>
  )
} 