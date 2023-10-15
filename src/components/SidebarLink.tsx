import {
  UNVERIFIED_ALLOWED_LINKS,
  SLUG_PREFIX,
  cn,
  isCurrentPage,
} from "@/lib/clientUtils";
import { type LucideIcon } from "lucide-react";
import { useRouter } from "next/router";
import { type FC } from "react";
import Link from "next/link";

interface SidebarLink {
  title: string;
  icon: LucideIcon;
  slug: string;
  verified: boolean;
}

const SidebarLink: FC<SidebarLink> = ({
  title,
  icon: Icon,
  slug,
  verified,
}: SidebarLink) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <li className="w-full">
      {!verified && UNVERIFIED_ALLOWED_LINKS.includes(slug) ? (
        <Link
          href={SLUG_PREFIX + slug}
          className={cn(
            `flex w-full items-center space-x-3 rounded-lg px-3 py-3 transition-colors hover:bg-secondary`,
            {
              "bg-secondary shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)] shadow-sm":
                isCurrentPage(pathname, slug),
            },
          )}
        >
          <Icon className="h-5 w-5 text-gray-4" />
          <p
            className={cn({
              "text-gray-2/90": !isCurrentPage(pathname, slug),
            })}
          >
            {title}
          </p>
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className={cn(
            `flex w-full cursor-not-allowed items-center space-x-3 rounded-lg px-3 py-3 opacity-50`,
            {
              "bg-secondary shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05)] shadow-sm":
                isCurrentPage(pathname, slug),
            },
          )}
        >
          <Icon className="h-5 w-5 text-gray-4" />
          <p
            className={cn({
              "text-gray-2/90": !isCurrentPage(pathname, slug),
            })}
          >
            {title}
          </p>
        </button>
      )}
    </li>
  );
};

export default SidebarLink;
