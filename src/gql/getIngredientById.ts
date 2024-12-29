/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import { IngredientFragmentDoc } from './fragments';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetIngredientByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetIngredientByIdQuery = { __typename?: 'Query', getIngredientById?: { __typename?: 'Ingredient', id: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, iconId?: string | null, title: string, description?: string | null, parentId?: string | null } | null };


export const GetIngredientByIdDocument = gql`
    query getIngredientById($id: String!) {
  getIngredientById(id: $id) {
    ...Ingredient
  }
}
    ${IngredientFragmentDoc}`;

/**
 * __useGetIngredientByIdQuery__
 *
 * To run a query within a React component, call `useGetIngredientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIngredientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetIngredientByIdQuery(baseOptions: Apollo.QueryHookOptions<GetIngredientByIdQuery, GetIngredientByIdQueryVariables> & ({ variables: GetIngredientByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIngredientByIdQuery, GetIngredientByIdQueryVariables>(GetIngredientByIdDocument, options);
      }
export function useGetIngredientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIngredientByIdQuery, GetIngredientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIngredientByIdQuery, GetIngredientByIdQueryVariables>(GetIngredientByIdDocument, options);
        }
export function useGetIngredientByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetIngredientByIdQuery, GetIngredientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIngredientByIdQuery, GetIngredientByIdQueryVariables>(GetIngredientByIdDocument, options);
        }
export type GetIngredientByIdQueryHookResult = ReturnType<typeof useGetIngredientByIdQuery>;
export type GetIngredientByIdLazyQueryHookResult = ReturnType<typeof useGetIngredientByIdLazyQuery>;
export type GetIngredientByIdSuspenseQueryHookResult = ReturnType<typeof useGetIngredientByIdSuspenseQuery>;
export type GetIngredientByIdQueryResult = Apollo.QueryResult<GetIngredientByIdQuery, GetIngredientByIdQueryVariables>;