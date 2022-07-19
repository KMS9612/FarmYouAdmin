import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../units/create/create.queries";
import SideBarUI from "./sidebar.presenter";
import { LOG_OUT } from "./sidebar.queries";

export default function SideBar() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logout] = useMutation(LOG_OUT);
  const onClickLogout = async () => {
    try {
      logout;
      router.push(`/`);
    } catch (e) {
      alert(e);
    }
  };

  const onClickMove = (Path: string) => () => {
    router.push(Path);
  };

  return (
    <SideBarUI
      onClickMove={onClickMove}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
