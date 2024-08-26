import {
  Envelope,
  Handshake,
  InstagramLogo,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { SiSubstack } from "react-icons/si";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header className="mx-auto flex w-full max-w-6xl border-b border-gray-300 p-4 py-6">
        <p className="font-sans text-base font-medium text-black">
          Virginia Entrepreneurship Organization
        </p>
      </header>
      <section className="mx-auto flex w-full max-w-6xl justify-center p-4 py-16">
        <h1 className="font-serif text-8xl leading-tight text-black antialiased">
          Empowering <span className="italic">Student</span> Founders
        </h1>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 py-8">
        <section className="mx-auto flex w-full p-4">
          <div className="grid w-full grid-cols-3">
            <div className="col-span-1">
              <h2 className="font-sans text-2xl font-bold text-slate-800">
                About Us
              </h2>
            </div>
            <div className="col-span-2 flex flex-col gap-4 text-balance text-lg leading-relaxed text-slate-600">
              <p className="">
                Founded in 2022, the Virginia Entrepreneurship Organization is a
                student-run community of builders at the University of Virginia.
              </p>
              <p className="">
                We partner with the University of Virginia, local venture
                capital firms, founders, and startups to host events and create
                opportunities for students to explore entrepreneurship.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full p-4">
          <div className="grid w-full grid-cols-3">
            <div className="col-span-1">
              <h2 className="font-sans text-2xl font-bold text-slate-800">
                Mission
              </h2>
            </div>
            <div className="col-span-2 flex flex-col gap-4 text-balance text-lg leading-relaxed text-slate-600">
              <p className="">
                The guiding principle of the Virginia Entrepreneurship Community
                is to foster a culture of{" "}
                <span className="font-bold">
                  innovation and entrepreneurship
                </span>{" "}
                at the University of Virginia.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full p-4">
          <div className="grid w-full grid-cols-3">
            <div className="col-span-1">
              <h2 className="font-sans text-2xl font-bold text-slate-800">
                Community
              </h2>
            </div>
            <div className="col-span-2 flex flex-col gap-4 text-balance text-lg leading-relaxed text-slate-600">
              <p className="">
                We welcome any student interested in entrepreneurship to join.
                We host speaker events, workshops, and build sessions hosted by
                students to encourage everyone to create.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full p-4">
          <div className="grid w-full grid-cols-3 gap-8">
            <div className="col-span-1">
              <h2 className="font-sans text-2xl font-bold text-slate-800">
                Connect
              </h2>
            </div>
            <div className="col-span-2 flex w-full flex-row gap-4">
              <div className="flex h-72 w-1/2 flex-col justify-between rounded-xl bg-[#acf4f8] p-8">
                <Users size="32" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium">For Students</h2>
                  <p className="text-base text-neutral-600">
                    Join us to connect with other student founders, learn from
                    experienced entrepreneurs, and build your startup.
                  </p>
                </div>
              </div>
              <div className="flex h-72 w-1/2 flex-col justify-between rounded-xl bg-[#121316] p-8 text-white">
                <Handshake size="32" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium">For Partners</h2>
                  <p className="text-base text-neutral-400">
                    Partner with us to engage with the next generation of
                    founders, share your expertise, and support the UVA
                    entrepreneurship community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full p-4">
          <div className="grid w-full grid-cols-3 gap-8">
            <div className="col-span-1">
              <h2 className="font-sans text-2xl font-bold text-slate-800">
                Contact
              </h2>
            </div>
            <div className="col-span-2 flex w-full flex-row flex-wrap gap-4 font-medium tracking-wide">
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
        </section>
      </div>
    </main>
  );
}
