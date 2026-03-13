"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CursorBloom() {
  const x = useMotionValue(-320);
  const y = useMotionValue(-320);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45),rgba(161,212,204,0.18)_38%,transparent_72%)] blur-3xl md:block"
      style={{ x, y }}
    />
  );
}
