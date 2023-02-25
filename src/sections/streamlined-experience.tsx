import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const StreamlinedExperience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={
        {
          opacity: opacitySection,
          "--scale": scale,
          "--opacity-border": opacityBorder,
        } as any
      }
      ref={containerRef}
      className="mt-[50vh] flex h-[500vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#CEF144] before:opacity-[var(--opacity-border)] after:absolute after:left-[calc(50%*var(--scale)+50%)] after:top-0 after:block after:h-full after:w-[50vw] after:bg-background after:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" } as any}
          className="whitepsace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
        >
          Streamlined Experience.
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" } as any}
          className="whitepsace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-10 text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
        >
          Streamlined Experience.
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
        >
          Streamlined
          <br />
          Experience.
        </motion.p>
      </div>
    </motion.section>
  );
};
