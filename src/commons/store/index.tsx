import { atom } from "recoil";

export const TokenState = atom({
  key: "accessToken",
  default: "",
});
