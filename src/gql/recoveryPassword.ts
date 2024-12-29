/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RecoveryPasswordMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
}>;


export type RecoveryPasswordMutation = { __typename?: 'Mutation', recoveryPassword?: string | null };


export const RecoveryPasswordDocument = gql`
    mutation recoveryPassword($email: String!) {
  recoveryPassword(email: $email)
}
    `;
export type RecoveryPasswordMutationFn = Apollo.MutationFunction<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>;

/**
 * __useRecoveryPasswordMutation__
 *
 * To run a mutation, you first call `useRecoveryPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoveryPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoveryPasswordMutation, { data, loading, error }] = useRecoveryPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRecoveryPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>(RecoveryPasswordDocument, options);
      }
export type RecoveryPasswordMutationHookResult = ReturnType<typeof useRecoveryPasswordMutation>;
export type RecoveryPasswordMutationResult = Apollo.MutationResult<RecoveryPasswordMutation>;
export type RecoveryPasswordMutationOptions = Apollo.BaseMutationOptions<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>;