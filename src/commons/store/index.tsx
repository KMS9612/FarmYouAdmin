import { atom } from "recoil";

export const TokenState = atom({
  key: "accessToken",
  default: "",
});

export const IsEditState = atom({
  key: "isEdit",
  default: false,
});
