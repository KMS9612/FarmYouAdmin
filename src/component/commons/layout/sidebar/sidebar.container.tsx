import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import SideBarUI from "./sidebar.presenter";
import { LOG_OUT } from "./sidebar.queries";

export default function SideBar() {
  const router = useRouter();
  const [logout] = useMutation(LOG_OUT);
  const onClickLogout = async () => {
    try {
      await logout;
      router.push(`/`);
    } catch (e) {
      alert(e);
    }
  };

  const onClickMove = (Path: string) => () => {
    router.push(Path);
  };

  return <SideBarUI onClickMove={onClickMove} onClickLogout={onClickLogout} />;
}
