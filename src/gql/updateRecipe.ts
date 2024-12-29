/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateRecipeMutationVariables = Types.Exact<{
  recipe: Types.RecipeUpdate;
}>;


export type UpdateRecipeMutation = { __typename?: 'Mutation', updateRecipe?: { __typename?: 'Recipe', id: string, pageName: string, pageTitle: string, url: string, text: string, createdAt?: any | null, updatedAt?: any | null, isPublish: boolean, recipeCategoryId: string, keywords?: string | null, description: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, activeCookingTime?: any | null, totalCookingTime?: any | null, ingredients: Array<{ __typename?: 'RecipeIngredient', id?: string | null, ingredientId: string, value?: string | null, note?: string | null }> } | null };


export const UpdateRecipeDocument = gql`
    mutation updateRecipe($recipe: RecipeUpdate!) {
  updateRecipe(recipe: $recipe) {
    id
    pageName
    pageTitle
    url
    text
    createdAt
    updatedAt
    isPublish
    recipeCategoryId
    keywords
    description
    previewId
    previewAlt
    previewTitle
    activeCookingTime
    totalCookingTime
    ingredients {
      id
      ingredientId
      value
      note
    }
  }
}
    `;
export type UpdateRecipeMutationFn = Apollo.MutationFunction<UpdateRecipeMutation, UpdateRecipeMutationVariables>;

/**
 * __useUpdateRecipeMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeMutation, { data, loading, error }] = useUpdateRecipeMutation({
 *   variables: {
 *      recipe: // value for 'recipe'
 *   },
 * });
 */
export function useUpdateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRecipeMutation, UpdateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRecipeMutation, UpdateRecipeMutationVariables>(UpdateRecipeDocument, options);
      }
export type UpdateRecipeMutationHookResult = ReturnType<typeof useUpdateRecipeMutation>;
export type UpdateRecipeMutationResult = Apollo.MutationResult<UpdateRecipeMutation>;
export type UpdateRecipeMutationOptions = Apollo.BaseMutationOptions<UpdateRecipeMutation, UpdateRecipeMutationVariables>;