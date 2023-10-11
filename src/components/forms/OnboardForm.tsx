import OnboardStepOne from "./OnboardStepOne";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import {
  stepAtom,
  stepOneValuesAtom,
  updateOnboardAtom,
  validStepOneAtom,
} from "../atoms/onboardFormAtom";
import OnboardStepTwo from "./OnboardStepTwo";
import OnboardHeader from "./OnboardHeader";
import { api } from "@/utils/api";
import { useEffect } from "react";

const OnboardForm = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [isFormValid] = useAtom(validStepOneAtom);
  const [updateOnboard] = useAtom(updateOnboardAtom);
  const [formValues, setFormValues] = useAtom(stepOneValuesAtom);

  const { mutateAsync: updateUser } = api.user.updateUser.useMutation();
  const { data: user } = api.user.getOnboardUser.useQuery();

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleNext = async () => {
    if (step === 1) {
      // save form values to db
      try {
        // Add check if dirty
        updateOnboard && (await updateUser(formValues));
      } catch (e) {
        console.error(e);
      }
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

  useEffect(() => {
    user !== null && user !== undefined && setFormValues(user);
  }, [setFormValues, user]);

  return (
    <div>
      <OnboardHeader />
      <div className="rounded">
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
              type="button"
              onClick={() => void handleNext()}
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
