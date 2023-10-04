import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import HeadingThree from "../ui/headingThree";
import Paragraph from "../ui/paragraph";
import { env } from "@/env.mjs";
import validator from "validator";
import HeadingOne from "../ui/headingOne";
import HeadingTwo from "../ui/headingTwo";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2).max(128, "Must not exceed 128 characters."),
  phone: z
    .string()
    .refine(
      (phone) => validator.isMobilePhone(phone),
      "Must be a valid phone number.",
    ),
  graduation: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/g, "Must be a valid date."),
  major: z
    .string()
    .min(2)
    .max(128, "Must not exceed 32 characters.")
    .regex(/^[a-zA-Z- ]+$/, "Must be a valid major"),
  idea: z.string().max(128, "Must not exceed 128 characters."),
});

const OnboardStepOneForm: FC = () => {
  const [step, setStep] = useState<number>(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      graduation: "",
      major: "",
      idea: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="pb-12">
        <HeadingTwo className="text-center">Almost there!</HeadingTwo>
        <div className="pt-2">
          <Paragraph className="text-center leading-4 text-muted-foreground">
            Complete the form to finalize your membership.
          </Paragraph>
        </div>
      </div>
      <Form {...form}>
        <div className="grid grid-cols-3 gap-2 pb-2 text-sm text-muted-foreground">
          <div>
            <p className="">
              1.{" "}
              <span className={cn("text-neutral-200")}>
                Tell us about yourself
              </span>
            </p>
          </div>
          <div>
            <p className="">2. Schedule a coffee chat</p>
          </div>
          <div>
            <p className="">3. Await verification</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-4">
          <div className="h-1 w-full rounded-full bg-red-500" />
          <div className="h-1 w-full rounded-full bg-red-500" />
          <div className="h-1 w-full rounded-full  bg-red-500" />
        </div>
        <form
          onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
          className="grid grid-cols-4 gap-4 rounded border border-muted p-4"
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
                  <FormLabel>Phone number</FormLabel>
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
              name="graduation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected graduation</FormLabel>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4 flex items-center justify-end gap-4 pt-4">
            <div className="">
              <Button variant="ghost" type="submit">
                Previous
              </Button>
            </div>
            <div className="">
              <Button variant="default" type="submit">
                Continue
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OnboardStepOneForm;
