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
    <nav className="sticky top-0 flex h-16 w-full items-center border-b border-secondary bg-background">
      <div className="max-w-body mx-auto flex w-full justify-between">
        <Link href="/">
          <h1 className="flex items-center text-lg font-bold">VEO</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <ul className="flex items-center space-x-4 text-sm font-medium text-neutral-500">
            {NAV_LINKS.map(({ name, slug }) => (
              <li key={name} className="inline-block hover:text-neutral-200">
                <Link href={slug}>{name}</Link>
              </li>
            ))}
          </ul>
          <Button variant="default" size="xs" type="button">
            Dashboard
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
