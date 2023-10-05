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
    <Form {...form}>
      <form
        onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
        className="grid grid-cols-4 gap-4 rounded border-muted"
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
      </form>
    </Form>
  );
};

export default OnboardStepOneForm;
