import { atom } from "recoil";
export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
export const isMainAtom = atom({
  key: "isMain",
  default: true,
});
