import { type Session } from "next-auth";
import { type FC, type ReactNode } from "react";
import Paragraph from "./ui/paragraph";
import HeadingTwo from "./ui/headingTwo";
import { useRouter } from "next/router";
import { SLUG_PREFIX, UNVERIFIED_ALLOWED_LINKS } from "@/lib/clientUtils";

interface VerifiedWrapperProps {
  session: Session;
  children: ReactNode;
}

const VerifiedWrapper: FC<VerifiedWrapperProps> = ({
  session,
  children,
}: VerifiedWrapperProps) => {
  const router = useRouter();
  const pathname = router.pathname;

  if (
    !session.user.verified &&
    !UNVERIFIED_ALLOWED_LINKS.includes(pathname.substring(SLUG_PREFIX.length))
  )
    return (
      <div className="mx-auto flex w-full max-w-lg flex-1 items-center text-center">
        <div>
          <HeadingTwo>Sorry, you can&apos;t access this page.</HeadingTwo>
          <Paragraph>
            The Platform will be available after your coffee chat.
          </Paragraph>
        </div>
      </div>
    );
  return children;
};

export default VerifiedWrapper;
