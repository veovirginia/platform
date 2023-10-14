import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState, type FC, useEffect } from "react";
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
import { XCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@virginia\.edu$/i;

interface SigninAlertProps {
  success: boolean;
  isClosed: boolean;
  setClosed: () => void;
}

const SigninAlert: FC<SigninAlertProps> = ({
  success,
  isClosed,
  setClosed,
}: SigninAlertProps) => {
  if (!isClosed) {
    if (success) {
      return (
        <Alert variant="successful" minimize setClosed={() => setClosed()}>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Check your inbox for an email containing a link to sign in.
          </AlertDescription>
        </Alert>
      );
    } else {
      return (
        <Alert variant="destructive" minimize setClosed={() => setClosed()}>
          <XCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Unable to sign in. Please try again.
          </AlertDescription>
        </Alert>
      );
    }
  }
};

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Must be a valid email address." })
    .refine(
      (email) => EMAIL_REGEX.test(email),
      "Must be a University of Virginia email address.",
    ),
});

const SigninForm: FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { formState, control, handleSubmit, getValues, reset } = form;
  const { isSubmitted, isSubmitting, isValid, isDirty } = formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setSuccess(true);
    setOpen(true);
    const response = await signIn("email", {
      email: values.email,
      redirect: false,
      callbackUrl: `${env.NEXT_PUBLIC_DOMAIN_URL}/dashboard`,
    });
    if (response?.ok) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setOpen(true);
  };

  useEffect(() => {
    if (isSubmitted) reset(getValues(), { keepDirtyValues: true });
  }, [isSubmitted]);

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <HeadingThree className="pb-1">Sign in to VEO</HeadingThree>
        <div className="pb-2">
          <Paragraph className="text-muted-foreground">
            Join the community of builders at the University of Virginia.
          </Paragraph>
        </div>
        <SigninAlert
          success={success}
          isClosed={!isOpen}
          setClosed={() => {
            setOpen(false);
            console.log(isOpen);
          }}
        />
        <form
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className="pt-2"
        >
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="computingId@virginia.edu" {...field} />
                </FormControl>
                <FormDescription>
                  Your UVA student email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-4">
            <Button
              variant="default"
              type="submit"
              disabled={isSubmitting || !isValid || !isDirty}
              className="w-full"
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
