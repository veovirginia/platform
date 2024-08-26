import {
  CalendarDots,
  Envelope,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { SiSubstack } from "react-icons/si";
import { Button } from "../ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Divider from "../ui/divider";

const Navbar = () => {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-2 border-b border-gray-300 px-6 py-4 md:flex-row md:items-center md:gap-0">
      <p className="font-sans text-base font-medium text-black">
        Virginia Entrepreneurship Organization
      </p>
      <div className="hidden items-center gap-2 md:flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a target="_blank" href="https://lu.ma/veo">
                <Button
                  variant="ghost"
                  className="flex h-10 w-10 items-center p-0"
                >
                  <CalendarDots size="20" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <div className="z-10 rounded border border-gray-200 bg-white px-4 py-2 text-sm shadow-lg">
                <p>View our events calendar</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Divider />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="mailto:v1atvirginia@gmail.com">
                <Button
                  variant="ghost"
                  className="flex h-10 w-10 items-center p-0"
                >
                  <Envelope size="20" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <div className="z-10 rounded border border-gray-200 bg-white px-4 py-2 text-sm shadow-lg">
                <p>Send us an email</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Divider />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a target="_blank" href="https://instagram.com/veoatuva">
                <Button
                  variant="ghost"
                  className="flex h-10 w-10 items-center p-0"
                >
                  <InstagramLogo size="20" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <div className="z-10 rounded border border-gray-200 bg-white px-4 py-2 text-sm shadow-lg">
                <p>Follow us on Instagram</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Divider />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a target="_blank" href="https://veovirginia.substack.com">
                <Button
                  variant="ghost"
                  className="flex h-10 w-10 items-center p-0"
                >
                  <SiSubstack size="16" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <div className="z-10 rounded border border-gray-200 bg-white px-4 py-2 text-sm shadow-lg">
                <p>Read our Substack</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Navbar;
