import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 2.5, 2.5]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    [0, -55, -60, -80]
  );

  const xPercentage = useTransform(x, (x) => `${x}%`);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section className="mt-[-30vh]">
      <div ref={containerRef} className="h-[300vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div
              style={{ scale, x: xPercentage, opacity }}
              className="origin-top"
            >
              <img
                src="/main-screen.svg"
                className="h-[75vh] max-h-[45vw] w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
