/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RemoveFileMutationVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type RemoveFileMutation = { __typename?: 'Mutation', removeFile?: string | null };


export const RemoveFileDocument = gql`
    mutation removeFile($id: String!) {
  removeFile(id: $id)
}
    `;
export type RemoveFileMutationFn = Apollo.MutationFunction<RemoveFileMutation, RemoveFileMutationVariables>;

/**
 * __useRemoveFileMutation__
 *
 * To run a mutation, you first call `useRemoveFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFileMutation, { data, loading, error }] = useRemoveFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFileMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFileMutation, RemoveFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFileMutation, RemoveFileMutationVariables>(RemoveFileDocument, options);
      }
export type RemoveFileMutationHookResult = ReturnType<typeof useRemoveFileMutation>;
export type RemoveFileMutationResult = Apollo.MutationResult<RemoveFileMutation>;
export type RemoveFileMutationOptions = Apollo.BaseMutationOptions<RemoveFileMutation, RemoveFileMutationVariables>;