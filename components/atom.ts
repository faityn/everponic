import { atom } from "recoil";
import { CareersType, FaqType, GalleryType, NewsType } from "./types";

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

export const totalPageAtom = atom<number>({
  key: "total_page_atom",
  default: 1,
});

export const newsListAtom = atom<NewsType[]>({
  key: "newsListAtom",
  default: [],
});

export const newsDetailAtom = atom<NewsType[]>({
  key: "newsDetailAtom",
  default: [],
});

export const galleryListAtom = atom<GalleryType[]>({
  key: "galleryListAtom",
  default: [],
});

export const galleryDetailAtom = atom<GalleryType[]>({
  key: "galleryDetailAtom",
  default: [],
});

export const faqListAtom = atom<FaqType[]>({
  key: "faqListAtom",
  default: [],
});

export const savedItemAtom = atom({
  key: "savedItemAtom",
  default: false,
});

export const careersListAtom = atom<CareersType[]>({
  key: "careersListAtom",
  default: [],
});
