"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email is too short",
  }),
});

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="flex w-full max-w-[24rem] flex-col items-center justify-center gap-12 overflow-hidden rounded-lg border border-light-background-border bg-light-background shadow">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="p-6">
            <div className="space-y-1 pb-6 text-center">
              <div className="mx-auto my-6 flex h-16 w-16 items-center justify-center rounded-[1.1rem] border-2 border-neutral-800 bg-gradient-to-tr from-indigo-500 to-cyan-500">
                VEO
              </div>
              <h1 className="font-heading text-2xl font-semibold tracking-tight text-neutral-200">
                Welcome back
              </h1>
              <p className="text-sm text-neutral-500">
                Please enter your email to sign in
              </p>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="computingId@virginia.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full bg-dark-background/50 p-6">
            <Button className="w-full">Sign in</Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
