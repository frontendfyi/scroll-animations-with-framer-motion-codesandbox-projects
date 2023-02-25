import { Collaboration } from "@/sections/collaboration";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { MoreFeatures } from "@/sections/more-features";
import { NoLockin } from "@/sections/no-lockin";
import { SamePage } from "@/sections/same-page";
import { StreamlinedExperience } from "@/sections/streamlined-experience";
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
          <StreamlinedExperience />
          <Features />
          <MoreFeatures />
          <NoLockin />
        </div>
      </main>
    </>
  );
}
