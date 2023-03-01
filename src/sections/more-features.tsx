import { Flow } from "@/icons/flow";
import { Intellisense } from "@/icons/intellisense";
import { Keyboard } from "@/icons/keyboard";
import { MagicBranch } from "@/icons/magic-branch";
import { Prebuilds } from "@/icons/prebuilds";
import { Preview } from "@/icons/preview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    icon: Prebuilds,
    title: "Prebuilds",
    text: "CodeSandbox continuously prebuilds your branches. This means no more waiting for dependencies to be downloaded and builds to finish.",
  },
  {
    icon: Intellisense,
    title: "IntelliSense",
    text: "Go beyond syntax highlighting and autocomplete. With smart completions based on variable types, function definitions, and imported modules.",
  },
  {
    icon: Flow,
    title: "Built for flow",
    text: "A completely redesigned experience to keep you in flow.",
  },
  {
    icon: MagicBranch,
    title: "Magic Branch Management",
    text: "Organize your development workflow and help your team move work forward",
  },
  {
    icon: Keyboard,
    title: "Keyboard first design",
    text: "Quick access makes for an efficient workflow. Navigate quickly with our extensive keyboard shortcuts.",
  },
  {
    icon: Preview,
    title: "Live preview",
    text: "See changes as you make them. With Hot reload Previews see your changes instantly. ",
  },
];

export const MoreFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto grid w-full max-w-[120rem] grid-cols-3 gap-40 py-96"
    >
      {content.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]">
            <Icon className="h-12 w-12" />
          </span>
          <h3 className="mb-2 text-xl text-white">{title}</h3>
          <p className="text-md">{text}</p>
        </div>
      ))}
    </motion.section>
  );
};
