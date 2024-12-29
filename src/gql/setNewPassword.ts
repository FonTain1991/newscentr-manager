/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SetNewPasswordMutationVariables = Types.Exact<{
  password: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
  password2: Types.Scalars['String']['input'];
}>;


export type SetNewPasswordMutation = { __typename?: 'Mutation', setNewPassword?: string | null };


export const SetNewPasswordDocument = gql`
    mutation setNewPassword($password: String!, $token: String!, $password2: String!) {
  setNewPassword(password: $password, token: $token, password2: $password2)
}
    `;
export type SetNewPasswordMutationFn = Apollo.MutationFunction<SetNewPasswordMutation, SetNewPasswordMutationVariables>;

/**
 * __useSetNewPasswordMutation__
 *
 * To run a mutation, you first call `useSetNewPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNewPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNewPasswordMutation, { data, loading, error }] = useSetNewPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *      password2: // value for 'password2'
 *   },
 * });
 */
export function useSetNewPasswordMutation(baseOptions?: Apollo.MutationHookOptions<SetNewPasswordMutation, SetNewPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetNewPasswordMutation, SetNewPasswordMutationVariables>(SetNewPasswordDocument, options);
      }
export type SetNewPasswordMutationHookResult = ReturnType<typeof useSetNewPasswordMutation>;
export type SetNewPasswordMutationResult = Apollo.MutationResult<SetNewPasswordMutation>;
export type SetNewPasswordMutationOptions = Apollo.BaseMutationOptions<SetNewPasswordMutation, SetNewPasswordMutationVariables>;