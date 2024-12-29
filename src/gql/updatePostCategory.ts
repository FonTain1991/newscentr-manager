/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePostCategoryMutationVariables = Types.Exact<{
  category: Types.PostCategoryUpdate;
}>;


export type UpdatePostCategoryMutation = { __typename?: 'Mutation', updatePostCategory?: { __typename?: 'PostCategory', name: string, id: string, url: string, description: string, keywords?: string | null, parentId?: string | null, text?: string | null } | null };


export const UpdatePostCategoryDocument = gql`
    mutation updatePostCategory($category: PostCategoryUpdate!) {
  updatePostCategory(category: $category) {
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
export type UpdatePostCategoryMutationFn = Apollo.MutationFunction<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>;

/**
 * __useUpdatePostCategoryMutation__
 *
 * To run a mutation, you first call `useUpdatePostCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostCategoryMutation, { data, loading, error }] = useUpdatePostCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdatePostCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>(UpdatePostCategoryDocument, options);
      }
export type UpdatePostCategoryMutationHookResult = ReturnType<typeof useUpdatePostCategoryMutation>;
export type UpdatePostCategoryMutationResult = Apollo.MutationResult<UpdatePostCategoryMutation>;
export type UpdatePostCategoryMutationOptions = Apollo.BaseMutationOptions<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>;