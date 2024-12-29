/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateRecipeCategoryMutationVariables = Types.Exact<{
  category: Types.RecipeCategoryCreate;
}>;


export type CreateRecipeCategoryMutation = { __typename?: 'Mutation', createRecipeCategory?: { __typename?: 'RecipeCategory', name: string } | null };


export const CreateRecipeCategoryDocument = gql`
    mutation createRecipeCategory($category: RecipeCategoryCreate!) {
  createRecipeCategory(category: $category) {
    name
  }
}
    `;
export type CreateRecipeCategoryMutationFn = Apollo.MutationFunction<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>;

/**
 * __useCreateRecipeCategoryMutation__
 *
 * To run a mutation, you first call `useCreateRecipeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeCategoryMutation, { data, loading, error }] = useCreateRecipeCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCreateRecipeCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>(CreateRecipeCategoryDocument, options);
      }
export type CreateRecipeCategoryMutationHookResult = ReturnType<typeof useCreateRecipeCategoryMutation>;
export type CreateRecipeCategoryMutationResult = Apollo.MutationResult<CreateRecipeCategoryMutation>;
export type CreateRecipeCategoryMutationOptions = Apollo.BaseMutationOptions<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>;