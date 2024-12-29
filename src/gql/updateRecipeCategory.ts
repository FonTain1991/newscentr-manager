/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateRecipeCategoryMutationVariables = Types.Exact<{
  category: Types.RecipeCategoryUpdate;
}>;


export type UpdateRecipeCategoryMutation = { __typename?: 'Mutation', updateRecipeCategory?: { __typename?: 'RecipeCategory', name: string, id: string, url: string, description: string, keywords?: string | null, parentId?: string | null, text?: string | null } | null };


export const UpdateRecipeCategoryDocument = gql`
    mutation updateRecipeCategory($category: RecipeCategoryUpdate!) {
  updateRecipeCategory(category: $category) {
    name
    id
    url
    description
    keywords
    parentId
    text
  }
}
    `;
export type UpdateRecipeCategoryMutationFn = Apollo.MutationFunction<UpdateRecipeCategoryMutation, UpdateRecipeCategoryMutationVariables>;

/**
 * __useUpdateRecipeCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeCategoryMutation, { data, loading, error }] = useUpdateRecipeCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdateRecipeCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRecipeCategoryMutation, UpdateRecipeCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRecipeCategoryMutation, UpdateRecipeCategoryMutationVariables>(UpdateRecipeCategoryDocument, options);
      }
export type UpdateRecipeCategoryMutationHookResult = ReturnType<typeof useUpdateRecipeCategoryMutation>;
export type UpdateRecipeCategoryMutationResult = Apollo.MutationResult<UpdateRecipeCategoryMutation>;
export type UpdateRecipeCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateRecipeCategoryMutation, UpdateRecipeCategoryMutationVariables>;