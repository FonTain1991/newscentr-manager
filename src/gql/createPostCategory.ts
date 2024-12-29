/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreatePostCategoryMutationVariables = Types.Exact<{
  category: Types.PostCategoryCreate;
}>;


export type CreatePostCategoryMutation = { __typename?: 'Mutation', createPostCategory?: { __typename?: 'PostCategory', name: string } | null };


export const CreatePostCategoryDocument = gql`
    mutation createPostCategory($category: PostCategoryCreate!) {
  createPostCategory(category: $category) {
    name
  }
}
    `;
export type CreatePostCategoryMutationFn = Apollo.MutationFunction<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>;

/**
 * __useCreatePostCategoryMutation__
 *
 * To run a mutation, you first call `useCreatePostCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostCategoryMutation, { data, loading, error }] = useCreatePostCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCreatePostCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>(CreatePostCategoryDocument, options);
      }
export type CreatePostCategoryMutationHookResult = ReturnType<typeof useCreatePostCategoryMutation>;
export type CreatePostCategoryMutationResult = Apollo.MutationResult<CreatePostCategoryMutation>;
export type CreatePostCategoryMutationOptions = Apollo.BaseMutationOptions<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>;