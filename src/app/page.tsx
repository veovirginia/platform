import About from "~/components/landing/About";
import Community from "~/components/landing/Community";
import Connect from "~/components/landing/Connect";
import Hero from "~/components/landing/Hero";
import Mission from "~/components/landing/Mission";
import Navbar from "~/components/landing/Navbar";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 py-8 md:gap-16">
        <About />

        <Mission />

        <Community />

        <Connect />
      </div>
    </main>
  );
}
