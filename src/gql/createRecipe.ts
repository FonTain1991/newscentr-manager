/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateRecipeMutationVariables = Types.Exact<{
  recipe: Types.RecipeCreate;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe?: { __typename?: 'Recipe', id: string, pageName: string, pageTitle: string, url: string, text: string, createdAt?: any | null, updatedAt?: any | null, isPublish: boolean, recipeCategoryId: string, keywords?: string | null, description: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, activeCookingTime?: any | null, totalCookingTime?: any | null } | null };


export const CreateRecipeDocument = gql`
    mutation createRecipe($recipe: RecipeCreate!) {
  createRecipe(recipe: $recipe) {
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
  }
}
    `;
export type CreateRecipeMutationFn = Apollo.MutationFunction<CreateRecipeMutation, CreateRecipeMutationVariables>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      recipe: // value for 'recipe'
 *   },
 * });
 */
export function useCreateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeMutation, CreateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument, options);
      }
export type CreateRecipeMutationHookResult = ReturnType<typeof useCreateRecipeMutation>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<CreateRecipeMutation, CreateRecipeMutationVariables>;