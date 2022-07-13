import { useRouter } from "next/router";
import SideBarUI from "./sidebar.presenter";

export default function SideBar() {
  const router = useRouter();
  const onClickMove = (Path: string) => () => {
    router.push(Path);
  };

  return <SideBarUI onClickMove={onClickMove} />;
}
