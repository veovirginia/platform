import { Users, Handshake } from "@phosphor-icons/react/dist/ssr";
import Section from "../ui/section";

const Connect = () => {
  return (
    <Section>
      <div className="grid w-full grid-cols-3 gap-8">
        <div className="col-span-3 md:col-span-1">
          <h2 className="font-sans text-xl font-bold text-slate-800 md:text-2xl">
            Connect
          </h2>
        </div>
        <div className="col-span-3 flex w-full flex-col gap-4 md:col-span-2 md:flex-row">
          <div className="flex h-fit w-full flex-col justify-between rounded-xl bg-[#acf4f8] p-8 md:h-80 md:w-1/2 lg:h-72">
            <Users size="32" />
            <div className="space-y-2">
              <h2 className="text-2xl font-medium">For Students</h2>
              <p className="text-base text-neutral-600">
                Join us to connect with other student founders, learn from
                experienced entrepreneurs, and build your startup.
              </p>
            </div>
          </div>
          <div className="flex h-fit w-full flex-col justify-between rounded-xl bg-[#121316] p-8 text-white md:h-80 md:w-1/2 lg:h-72">
            <Handshake size="32" />
            <div className="space-y-2">
              <h2 className="text-2xl font-medium">For Partners</h2>
              <p className="text-base text-neutral-400">
                Partner with us to engage with the next generation of founders,
                share your expertise, and support the UVA entrepreneurship
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Connect;
