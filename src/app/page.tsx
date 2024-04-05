import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="">
      <nav className="w-full py-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-heading text-lg font-bold">Luminary</h1>
        </div>
      </nav>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center py-16 text-white">
        <section className="min-h-screen w-full py-16">
          <div className="grid grid-cols-2">
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="font-heading text-7xl font-extrabold">
                  Create.
                </h1>
                <h1 className="font-heading text-7xl font-extrabold">
                  Disrupt.
                </h1>
                <h1 className="font-heading text-7xl font-extrabold">
                  Innovate.
                </h1>
                <h1 className="font-heading text-7xl font-extrabold">
                  Repeat.
                </h1>
              </div>

              <div className="flex">
                <p className="max-w-md text-left text-lg text-neutral-400">
                  We are a community of builders at the University of Virginia
                  passionate about solving today&apos;s problems to build
                  tomorrow&apos;s world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-content aspect-w-1 aspect-h-1 bg-cyan-500" />
              <div className="aspect-content aspect-w-1 aspect-h-1 bg-transparent" />
              <div className="aspect-content aspect-w-1 aspect-h-1 bg-transparent" />
              <div className="aspect-content aspect-w-1 aspect-h-1 bg-indigo-500" />
            </div>
          </div>
        </section>
        {/* <section className="flex w-full items-center justify-center rounded-2xl bg-blue-500 p-12">
          <div className="">
            <p className="">Ready to build the next</p>
            <span className="">Brex</span>
          </div>
        </section> */}
        <section className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-end justify-center space-x-4 pb-2 text-6xl font-medium">
              <span>Join</span>
              <div className="flex items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-background bg-blue-500 text-base">
                  Image
                </div>
                <div className="-ml-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-background bg-green-500 text-base">
                  Image
                </div>
                <div className="-ml-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-background bg-cyan-500 text-base">
                  Image
                </div>
              </div>{" "}
              <span>entrepreneurs,</span>
            </div>

            <h1 className="flex items-center text-6xl font-medium leading-[1.25]">
              founders, and builders at the University of Virginia
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
