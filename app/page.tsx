"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SectionWrapper from "./components/SectionWrapper";
import EditorialImage from "./components/EditorialImage";
import Overline from "./components/Overline";
import Button from "./components/Button";
import VideoShowcase from "./components/VideoShowcase";
import CollectionCarousel from "./components/CollectionCarousel";
import Footer from "./components/Footer";
import Link from "next/link";

/* ==============================
   ANIMATION VARIANTS
   ============================== */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ==============================
   DATA
   ============================== */

const stats = [
  { number: "30+", label: "Years of Experience" },
  { number: "5+", label: "Countries Served" },
  { number: "ISO", label: "9001 & 14001 Certified" },
  { number: "DE", label: "German Engineering" },
];

/* ==============================
   PAGE
   ============================== */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative lg:min-h-screen flex items-center lg:items-center overflow-hidden">
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-16 pb-16 md:pb-24 pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-start">
            {/* Left — Copy */}
            <div className="lg:col-span-5 lg:col-start-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <Overline
                  withLine
                  className="mb-6 justify-center lg:justify-start w-full"
                >
                  Bathroom · Sanitary · Construction
                </Overline>

                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-text-main">
                  Engineered{" "}
                  <em className="text-accent not-italic">Precision</em>,<br />
                  Designed{" "}
                  <em className="text-accent not-italic italic">Beauty</em>
                </h1>

                <p className="font-body text-base md:text-lg text-text-body leading-relaxed max-w-md mb-10 mx-auto lg:mx-0">
                  {/* [CJ] — "& Denmark" → "and Denmark": ampersand banned in body copy per house style. */}
                  Premium faucets, fixtures, and sanitary products — developed
                  in Germany and Denmark, trusted across Southeast Asia.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <Link href="/collections" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="group w-full sm:w-auto"
                    >
                      Explore Collections
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:block lg:col-span-6 lg:col-start-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <EditorialImage
                  src="/images/hero.png"
                  alt="BSC premium chrome faucet on marble countertop"
                  aspect="4/5"
                  priority
                  className="shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                />

                {/* Vertical text label */}
                <span className="hidden lg:block vertical-text absolute -left-10 bottom-8 font-body text-[10px] uppercase tracking-[0.3em] text-text-body/50">
                  Editorial / Est. 2018
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLAGSHIP PRODUCT — SHOWER (MOVED) ===== */}
      <section className="border-t border-text-main/10">
        {/* MOBILE: image with text overlay */}
        <div className="lg:hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <EditorialImage
              src="/images/shower.png"
              alt="BSC premium rain shower system"
              aspect="3/4"
              className="w-full"
            />
          </motion.div>

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Text content overlaid */}
          <motion.div
            className="absolute inset-x-0 bottom-0 p-6 pb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Overline withLine dark className="mb-4">
                Flagship
              </Overline>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl leading-[0.95] tracking-tight text-text-white mb-4"
            >
              Tap-to-<em className="text-accent italic">Shower™</em>
              <br />
              Collection
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-sm text-text-white md:text-text-body  leading-relaxed mb-6 max-w-sm"
            >
              Tap-to-Shower™ turns a single-line (cold-only) bathroom
              into a hot and cold shower without concealed plumbing or wall
              work. Engineered in Germany and Denmark.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <a href="/tap-to-shower" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="group w-full sm:w-auto"
                    >
                      Discover Tap-to-Shower™
                    </Button>
                  </a>
                  <a href="/tap-to-shower#inquiry" className="w-full sm:w-auto">
                    <Button variant="secondary" size="lg" onDark className="w-full sm:w-auto">
                      Request Information
                    </Button>
                  </a>
                </div>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP: side-by-side layout */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-[1600px] px-16 py-24">
            <div className="grid grid-cols-12 gap-16 items-center">
              {/* Image */}
              <motion.div
                className="col-span-6 col-start-1 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <EditorialImage
                  src="/images/shower.png"
                  alt="BSC premium rain shower system"
                  aspect="5/6"
                  className="shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                />
                <span className="vertical-text absolute -right-10 top-8 font-body text-[10px] uppercase tracking-[0.3em] text-text-body/40">
                  Flagship / Tap-to-Shower
                </span>
              </motion.div>

              {/* Copy */}
              <motion.div
                className="col-span-5 col-start-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.div variants={fadeUp}>
                  <Overline withLine className="mb-6">
                    Flagship
                  </Overline>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-8 text-text-main"
                >
                  Tap-to-<em className="text-accent italic">Shower™</em>
                  <br />
                  Collection
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="font-body text-lg text-text-body leading-relaxed mb-8 max-w-md"
                >
                  Tap-to-Shower™ turns a single-line (cold-only) bathroom
                  into a hot and cold shower without concealed plumbing or wall
                  work. Engineered in Germany and Denmark.
                </motion.p>

                <motion.ul variants={fadeUp} className="space-y-4 mb-10">
                  {[
                    "Complete Tap-to-Shower Kit",
                    "Tap-to-Shower Tap Only",
                    "Tap-to-Shower Upgrade Kit",
                    "Tap-to-Shower Connection Set",
                    "Instant Water Heater",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="block w-1.5 h-1.5 mt-2 bg-accent shrink-0" />
                      <span className="font-body text-sm text-text-main/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <Link href="/tap-to-shower" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="group w-full sm:w-auto"
                    >
                      Discover Tap-to-Shower™
                    </Button>
                  </Link>
                  <Link href="/tap-to-shower#inquiry" className="w-full sm:w-auto">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      Request Information
                    </Button>
                  </Link>
                </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase moved below Shower */}
      <VideoShowcase />

      {/* ===== ABOUT / BRAND STORY (HIDDEN) ===== */}
      {/* 
      <SectionWrapper id="about" className="border-t border-charcoal/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          ...
        </div>
      </SectionWrapper>
      */}

      {/* ===== FEATURED COLLECTIONS (HIDDEN FOR NOW) ===== */}
      {/* 
      <SectionWrapper id="collections" className="bg-bg-feature">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Overline withLine className="mb-6">
              Product Lines
            </Overline>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight text-text-main">
              The <em className="text-accent italic">Collections</em>
            </h2>
            <p className="font-body text-sm md:text-base text-text-body/60 max-w-sm leading-relaxed">
              Each collection is a distinct expression of our design philosophy
              — unified by engineering precision, differentiated by purpose.
            </p>
          </motion.div>
        </motion.div>

        <CollectionCarousel />
      </SectionWrapper>
      */}

      {/* Redundant Shower section removed */}

      {/* ===== TRUST / PROOF (Stats) ===== */}
      <section className="bg-bg-alt border-t border-b border-text-main/10 px-6 md:px-16 py-20 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className={`text-center ${
                  i < stats.length - 1
                    ? "lg:border-r lg:border-text-main/10"
                    : ""
                }`}
              >
                <span className="block font-heading text-5xl md:text-6xl lg:text-7xl text-text-main tracking-tight leading-none mb-3">
                  {stat.number}
                </span>
                <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.25em] text-text-body">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT CTA (HIDDEN) ===== */}
      {/* 
      <SectionWrapper id="contact" dark>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          ...
        </div>
      </SectionWrapper>
      */}

      <Footer />
    </>
  );
}
