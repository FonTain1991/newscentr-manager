/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipeCategoryByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetRecipeCategoryByIdQuery = { __typename?: 'Query', getRecipeCategoryById?: { __typename?: 'RecipeCategory', id: string, name: string, url: string, parentId?: string | null, keywords?: string | null, description: string, text?: string | null } | null };


export const GetRecipeCategoryByIdDocument = gql`
    query getRecipeCategoryById($id: String!) {
  getRecipeCategoryById(id: $id) {
    id
    name
    url
    parentId
    keywords
    description
    text
  }
}
    `;

/**
 * __useGetRecipeCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetRecipeCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecipeCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables> & ({ variables: GetRecipeCategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables>(GetRecipeCategoryByIdDocument, options);
      }
export function useGetRecipeCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables>(GetRecipeCategoryByIdDocument, options);
        }
export function useGetRecipeCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables>(GetRecipeCategoryByIdDocument, options);
        }
export type GetRecipeCategoryByIdQueryHookResult = ReturnType<typeof useGetRecipeCategoryByIdQuery>;
export type GetRecipeCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetRecipeCategoryByIdLazyQuery>;
export type GetRecipeCategoryByIdSuspenseQueryHookResult = ReturnType<typeof useGetRecipeCategoryByIdSuspenseQuery>;
export type GetRecipeCategoryByIdQueryResult = Apollo.QueryResult<GetRecipeCategoryByIdQuery, GetRecipeCategoryByIdQueryVariables>;