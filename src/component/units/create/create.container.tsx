import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TokenState } from "../../../commons/store";
import CreateUI from "./create.presenter";

export default function Create() {
  return <CreateUI />;
}
