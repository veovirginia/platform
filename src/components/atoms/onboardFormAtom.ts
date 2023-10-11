import { type OnboardStepOneValues } from "@/lib/types";
import { atom } from "jotai";
import { type EmptyObject } from "type-fest";

export const stepAtom = atom<number>(1);

export const validStepOneAtom = atom<boolean>(false);

export const stepOneValuesAtom = atom<OnboardStepOneValues>({
  name: "",
  phone: "",
  graduation: "",
  major: "",
  idea: "",
});
