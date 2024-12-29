/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostCategoryByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetPostCategoryByIdQuery = { __typename?: 'Query', getPostCategoryById?: { __typename?: 'PostCategory', id: string, name: string, url: string, parentId?: string | null, keywords?: string | null, description: string, text?: string | null } | null };


export const GetPostCategoryByIdDocument = gql`
    query getPostCategoryById($id: String!) {
  getPostCategoryById(id: $id) {
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
 * __useGetPostCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetPostCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables> & ({ variables: GetPostCategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables>(GetPostCategoryByIdDocument, options);
      }
export function useGetPostCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables>(GetPostCategoryByIdDocument, options);
        }
export function useGetPostCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables>(GetPostCategoryByIdDocument, options);
        }
export type GetPostCategoryByIdQueryHookResult = ReturnType<typeof useGetPostCategoryByIdQuery>;
export type GetPostCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetPostCategoryByIdLazyQuery>;
export type GetPostCategoryByIdSuspenseQueryHookResult = ReturnType<typeof useGetPostCategoryByIdSuspenseQuery>;
export type GetPostCategoryByIdQueryResult = Apollo.QueryResult<GetPostCategoryByIdQuery, GetPostCategoryByIdQueryVariables>;