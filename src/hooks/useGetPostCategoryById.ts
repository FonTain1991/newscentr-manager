import { useGetPostCategoryByIdSuspenseQuery } from '@/gql/getPostCategoryById'
import { useParams } from 'next/navigation'

export function useGetPostCategoryById() {
  const { id, copyId } = useParams()
  const { data } = useGetPostCategoryByIdSuspenseQuery({
    variables: { id: String(id || copyId) },
    skip: !id && !copyId,
    fetchPolicy: 'cache-and-network'
  })

  return data?.getPostCategoryById
}