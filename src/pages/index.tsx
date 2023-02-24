import { Collaboration } from "@/sections/Collaboration";
import { Hero } from "@/sections/Hero";
import { SamePage } from "@/sections/SamePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scroll Animations with Framer Motion</title>
        <meta
          name="description"
          content="Scroll animations with Framer Motion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <div className="relative z-10 w-full overflow-x-clip">
          <Collaboration />
          <SamePage />
        </div>
      </main>
    </>
  );
}
