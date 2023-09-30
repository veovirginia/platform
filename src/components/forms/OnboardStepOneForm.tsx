import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
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
    <div className="w-full max-w-md">
      <Form {...form}>
        <HeadingThree className="pb-1">Sign in to VEO</HeadingThree>
        <div className="pb-4">
          <Paragraph className="text-muted-foreground">
            Join the community of builders at the University of Virginia.
          </Paragraph>
        </div>
        <form
          onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
          className="grid grid-cols-4 pt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  Your UVA student email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  Your UVA student email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-4">
            <Button variant="default" type="submit" className="w-full">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OnboardStepOneForm;
