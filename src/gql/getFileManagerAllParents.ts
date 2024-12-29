/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFileManagerAllParentsQueryVariables = Types.Exact<{
  parentId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetFileManagerAllParentsQuery = { __typename?: 'Query', getFileManagerAllParents?: Array<{ __typename?: 'FileManager', name?: string | null, id: string }> | null };


export const GetFileManagerAllParentsDocument = gql`
    query getFileManagerAllParents($parentId: String) {
  getFileManagerAllParents(parentId: $parentId) {
    name
    id
  }
}
    `;

/**
 * __useGetFileManagerAllParentsQuery__
 *
 * To run a query within a React component, call `useGetFileManagerAllParentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileManagerAllParentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileManagerAllParentsQuery({
 *   variables: {
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useGetFileManagerAllParentsQuery(baseOptions?: Apollo.QueryHookOptions<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>(GetFileManagerAllParentsDocument, options);
      }
export function useGetFileManagerAllParentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>(GetFileManagerAllParentsDocument, options);
        }
export function useGetFileManagerAllParentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>(GetFileManagerAllParentsDocument, options);
        }
export type GetFileManagerAllParentsQueryHookResult = ReturnType<typeof useGetFileManagerAllParentsQuery>;
export type GetFileManagerAllParentsLazyQueryHookResult = ReturnType<typeof useGetFileManagerAllParentsLazyQuery>;
export type GetFileManagerAllParentsSuspenseQueryHookResult = ReturnType<typeof useGetFileManagerAllParentsSuspenseQuery>;
export type GetFileManagerAllParentsQueryResult = Apollo.QueryResult<GetFileManagerAllParentsQuery, GetFileManagerAllParentsQueryVariables>;