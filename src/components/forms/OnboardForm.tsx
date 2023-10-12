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

  useEffect(() => {
    user !== null && user !== undefined && setFormValues(user);
  }, [setFormValues, user]);

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

  return (
    <div className="rounded-lg bg-card p-6">
      <OnboardHeader />
      <div className="">
        {step === 1 && <OnboardStepOne />}
        {step === 2 && <OnboardStepTwo />}
        <div className="col-span-4 flex w-full items-center justify-between pt-4">
          <div className="">
            <Button
              variant="secondary"
              type="submit"
              size="sm"
              disabled={disablePrevious()}
              onClick={handlePrevious}
            >
              Previous
            </Button>
          </div>
          <div className="">
            <Button
              variant="default"
              size="sm"
              type="button"
              disabled={disableNext()}
              onClick={() => void handleNext()}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardForm;
