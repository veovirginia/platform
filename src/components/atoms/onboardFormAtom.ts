import { type OnboardStepOneValues } from "@/lib/types";
import { atom } from "jotai";

export const stepAtom = atom<number>(1);

export const validStepOneAtom = atom<boolean>(false);

export const stepOneValuesAtom = atom<OnboardStepOneValues | null>(null);
