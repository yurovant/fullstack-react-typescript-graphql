import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ListItem = {
  __typename?: 'ListItem';
  category: Category;
  /** @deprecated No longer supported */
  categoryName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ListItemId = {
  __typename?: 'ListItemId';
  id: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  list?: Maybe<Array<ListItem>>;
};

export type GetListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListQuery = { __typename?: 'Query', list?: Array<{ __typename?: 'ListItem', id: number, name: string, categoryName: string, category: { __typename?: 'Category', id: number, name: string } }> | null };

export type GetListIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListIdQuery = { __typename?: 'Query', list?: Array<{ __typename?: 'ListItem', id: number }> | null };


export const GetListDocument = gql`
    query GetList {
  list {
    id
    name
    category {
      id
      name
    }
    categoryName
  }
}
    `;

/**
 * __useGetListQuery__
 *
 * To run a query within a React component, call `useGetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListQuery(baseOptions?: Apollo.QueryHookOptions<GetListQuery, GetListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
      }
export function useGetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListQuery, GetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
        }
export function useGetListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListQuery, GetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
        }
export type GetListQueryHookResult = ReturnType<typeof useGetListQuery>;
export type GetListLazyQueryHookResult = ReturnType<typeof useGetListLazyQuery>;
export type GetListSuspenseQueryHookResult = ReturnType<typeof useGetListSuspenseQuery>;
export type GetListQueryResult = Apollo.QueryResult<GetListQuery, GetListQueryVariables>;
export const GetListIdDocument = gql`
    query GetListId {
  list {
    id
  }
}
    `;

/**
 * __useGetListIdQuery__
 *
 * To run a query within a React component, call `useGetListIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListIdQuery(baseOptions?: Apollo.QueryHookOptions<GetListIdQuery, GetListIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListIdQuery, GetListIdQueryVariables>(GetListIdDocument, options);
      }
export function useGetListIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListIdQuery, GetListIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListIdQuery, GetListIdQueryVariables>(GetListIdDocument, options);
        }
export function useGetListIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListIdQuery, GetListIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListIdQuery, GetListIdQueryVariables>(GetListIdDocument, options);
        }
export type GetListIdQueryHookResult = ReturnType<typeof useGetListIdQuery>;
export type GetListIdLazyQueryHookResult = ReturnType<typeof useGetListIdLazyQuery>;
export type GetListIdSuspenseQueryHookResult = ReturnType<typeof useGetListIdSuspenseQuery>;
export type GetListIdQueryResult = Apollo.QueryResult<GetListIdQuery, GetListIdQueryVariables>;