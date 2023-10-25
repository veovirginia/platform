import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useEffect, type SetStateAction, type Dispatch } from "react";
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
import { cn } from "@/lib/clientUtils";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useUploadThing } from "@/hooks/useUploadThing";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const formSchema = z.object({
  avatar: z.string(),
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
  bio: z.string().min(0).max(128, "Can not exceed 128 characters."),
});

interface ProfileFormProps {
  imageFiles: File[];
  isImageDirty: boolean;
  currentImage: string | undefined;
  setImageDirty: Dispatch<SetStateAction<boolean>>;
}

const ProfileForm: FC<ProfileFormProps> = ({
  imageFiles,
  isImageDirty,
  currentImage,
  setImageDirty,
}: ProfileFormProps) => {
  const { mutateAsync: updateUser } = api.user.updateUser.useMutation();
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user ?? {
      avatar: "",
      name: "",
      phone: "",
      graduation: "",
      major: "",
      idea: "",
      bio: "",
    },
    mode: "onBlur",
  });

  const { control, formState, watch } = form;
  const { isValid, isDirty: isFormDirty } = formState;

  useEffect(() => {
    if (imageFiles.length > 0) {
      setImageDirty(true);
    }
  }, [imageFiles]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await updateUser(values);

      if (isImageDirty) {
        await startUpload(imageFiles);
      }

      router.reload();
      setImageDirty(false);
    } catch (error) {
      console.error(error);
    }
  };

  const { startUpload, isUploading } = useUploadThing("imageUpload", {
    onClientUploadComplete: (res) => {
      void (async () => {
        try {
          const url = res?.[0]?.url;
          await updateUser({
            avatar: url ?? "",
          });
        } catch (error) {
          console.error(error);
        }
      })();
    },
    onUploadError: (error) => {
      console.error(error);
    },
  });

  const resetField = () => {
    if (user && currentImage) user.avatar = currentImage;
    form.reset(
      user ?? {
        avatar: "",
        name: "",
        phone: "",
        graduation: "",
        major: "",
        idea: "",
        bio: "",
      },
    );
    setImageDirty(false);
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          className="grid grid-cols-4 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            void form.handleSubmit(onSubmit)(e);
          }}
        >
          <div className="col-span-4 md:col-span-2">
            <FormField
              control={control}
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
          <div className="col-span-4 md:col-span-2">
            <FormField
              control={control}
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
          <div className="col-span-4 md:col-span-1">
            <FormField
              control={control}
              name="graduation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Graduation</FormLabel>
                  <FormControl>
                    <PatternInput
                      format="##/##"
                      placeholder="MM/YY"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4 md:col-span-3">
            <FormField
              control={control}
              name="major"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Major</FormLabel>
                  <FormControl>
                    <Input placeholder="Primary major" {...field} />
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
                    <Input placeholder="The next big thing" {...field} />
                  </FormControl>
                  <FormDescription
                    className={cn({
                      "text-destructive": watch("idea").length > 128,
                    })}
                  >
                    {watch("idea").length}/128 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
            <FormField
              control={control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about yourself"
                      className="max-h-[10rem] md:h-32 md:resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription
                    className={cn({
                      "text-destructive": watch("bio").length > 128,
                    })}
                  >
                    {watch("bio").length}/128 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-4 flex justify-end gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={resetField}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size="sm"
              className=""
              disabled={
                !isValid || (!isFormDirty && !isImageDirty) || isUploading
              }
            >
              {isUploading ? "Updating profile" : "Update profile"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
