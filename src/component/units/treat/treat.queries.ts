import { gql } from "@apollo/client";

export const FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE_ID = gql`
  query fetchDirectProductsByDirectStoreId($directStoreId: String!) {
    fetchDirectProductsByDirectStoreId(directStoreId: $directStoreId) {
      id
      title
      content
      price
      categoryId {
        id
        name
      }
    }
  }
`;
