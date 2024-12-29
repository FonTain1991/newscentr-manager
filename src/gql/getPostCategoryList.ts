/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostCategoryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPostCategoryQuery = { __typename?: 'Query', getPostCategory?: Array<{ __typename?: 'PostCategory', id: string, name: string, url: string, parentId?: string | null, keywords?: string | null, description: string }> | null };


export const GetPostCategoryDocument = gql`
    query getPostCategory {
  getPostCategory {
    id
    name
    url
    parentId
    keywords
    description
  }
}
    `;

/**
 * __useGetPostCategoryQuery__
 *
 * To run a query within a React component, call `useGetPostCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetPostCategoryQuery, GetPostCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostCategoryQuery, GetPostCategoryQueryVariables>(GetPostCategoryDocument, options);
      }
export function useGetPostCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostCategoryQuery, GetPostCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostCategoryQuery, GetPostCategoryQueryVariables>(GetPostCategoryDocument, options);
        }
export function useGetPostCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostCategoryQuery, GetPostCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostCategoryQuery, GetPostCategoryQueryVariables>(GetPostCategoryDocument, options);
        }
export type GetPostCategoryQueryHookResult = ReturnType<typeof useGetPostCategoryQuery>;
export type GetPostCategoryLazyQueryHookResult = ReturnType<typeof useGetPostCategoryLazyQuery>;
export type GetPostCategorySuspenseQueryHookResult = ReturnType<typeof useGetPostCategorySuspenseQuery>;
export type GetPostCategoryQueryResult = Apollo.QueryResult<GetPostCategoryQuery, GetPostCategoryQueryVariables>;