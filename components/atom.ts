import { atom } from "recoil";


export const loggedInAtom = atom<boolean>({
  key: "logged_in",
  default: false,
});

export const showModalAtom = atom<boolean>({
  key: "show_modal_atom",
  default: false,
});

export const dropLangAtom = atom<boolean>({
  key: "dropLangAtom",
  default: false,
});

export const mobileMenuAtom = atom<boolean>({
  key: "mobileMenuAtom",
  default: false,
});

