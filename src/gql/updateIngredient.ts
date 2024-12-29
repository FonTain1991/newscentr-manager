/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import { IngredientFragmentDoc } from './fragments';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateIngredientMutationVariables = Types.Exact<{
  ingredient: Types.IngredientUpdate;
}>;


export type UpdateIngredientMutation = { __typename?: 'Mutation', updateIngredient?: { __typename?: 'Ingredient', id: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, iconId?: string | null, title: string, description?: string | null, parentId?: string | null } | null };


export const UpdateIngredientDocument = gql`
    mutation updateIngredient($ingredient: IngredientUpdate!) {
  updateIngredient(ingredient: $ingredient) {
    ...Ingredient
  }
}
    ${IngredientFragmentDoc}`;
export type UpdateIngredientMutationFn = Apollo.MutationFunction<UpdateIngredientMutation, UpdateIngredientMutationVariables>;

/**
 * __useUpdateIngredientMutation__
 *
 * To run a mutation, you first call `useUpdateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIngredientMutation, { data, loading, error }] = useUpdateIngredientMutation({
 *   variables: {
 *      ingredient: // value for 'ingredient'
 *   },
 * });
 */
export function useUpdateIngredientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIngredientMutation, UpdateIngredientMutationVariables>(UpdateIngredientDocument, options);
      }
export type UpdateIngredientMutationHookResult = ReturnType<typeof useUpdateIngredientMutation>;
export type UpdateIngredientMutationResult = Apollo.MutationResult<UpdateIngredientMutation>;
export type UpdateIngredientMutationOptions = Apollo.BaseMutationOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>;