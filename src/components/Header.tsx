import { type FC } from "react";
import { SiSubstack, SiGithub } from "react-icons/si";
import { Button } from "./ui/button";

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-30 h-14 w-full items-center justify-between gap-6 border-b border-border bg-background px-6 py-2 md:sticky md:flex">
      <div className="">
        {/* <h2 className="font-heading text-lg font-semibold">Profile</h2> */}
      </div>
      <div className="flex items-center ">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => console.log("das")}
        >
          <SiSubstack className="" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => console.log("das")}
        >
          <SiGithub className="" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
