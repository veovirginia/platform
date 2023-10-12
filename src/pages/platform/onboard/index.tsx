import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import HeadingTwo from "@/components/ui/headingTwo";
import Paragraph from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";
import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { stepAtom } from "@/components/atoms/onboardFormAtom";
import OnboardForm from "@/components/forms/OnboardForm";
import { useHydrateAtoms } from "jotai/utils";

const Onboard: NextPage = () => {
  useHydrateAtoms([[stepAtom, 1]]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 justify-center">
        {/* <div className="">
          <HeadingTwo className="text-center font-heading">
            Almost there!
          </HeadingTwo>
          <div className="pt-2">
            <Paragraph className="text-center leading-4 text-muted-foreground">
              Complete the form to finalize your membership.
            </Paragraph>
          </div>
        </div> */}
        <div className="mx-auto w-full max-w-xl pt-20">
          <OnboardForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Onboard;

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const session = await getSession(ctx);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: true,
//       },
//     };
//   }
//   if (session.user.onboarded) {
//     return {
//       redirect: {
//         destination: "/platform",
//         permanent: true,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
