import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, PatternInput, PhoneInput } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  stepOneValuesAtom,
  updateOnboardAtom,
  validStepOneAtom,
} from "../atoms/onboardFormAtom";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { type OnboardStepOneValues } from "@/lib/types";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Must be at least 2 characters.")
    .max(128, "Can not exceed 128 characters."),
  phone: z
    .string({
      required_error: "Can not be empty.",
      invalid_type_error: "Can not be empty.",
    })
    .refine(
      (phone) => isValidPhoneNumber(phone),
      "Must be a valid phone number.",
    ),
  graduation: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/g, "Must be a valid date."),
  major: z
    .string()
    .min(4, "Must be at least 4 characters.")
    .max(128, "Can not exceed 32 characters.")
    .regex(/^[a-zA-Z- ]+$/, "Must be a valid major"),
  idea: z.string().min(0).max(128, "Can not exceed 128 characters."),
});

const OnboardStepOneForm: FC = () => {
  useHydrateAtoms([
    [validStepOneAtom, false],
    [updateOnboardAtom, false],
  ]);

  const [_isFormValid, setFormValid] = useAtom(validStepOneAtom);
  const [_updateOnboard, setUpdateOnboard] = useAtom(updateOnboardAtom);
  const [formValues, setFormValues] = useAtom(stepOneValuesAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formValues ?? {
      name: "",
      phone: "",
      graduation: "",
      major: "",
      idea: "",
    },
    mode: "onBlur",
  });

  const { control, formState, watch, setValue, trigger } = form;
  const { isValid, isDirty } = formState;

  useEffect(() => {
    isValid ? setFormValid(true) : setFormValid(false);
  }, [isValid, setFormValid]);

  const updateFormValue = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const loadValues = async () => {
      if (formValues) {
        Object.entries(formValues).forEach(([key, value]) => {
          setValue(key as keyof OnboardStepOneValues, value as string);
        });

        await trigger();
      }
    };
    loadValues().catch((e) => console.error(e));
  }, [formValues, setValue, trigger]);

  useEffect(() => {
    if (isDirty) setUpdateOnboard(true);
    else setUpdateOnboard(false);
  }, [isDirty, setUpdateOnboard]);

  const container = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.23, delay: 0.65 }}
      className="p-2"
    >
      <Form {...form}>
        <form className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      onBlur={() => updateFormValue(field.name, field.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      onBlur={() => {
                        updateFormValue(field.name, field.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={control}
              name="graduation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Graduation</FormLabel>
                  <FormControl>
                    <PatternInput
                      format="##/##"
                      placeholder="MM/YY"
                      {...field}
                      onBlur={() => updateFormValue(field.name, field.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={control}
              name="major"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Major</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Primary major"
                      {...field}
                      onBlur={() => updateFormValue(field.name, field.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4">
            <FormField
              control={control}
              name="idea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idea</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Optional"
                      {...field}
                      onBlur={() => updateFormValue(field.name, field.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    {watch("idea").length}/128 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default OnboardStepOneForm;
