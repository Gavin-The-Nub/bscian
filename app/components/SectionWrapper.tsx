"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
  noPadding?: boolean;
  pt?: string;
  pb?: string;
}

export default function SectionWrapper({
  children,
  dark = false,
  className = "",
  id,
  noPadding = false,
  pt,
  pb,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        ${dark ? "bg-text-main text-bg-main" : "bg-bg-main text-text-main"}
        ${noPadding ? "" : `px-6 md:px-16 ${pt || "pt-20 md:pt-32"} ${pb || "pb-20 md:pb-32"}`}
        ${className}
      `}
    >
      <div className="mx-auto max-w-[1600px]">{children}</div>
    </motion.section>
  );
}
