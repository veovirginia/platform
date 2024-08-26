import { Envelope, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { SiSubstack } from "react-icons/si";

const ContactRow = () => {
  return (
    <div className="mx-auto flex w-full items-center gap-4 py-4">
      <div className="flex w-full flex-row flex-wrap justify-start gap-4 font-medium tracking-wide">
        <a href="emailto:v1atvirginia@gmail.com">
          <div className="flex h-10 items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/15 px-4 py-2 text-indigo-500">
            <Envelope size="24" /> v1atvirginia@gmail.com
          </div>
        </a>
        <a target="_blank" href="https://instagram.com/veoatuva">
          <div className="flex h-10 items-center gap-2 rounded-full border border-[#c13584]/25 bg-[#c13584]/15 px-4 text-[#c13584]">
            <InstagramLogo size="24" /> <span>@veoatuva</span>
          </div>
        </a>

        <a target="_blank" href="https://veovirginia.substack.com">
          <div className="flex h-10 items-center gap-2 rounded-full border border-[#ff5a00]/25 bg-[#ff5a00]/15 px-4 py-2 text-[#ff5a00]">
            <SiSubstack size="16" /> veovirginia.substack.com
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactRow;
