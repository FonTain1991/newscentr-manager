import { useGetRecipeCategoryByIdSuspenseQuery } from '@/gql/getRecipeCategoryById'
import { useParams } from 'next/navigation'

export function useGetRecipeCategoryById() {
  const { id, copyId } = useParams()
  const { data } = useGetRecipeCategoryByIdSuspenseQuery({
    variables: { id: String(id || copyId) },
    skip: !id && !copyId,
    fetchPolicy: 'cache-and-network'
  })

  return data?.getRecipeCategoryById
}