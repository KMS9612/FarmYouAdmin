import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TokenState } from "../../../commons/store";
import CreateUI from "./create.presenter";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export default function Create() {
  const [accessToken, setAccessToken] = useRecoilState(TokenState);
  const [refreshToken] = useMutation(RESTORE_ACCESS_TOKEN);
  useEffect(() => {
    const result = refreshToken();
    console.log(result);
  }, []);
  return <CreateUI accessToken={accessToken} />;
}
