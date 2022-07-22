import { gql } from "@apollo/client";

export const CREATE_PRODUCT_DIRECT = gql`
  mutation createProductDirect(
    $title: String!
    $content: String!
    $price: Float!
    $quantity: Float!
    $categoryId: String!
    $directStoreId: String!
    $createFileInput: CreateProductDirectInput
  ) {
    createProductDirect(
      title: $title
      content: $content
      price: $price
      quantity: $quantity
      categoryId: $categoryId
      directStoreId: $directStoreId
      createFileInput: $createFileInput
    ) {
      id
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      type
      email
      directStore {
        id
        name
      }
    }
  }
`;

// export const FETCH_;
