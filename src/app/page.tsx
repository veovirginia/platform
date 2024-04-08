import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SupportCompanies from "@/components/landing/sections/SupportCompanies";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="">
      <Navbar />
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center pt-24 text-white">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-dark-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(49,104,214,0.2),rgba(255,255,255,0))]"></div>
        <section className="min-h-screen w-full py-16">
          <div className="mx-auto w-full max-w-5xl space-y-8 py-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div>
                <h1 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text font-heading text-6xl font-bold leading-[1.25] tracking-tight text-transparent">
                  Empowering the next generation
                </h1>
                <h1 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text font-heading text-6xl font-bold leading-[1.25] tracking-tight text-transparent">
                  of student entrepreneurs
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-[1.5] text-neutral-400">
                We are a community of builders at the University of Virginia
                passionate about solving today&apos;s problems to build
                tomorrow&apos;s world.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/signin">
                <Button className="rounded-full bg-white px-8 py-4 text-black hover:bg-gray-2">
                  Get Started
                </Button>
              </Link>
              {/* <Link href="/signin">
                <Button className="py-4" variant="secondary">
                  Learn more
                </Button>
              </Link> */}
            </div>
          </div>
        </section>
        {/* <section className="flex w-[95%] items-center justify-center rounded-2xl bg-blue-500 p-12">
          <div className="">
            <p className="">Ready to build the next</p>
            <span className="">Brex</span>
          </div>
        </section> */}
        {/* <SupportCompanies /> */}
        <section className="flex h-full min-h-[20rem] w-full max-w-7xl items-center justify-center rounded-[3rem] bg-light-background ">
          <div className="text-center">
            <p className="font-medium text-cyan-500">Become a member</p>
            <h1 className="pb-4 pt-2 font-heading text-4xl font-bold leading-8">
              Turn your ideas into impact
            </h1>
            <p className="text-lg font-normal text-neutral-400">
              Join a community of student builders at the University of
              Virginia.
            </p>
          </div>
        </section>
        <section className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-2 gap-8 py-12">
          <div className="mx-auto max-w-lg py-16 font-heading text-5xl font-bold leading-[1.25]">
            <h1 className="">From Idea to Launch</h1>
            <h2 className="text-neutral-500">
              Guiding members from brainstorming to acquiring their first
              customer.
            </h2>
          </div>
          <div className="h-full w-full rounded-3xl bg-cyan-500">s</div>
        </section>
        <section className="grid min-h-screen w-full max-w-7xl grid-cols-2 gap-8 py-12">
          <div className="mx-auto max-w-lg py-16 text-5xl font-semibold leading-[1.25]">
            <h1 className="">Connect & Collaborate</h1>
            <h2 className="text-neutral-500">
              Unlock your potential by networking with peers, alumni, and
              industry experts.
            </h2>
          </div>
          <div className="h-full w-full rounded-3xl bg-cyan-500">s</div>
        </section>
        <section className="grid min-h-screen w-full grid-cols-2 gap-8 py-12">
          <div className="max-w-lg py-16 text-5xl font-semibold leading-[1.25]">
            <h1 className="">Skills for the Future</h1>
            <h2 className="text-neutral-500">
              Attend workshops and panels to learn entrepreneurial skills and
              industry insights.
            </h2>
          </div>
          <div className="h-full w-full rounded-3xl bg-cyan-500">s</div>
        </section>
        <section className="grid min-h-screen w-full grid-cols-2 gap-8 py-12">
          <div className="max-w-lg py-16 text-5xl font-semibold leading-[1.25]">
            <h1 className="">Skills for the Future</h1>
            <h2 className="text-neutral-500">
              Attend workshops and panels to learn entrepreneurial skills and
              industry insights.
            </h2>
          </div>
          <div className="h-full w-full rounded-3xl bg-cyan-500">s</div>
        </section>
        <section className="flex w-full items-center justify-center">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center font-heading text-6xl font-bold">
            <div className="flex items-end justify-center space-x-2 pb-2">
              <span>Join</span>
              <div className="flex items-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-background bg-blue-500 bg-cover bg-center text-base"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                ></div>
                <div
                  className="-ml-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-background bg-blue-500 bg-cover bg-center text-base"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1584361853901-dd1904bb7987?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                ></div>
                <div
                  className="-ml-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-background bg-blue-500 bg-cover bg-center text-base"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=3099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                ></div>
              </div>{" "}
              <span>entrepreneurs,</span>
            </div>

            <h1 className="flex items-center leading-[1.25]">
              founders, and builders in shaping the future.
            </h1>
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl py-16">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="h-32 bg-blue-500">dd</div>

              <div className="h-32 bg-blue-500">dd</div>

              <div className="h-32 bg-blue-500">dd</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="h-32 bg-blue-500">dd</div>

              <div className="h-32 bg-blue-500">dd</div>
            </div>
          </div>
        </section>
        {/* <section className="relative h-full min-h-screen w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(150%_150%_at_50%_10%,#161618_40%,#63e_100%)]"></div>
        </section> */}
      </main>
    </div>
  );
}
