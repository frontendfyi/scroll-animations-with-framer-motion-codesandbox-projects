import MainScreen from "@/screens/main-screen";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.6, 0.7, 0.95],
    [1, 1.15, 1.5, 2.5, 2.5]
  );
  const x = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.58, 0.7, 0.75, 0.95],
    [0, -10, -25, -30, -45, -60]
  );
  const xPercentage = useTransform(x, (x) => `${x}%`);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section className="mt-[-30vh]">
      <div ref={containerRef} className="h-[140vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            {/* <MainScreen className="h-[75vh] max-h-[45vw] w-auto opacity-0" /> */}
            <motion.div
              style={{ scale, x: xPercentage, opacity }}
              className="origin-[50%_0%]"
            >
              <MainScreen className="h-[75vh] max-h-[45vw] w-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
