import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../create/create.queries";
import AdminTreatUI from "./treat.presenter";
import { FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE_ID } from "./treat.queries";

export default function AdminTreat() {
  const { data: DataId } = useQuery(FETCH_USER_LOGGED_IN);
  const { data } = useQuery(FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE_ID, {
    variables: {
      directStoreId: String(DataId?.fetchUserLoggedIn.directStore.id),
    },
  });
  console.log(data);

  return <AdminTreatUI data={data} />;
}
