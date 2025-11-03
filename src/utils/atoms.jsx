import { atom } from "jotai";

export const selectedDateAtom = atom(null);
export const selectedTimeAtom = atom(null);
export const selectedServiceAtom = atom(null);
export const userInfoAtom = atom({
  Name: "",
  Email: "",
  PhoneNumber: "",
});
