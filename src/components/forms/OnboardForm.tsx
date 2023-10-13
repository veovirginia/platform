import React, { useEffect } from "react";
import { useAtom } from "jotai";
import {
  calMeetingAtom,
  stepAtom,
  stepOneValuesAtom,
  updateOnboardAtom,
  validStepOneAtom,
} from "../atoms/onboardFormAtom";
import OnboardStepOne from "./OnboardStepOne";
import OnboardStepTwo from "./OnboardStepTwo";
import OnboardHeader from "./OnboardHeader";
import { api } from "@/utils/api";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";

const ONBOARD_STEPS = [
  { id: 1, component: OnboardStepOne },
  { id: 2, component: OnboardStepTwo },
];

const OnboardForm = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [isFormValid] = useAtom(validStepOneAtom);
  const [updateOnboard] = useAtom(updateOnboardAtom);
  const [formValues, setFormValues] = useAtom(stepOneValuesAtom);
  const [calMeetingId] = useAtom(calMeetingAtom);

  const { mutateAsync: updateUser } = api.user.updateUser.useMutation();
  const { data: user } = api.user.getOnboardUser.useQuery();

  useEffect(() => {
    user && setFormValues(user);
  }, [setFormValues, user]);

  const CurrentStep = ONBOARD_STEPS[step - 1]?.component ?? null;

  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleNext = async () => {
    if (step === 1) {
      try {
        updateOnboard && (await updateUser(formValues));
      } catch (e) {
        console.error(e);
      }
    }
    if (step !== ONBOARD_STEPS.length) setStep((prev) => prev + 1);
  };

  const CalButton = () => (
    <button
      type="button"
      disabled={!calMeetingId}
      data-cal-link={calMeetingId}
      daa-cal-config='{"layout":"month_view"}'
      className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3 font-sans text-sm font-medium text-primary-foreground shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] shadow-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      Finish
    </button>
  );

  return (
    <div className="">
      <OnboardHeader />
      <motion.div
        layout
        className="mt-4 rounded-lg bg-card p-4 shadow shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)]"
      >
        <AnimatePresence mode="wait">
          {CurrentStep && <CurrentStep key={step} />}
        </AnimatePresence>
        <div className="col-span-4 flex w-full items-center justify-between px-2 pb-2 pt-4">
          <div className="">
            {step > 1 && (
              <Button
                variant="secondary"
                type="submit"
                size="sm"
                onClick={handlePrevious}
              >
                Previous
              </Button>
            )}
          </div>
          <div className="">
            {step < ONBOARD_STEPS.length ? (
              <Button
                variant="default"
                size="sm"
                type="button"
                disabled={!isFormValid}
                onClick={() => void handleNext()}
              >
                {step < ONBOARD_STEPS.length ? "Continue" : "Finish"}
              </Button>
            ) : (
              <CalButton />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardForm;
