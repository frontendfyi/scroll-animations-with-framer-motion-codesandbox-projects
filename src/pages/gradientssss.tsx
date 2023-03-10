import { useEffect, useRef } from "react";

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #1250aa 0%,
            transparent 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-size: 80px;
          text-transform: uppercase;
          transform: rotate(10deg) translateX(calc(var(--x) / 10, 0px));
        }
      `}</style>
      <div ref={heroRef} className="hero">
        <p className="title">Gradients!</p>
      </div>
    </>
  );
}
