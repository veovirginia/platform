import DefaultLayout from "@/components/layouts/DefaultLayout";
import HeadingTwo from "@/components/ui/headingTwo";
import Paragraph from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";
import { type NextPage, type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { stepAtom } from "@/components/atoms/onboardFormAtom";
import { useHydrateAtoms } from "jotai/utils";

const Onboard: NextPage = () => {
  useHydrateAtoms([[stepAtom, 1]]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-1 justify-center">
        <div className="mx-auto w-full max-w-xl pt-20">
          <div>
            <HeadingTwo className="mb-0 scroll-m-0 pb-0 font-heading font-bold">
              You&apos;re done!
            </HeadingTwo>
            <Paragraph className="py-1">
              Sit back and relax as you wait for your chat.
            </Paragraph>
            <Paragraph className="">
              In the meantime, check out our social media pages!
            </Paragraph>
          </div>
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
