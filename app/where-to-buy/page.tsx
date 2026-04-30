"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import Overline from "../components/Overline";
import Button from "../components/Button";
import { Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function WhereToBuy() {
  return (
    <>
      <Navbar />

      <main className="bg-bg-main min-h-screen pt-20 lg:pt-24">
        <SectionWrapper pt="pt-16 lg:pt-24" pb="pb-24 lg:pb-40">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <Overline withLine className="mb-6 justify-center">
                Availability
              </Overline>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8 text-text-main"
            >
              Where to <em className="text-accent italic">Buy</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-lg md:text-xl text-text-body leading-relaxed mb-4"
            >
              Hot and cold shower available in select locations across the
              Philippines. Stockist information coming soon.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-base text-text-body/70 leading-relaxed mb-12"
            >
              For purchasing enquiries: info@bsundc.com
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="mailto:info@bsundc.com?subject=Where to Buy — Tap-to-Shower">
                <Button variant="primary" size="lg">
                  <Mail className="w-4 h-4 mr-3" />
                  Email info@bsundc.com
                </Button>
              </a>
              <a href="/tap-to-shower">
                <Button variant="secondary" size="lg">
                  Back to Tap-to-Shower™
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
