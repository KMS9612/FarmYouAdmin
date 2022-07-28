import { gql } from "@apollo/client";

export const FETCH_COMPLETE_PAYMENTS_FOR_ADMIN = gql`
  query fetchCompletedPaymentsForAdmin($adminId: String!) {
    fetchCompletedPaymentsForAdmin(adminId: $adminId) {
      id
      amount
      productDirect {
        id
        title
        quantity
      }
      user {
        id
        name
        address {
          id
          address
          detailedAddress
          postalCode
        }
      }
    }
  }
`;
