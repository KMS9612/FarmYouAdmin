import { gql } from "@apollo/client";

export const FETCH_COMPLETE_PAYMENTS_FOR_ADMIN = gql`
  query fetchCompeletePaymentsForAdmin($adminId: String!) {
    fetchCompeletePaymentsForAdmin(adminId: $adminId) {
      id
    }
  }
`;
