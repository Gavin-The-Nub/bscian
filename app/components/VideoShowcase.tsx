"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-bg-main px-6 md:px-16 py-12 md:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          style={{ scale, opacity }}
          className="relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block grayscale transition-[filter] duration-[2000ms] ease-out hover:grayscale-0"
          >
            <source src="/videos/showcase.mp4" type="video/mp4" />
          </video>

          {/* Inner border */}
          <div
            className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Vertical text label */}
          <span className="hidden lg:block vertical-text absolute right-6 bottom-6 font-body text-[10px] uppercase tracking-[0.3em] text-white/40 mix-blend-difference">
            Showcase / BSC
          </span>
        </motion.div>
      </div>
    </section>
  );
}
