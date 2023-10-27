import { type FC, type ReactNode } from "react";
import Paragraph from "./ui/paragraph";
import HeadingTwo from "./ui/headingTwo";
import { useRouter } from "next/router";
import { SLUG_PREFIX, UNVERIFIED_ALLOWED_LINKS } from "@/lib/clientUtils";
import { useSession } from "next-auth/react";

interface VerifiedWrapperProps {
  children: ReactNode;
}

const VerifiedWrapper: FC<VerifiedWrapperProps> = ({
  children,
}: VerifiedWrapperProps) => {
  const router = useRouter();
  const pathname = router.pathname;

  const { data: session } = useSession();

  if (!session) return null;

  if (
    !session.user.verified &&
    !UNVERIFIED_ALLOWED_LINKS.includes(pathname.substring(SLUG_PREFIX.length))
  )
    return (
      <div className="mx-auto -mt-14 flex h-full w-full max-w-lg flex-1 items-center text-center">
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
