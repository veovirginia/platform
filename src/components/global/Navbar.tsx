import Link from "next/link";
import { type FC } from "react";
import { Button } from "../ui/button";

const NAV_LINKS = [
  {
    name: "Calendar",
    slug: "/calendar",
  },
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "Resources",
    slug: "/resources",
  },
];

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 flex h-16 w-full items-center">
      <div className="mx-auto flex w-full max-w-body justify-between p-4">
        <Link href="/">
          <h1 className="flex items-center font-heading text-lg font-bold tracking-wide">
            VEO
          </h1>
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-medium text-neutral-500">
            {NAV_LINKS.map(({ name, slug }) => (
              <li key={name} className="inline-block hover:text-neutral-200">
                <Link href={slug}>{name}</Link>
              </li>
            ))}
          </ul>
          <Button variant="default" size="xs" type="button">
            Platform
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
