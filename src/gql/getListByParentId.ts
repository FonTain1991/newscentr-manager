/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetListByParentIdQueryVariables = Types.Exact<{
  parentId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetListByParentIdQuery = { __typename?: 'Query', getListByParentId?: Array<{ __typename?: 'FileManager', id: string, name?: string | null, parentId?: string | null, value?: string | null, type: Types.FileManagerType }> | null };


export const GetListByParentIdDocument = gql`
    query getListByParentId($parentId: String) {
  getListByParentId(parentId: $parentId) {
    id
    name
    parentId
    value
    type
  }
}
    `;

/**
 * __useGetListByParentIdQuery__
 *
 * To run a query within a React component, call `useGetListByParentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListByParentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListByParentIdQuery({
 *   variables: {
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useGetListByParentIdQuery(baseOptions?: Apollo.QueryHookOptions<GetListByParentIdQuery, GetListByParentIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListByParentIdQuery, GetListByParentIdQueryVariables>(GetListByParentIdDocument, options);
      }
export function useGetListByParentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListByParentIdQuery, GetListByParentIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListByParentIdQuery, GetListByParentIdQueryVariables>(GetListByParentIdDocument, options);
        }
export function useGetListByParentIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListByParentIdQuery, GetListByParentIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListByParentIdQuery, GetListByParentIdQueryVariables>(GetListByParentIdDocument, options);
        }
export type GetListByParentIdQueryHookResult = ReturnType<typeof useGetListByParentIdQuery>;
export type GetListByParentIdLazyQueryHookResult = ReturnType<typeof useGetListByParentIdLazyQuery>;
export type GetListByParentIdSuspenseQueryHookResult = ReturnType<typeof useGetListByParentIdSuspenseQuery>;
export type GetListByParentIdQueryResult = Apollo.QueryResult<GetListByParentIdQuery, GetListByParentIdQueryVariables>;