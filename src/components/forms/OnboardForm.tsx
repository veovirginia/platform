import OnboardStepOne from "./OnboardStepOne";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { stepAtom, validStepOneAtom } from "../atoms/onboardForm";
import { useEffect, useState } from "react";
import { useHydrateAtoms } from "jotai/utils";
import OnboardStepTwo from "./OnboardStepTwo";

const OnboardForm = () => {
  useHydrateAtoms([[stepAtom, 0]]);
  const [step, setStep] = useAtom(stepAtom);
  const [isFormValid] = useAtom(validStepOneAtom);
  const [isDisabled, setDisabled] = useState(false);

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (step === 1) {
      // save form values to db
    }

    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (step === 0) setDisabled(true);
  }, [step]);

  const disableButton = () => {
    if (step === 0) return true;
    return false;
  };

  return (
    <div className="rounded border border-muted p-6">
      {step === 0 && <OnboardStepOne />}
      {step === 1 && <OnboardStepTwo />}

      <div className="col-span-4 flex w-full items-center justify-end gap-4 pt-4">
        <div className="">
          <Button
            variant="ghost"
            type="submit"
            disabled={disableButton()}
            onClick={handlePrevious}
          >
            Previous
          </Button>
        </div>
        <div className="">
          <Button
            variant="default"
            disabled={!isFormValid}
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardForm;
