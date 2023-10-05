import OnboardStepOneForm from "@/components/forms/OnboardStepOneForm";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import HeadingTwo from "@/components/ui/headingTwo";
import Paragraph from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";
import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";

const Onboard: NextPage = () => {
  const [step, setStep] = useState<number>(0);

  const nextPage = () => {
    setStep((prev) => (prev += 1));
  };

  const prevPage = () => {
    setStep((prev) => (prev -= 1));
  };
  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 justify-center pt-16">
        <div className="w-full max-w-2xl">
          <div className="pb-12">
            <HeadingTwo className="text-center">Almost there!</HeadingTwo>
            <div className="pt-2">
              <Paragraph className="text-center leading-4 text-muted-foreground">
                Complete the form to finalize your membership.
              </Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pb-2 text-sm text-muted-foreground">
            <div>
              <p className="">
                1.{" "}
                <span
                  className={cn({ "font-medium text-[#08D9D6]": step === 0 })}
                >
                  Tell us about yourself
                </span>
              </p>
            </div>
            <div>
              <p className="">
                2.{" "}
                <span
                  className={cn({ "font-medium text-[#30E3CA]": step === 1 })}
                >
                  Schedule a coffee chat
                </span>
              </p>
            </div>
            <div>
              <p className="">
                3.{" "}
                <span
                  className={cn({ "font-medium text-[#30E3CA]": step === 1 })}
                >
                  Await verification
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pb-8">
            <div
              className={cn("h-1 w-full rounded-full", {
                "bg-[#30E3CA]": step > 0,
                "bg-muted": step <= 0,
              })}
            />
            <div
              className={cn("h-1 w-full rounded-full", {
                "bg-[#30E3CA]": step > 1,
                "bg-muted": step <= 1,
              })}
            />
            <div
              className={cn("h-1 w-full rounded-full", {
                "bg-[#30E3CA]": step > 2,
                "bg-muted": step <= 2,
              })}
            />
          </div>
          <div className="rounded border border-muted p-6">
            <OnboardStepOneForm />
            <div className="flex w-full items-center justify-end gap-4 pt-8">
              <div className="">
                <Button variant="ghost" type="submit">
                  Previous
                </Button>
              </div>
              <div className="">
                <Button variant="default" onClick={() => nextPage()}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Onboard;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // const session = await getSession(ctx);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //       permanent: true,
  //     },
  //   };
  // }
  // if (session.user.onboarded) {
  //   return {
  //     redirect: {
  //       destination: "/platform",
  //       permanent: true,
  //     },
  //   };
  // }
  return {
    props: {},
  };
}
