import { useGetPostByIdSuspenseQuery } from '@/gql/getPostById'
import { useParams } from 'next/navigation'

export function useGetPostById() {
  const { id, copyId } = useParams()
  const { data } = useGetPostByIdSuspenseQuery({
    variables: { id: String(id || copyId) },
    skip: !id && !copyId,
    fetchPolicy: 'cache-and-network'
  })

  return data?.getPostById
}