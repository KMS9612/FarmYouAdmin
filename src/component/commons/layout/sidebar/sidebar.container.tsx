import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { IsEditState } from "../../../../commons/store";
import { FETCH_USER_LOGGED_IN } from "../../../units/create/create.queries";
import SideBarUI from "./sidebar.presenter";
import { LOG_OUT } from "./sidebar.queries";

export default function SideBar() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(IsEditState);
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
    if (Path === "/admin_create") setIsEdit(false);
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
