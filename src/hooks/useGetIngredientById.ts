import { useGetIngredientByIdSuspenseQuery } from '@/gql/getIngredientById'
import { useParams } from 'next/navigation'

export function useGetIngredientById() {
  const { id, copyId } = useParams()
  const { data } = useGetIngredientByIdSuspenseQuery({
    variables: { id: String(id || copyId) },
    skip: !id && !copyId,
    fetchPolicy: 'cache-and-network'
  })

  return data?.getIngredientById
}