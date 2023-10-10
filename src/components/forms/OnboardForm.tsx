import OnboardStepOne from "./OnboardStepOne";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import {
  stepAtom,
  stepOneValuesAtom,
  validStepOneAtom,
} from "../atoms/onboardFormAtom";
import OnboardStepTwo from "./OnboardStepTwo";
import OnboardHeader from "./OnboardHeader";

const OnboardForm = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [isFormValid] = useAtom(validStepOneAtom);
  // const [formValues] = useAtom(stepOneValuesAtom);

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (step === 1) {
      // save form values to db
      // console.log(formValues);
    }

    setStep((prev) => prev + 1);
  };

  const disablePrevious = () => {
    if (step === 1) return true;
    return false;
  };

  const disableNext = () => {
    if (!isFormValid) return true;
    return false;
  };

  return (
    <div>
      <OnboardHeader />
      <div className="rounded border border-muted p-6">
        {step === 1 && <OnboardStepOne />}
        {step === 2 && <OnboardStepTwo />}
        <div className="col-span-4 flex w-full items-center justify-end gap-4 pt-4">
          <div className="">
            <Button
              variant="ghost"
              type="submit"
              disabled={disablePrevious()}
              onClick={handlePrevious}
            >
              Previous
            </Button>
          </div>
          <div className="">
            <Button
              variant="default"
              disabled={disableNext()}
              onClick={handleNext}
            >
              {step < 2 ? "Continue" : "Schedule meeting"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardForm;
