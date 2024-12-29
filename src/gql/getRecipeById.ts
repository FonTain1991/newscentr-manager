/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipeByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetRecipeByIdQuery = { __typename?: 'Query', getRecipeById?: { __typename?: 'Recipe', id: string, pageName: string, pageTitle: string, url: string, text: string, createdAt?: any | null, updatedAt?: any | null, isPublish: boolean, recipeCategoryId: string, keywords?: string | null, description: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, activeCookingTime?: any | null, totalCookingTime?: any | null, ingredients: Array<{ __typename?: 'RecipeIngredient', id?: string | null, ingredientId: string, value?: string | null, note?: string | null }> } | null };


export const GetRecipeByIdDocument = gql`
    query getRecipeById($id: String!) {
  getRecipeById(id: $id) {
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

/**
 * __useGetRecipeByIdQuery__
 *
 * To run a query within a React component, call `useGetRecipeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecipeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeByIdQuery, GetRecipeByIdQueryVariables> & ({ variables: GetRecipeByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeByIdQuery, GetRecipeByIdQueryVariables>(GetRecipeByIdDocument, options);
      }
export function useGetRecipeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeByIdQuery, GetRecipeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeByIdQuery, GetRecipeByIdQueryVariables>(GetRecipeByIdDocument, options);
        }
export function useGetRecipeByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecipeByIdQuery, GetRecipeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipeByIdQuery, GetRecipeByIdQueryVariables>(GetRecipeByIdDocument, options);
        }
export type GetRecipeByIdQueryHookResult = ReturnType<typeof useGetRecipeByIdQuery>;
export type GetRecipeByIdLazyQueryHookResult = ReturnType<typeof useGetRecipeByIdLazyQuery>;
export type GetRecipeByIdSuspenseQueryHookResult = ReturnType<typeof useGetRecipeByIdSuspenseQuery>;
export type GetRecipeByIdQueryResult = Apollo.QueryResult<GetRecipeByIdQuery, GetRecipeByIdQueryVariables>;