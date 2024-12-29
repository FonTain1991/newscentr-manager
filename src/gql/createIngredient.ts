/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import { IngredientFragmentDoc } from './fragments';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateIngredientMutationVariables = Types.Exact<{
  ingredient: Types.IngredientCreate;
}>;


export type CreateIngredientMutation = { __typename?: 'Mutation', createIngredient?: { __typename?: 'Ingredient', id: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, iconId?: string | null, title: string, description?: string | null, parentId?: string | null } | null };


export const CreateIngredientDocument = gql`
    mutation createIngredient($ingredient: IngredientCreate!) {
  createIngredient(ingredient: $ingredient) {
    ...Ingredient
  }
}
    ${IngredientFragmentDoc}`;
export type CreateIngredientMutationFn = Apollo.MutationFunction<CreateIngredientMutation, CreateIngredientMutationVariables>;

/**
 * __useCreateIngredientMutation__
 *
 * To run a mutation, you first call `useCreateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIngredientMutation, { data, loading, error }] = useCreateIngredientMutation({
 *   variables: {
 *      ingredient: // value for 'ingredient'
 *   },
 * });
 */
export function useCreateIngredientMutation(baseOptions?: Apollo.MutationHookOptions<CreateIngredientMutation, CreateIngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIngredientMutation, CreateIngredientMutationVariables>(CreateIngredientDocument, options);
      }
export type CreateIngredientMutationHookResult = ReturnType<typeof useCreateIngredientMutation>;
export type CreateIngredientMutationResult = Apollo.MutationResult<CreateIngredientMutation>;
export type CreateIngredientMutationOptions = Apollo.BaseMutationOptions<CreateIngredientMutation, CreateIngredientMutationVariables>;