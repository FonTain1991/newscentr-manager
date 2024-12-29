/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CheckRecoveryTokenQueryVariables = Types.Exact<{
  token: Types.Scalars['String']['input'];
}>;


export type CheckRecoveryTokenQuery = { __typename?: 'Query', checkRecoveryToken?: string | null };


export const CheckRecoveryTokenDocument = gql`
    query checkRecoveryToken($token: String!) {
  checkRecoveryToken(token: $token)
}
    `;

/**
 * __useCheckRecoveryTokenQuery__
 *
 * To run a query within a React component, call `useCheckRecoveryTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckRecoveryTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckRecoveryTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCheckRecoveryTokenQuery(baseOptions: Apollo.QueryHookOptions<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables> & ({ variables: CheckRecoveryTokenQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables>(CheckRecoveryTokenDocument, options);
      }
export function useCheckRecoveryTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables>(CheckRecoveryTokenDocument, options);
        }
export function useCheckRecoveryTokenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables>(CheckRecoveryTokenDocument, options);
        }
export type CheckRecoveryTokenQueryHookResult = ReturnType<typeof useCheckRecoveryTokenQuery>;
export type CheckRecoveryTokenLazyQueryHookResult = ReturnType<typeof useCheckRecoveryTokenLazyQuery>;
export type CheckRecoveryTokenSuspenseQueryHookResult = ReturnType<typeof useCheckRecoveryTokenSuspenseQuery>;
export type CheckRecoveryTokenQueryResult = Apollo.QueryResult<CheckRecoveryTokenQuery, CheckRecoveryTokenQueryVariables>;