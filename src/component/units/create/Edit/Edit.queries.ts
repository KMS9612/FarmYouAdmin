import { gql } from "@apollo/client";

export const UPDATE_PRODUCT_DIRECT = gql`
  mutation updateProductDirect(
    $productId: String!
    $title: String!
    $content: String!
    $price: Float!
    $quantity: Float!
    $category: String!
    $createFileInput: CreateProductDirectInput
  ) {
    updateProductDirect(
      title: $title
      content: $content
      price: $price
      quantity: $quantity
      category: $category
      productId: $productId
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

export const FETCH_PRODUCT_DIRECT = gql`
  query fetchProductDirect($productId: String!) {
    fetchProductDirect(productId: $productId) {
      id
      title
      content
      price
      quantity
      category {
        id
        name
      }
      files {
        url
      }
    }
  }
`;
