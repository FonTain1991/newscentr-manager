import { useGetRecipeByIdSuspenseQuery } from '@/gql/getRecipeById'
import dayjs from 'dayjs'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export function useGetRecipeById() {
  const { id, copyId } = useParams()
  const { data } = useGetRecipeByIdSuspenseQuery({
    variables: { id: String(id || copyId) },
    skip: !id && !copyId,
    fetchPolicy: 'cache-and-network'
  })

  return useMemo(() => {
    const recipe = data?.getRecipeById
    return {
      ...recipe,
      activeCookingTime: recipe?.activeCookingTime && dayjs(recipe.activeCookingTime),
      totalCookingTime: recipe?.totalCookingTime && dayjs(recipe.totalCookingTime)
    }
  }, [data?.getRecipeById])
}