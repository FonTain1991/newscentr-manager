/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
export type IngredientListFragment = { __typename?: 'Ingredient', id: string, title: string, parentId?: string | null };

export type IngredientFragment = { __typename?: 'Ingredient', id: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, iconId?: string | null, title: string, description?: string | null, parentId?: string | null };

export const IngredientListFragmentDoc = gql`
    fragment IngredientList on Ingredient {
  id
  title
  parentId
}
    `;
export const IngredientFragmentDoc = gql`
    fragment Ingredient on Ingredient {
  id
  previewId
  previewAlt
  previewTitle
  iconId
  title
  description
  parentId
}
    `;