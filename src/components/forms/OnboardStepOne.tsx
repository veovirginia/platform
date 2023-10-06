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
import { validStepOneAtom } from "../atoms/onboardForm";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(128, "Name can not exceed 128 characters."),
  phone: z
    .string({
      required_error: "Phone number can not be empty.",
      invalid_type_error: "Phone number can not be empty.",
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
    .min(4, "Major must be at least 4 characters.")
    .max(128, "Must not exceed 32 characters.")
    .regex(/^[a-zA-Z- ]+$/, "Must be a valid major"),
  idea: z.string().max(128, "Must not exceed 128 characters."),
});

const OnboardStepOneForm: FC = () => {
  useHydrateAtoms([[validStepOneAtom, false]]);
  const [_, setFormValid] = useAtom(validStepOneAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      graduation: "",
      major: "",
      idea: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); // Handle your form submission logic
  };

  useEffect(() => {
    if (form.formState.isValid) setFormValid(true);
    else setFormValid(false);
  }, [form.formState.isValid, setFormValid]);

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-4 gap-4 rounded border-muted"
        onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
      >
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="graduation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Graduation</FormLabel>
                <FormControl>
                  <PatternInput format="##/##" placeholder="MM/YY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Major</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-4">
          <FormField
            control={form.control}
            name="idea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idea</FormLabel>
                <FormControl>
                  <Input placeholder="The next big thing..." {...field} />
                </FormControl>
                <FormDescription>
                  (128 char) Feel free to provide details if you have a specific
                  vision or concept in mind.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default OnboardStepOneForm;
