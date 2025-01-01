'use client'

import { useMeSuspenseQuery } from '@/gql/me'

export default function DashboardPage() {
  const { data } = useMeSuspenseQuery()
  console.log(data)
  return (
    <div>Dashboard</div>
  )
} 