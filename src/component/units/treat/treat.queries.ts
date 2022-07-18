import { gql } from "@apollo/client";

export const FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE = gql`
  query fetchDirectProductsByDirectStore($directStoreID: String!) {
    fetchDirectProductsByDirectStore(directStoreID: $directStoreID) {
      id
      title
      content
      price
    }
  }
`;
