import { gql } from "@apollo/client";

export const CREATE_PRODUCT_DIRECT = gql`
  mutation createProductDirect(
    $title: String!
    $content: String!
    $price: Float!
    $quantity: Float!
    $category: String!
    $directStoreId: String!
    $adminId: String!
  ) {
    createProductDirect(
      title: $title
      content: $contents
      price: $price
      quantity: $quantity
      category: $category
      directStoreId: $directStoreId
      adminId: $adminId
    ) {
      id
      name
      email
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      type
      email
    }
  }
`;
