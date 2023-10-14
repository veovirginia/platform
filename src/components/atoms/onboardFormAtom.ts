import { type OnboardStepOneValues } from "@/lib/types";
import { atom } from "jotai";

export const stepAtom = atom<[number, number]>([1, 0]);

export const validStepOneAtom = atom<boolean>(false);

export const updateOnboardAtom = atom<boolean>(false);

export const stepOneValuesAtom = atom<OnboardStepOneValues>({
  name: "",
  phone: "",
  graduation: "",
  major: "",
  idea: "",
});

export const calMeetingAtom = atom<string>("");
