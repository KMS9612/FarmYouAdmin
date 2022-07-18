import { useMutation } from "@apollo/client";
import AdminTreatUI from "./treat.presenter";
import { FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE } from "./treat.queries";

export default function AdminTreat() {
  const [fetchDirectProductsByDirectStore] = useMutation(
    FETCH_DIRECT_PRODUCT_BY_DIRECT_STORE
  );
  return <AdminTreatUI />;
}
