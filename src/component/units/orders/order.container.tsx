import { useQuery } from "@apollo/client";

import { FETCH_USER_LOGGED_IN } from "../create/Edit/Edit.queries";
import AdminOrderUI from "./order.presenter";
import { FETCH_COMPLETE_PAYMENTS_FOR_ADMIN } from "./order.queries";

export default function AdminOrder() {
  const { data: DataId } = useQuery(FETCH_USER_LOGGED_IN);
  const { data } = useQuery(FETCH_COMPLETE_PAYMENTS_FOR_ADMIN, {
    variables: {
      adminId: String(DataId?.fetchUserLoggedIn.id),
    },
  });
  return <AdminOrderUI data={data} />;
}
