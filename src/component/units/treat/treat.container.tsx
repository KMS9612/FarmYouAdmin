import { useMutation, useQuery } from "@apollo/client";
import AdminTreatUI from "./treat.presenter";
import { FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE_ID } from "./treat.queries";

export default function AdminTreat() {
  const { data } = useQuery(FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE_ID, {
    variables: {
      directStoreId: "4dad258d-3530-4b2a-9b89-a4daae0163c8",
    },
  });
  console.log(data);
  return <AdminTreatUI data={data} />;
}
