"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import EditorialImage from "../components/EditorialImage";
import Overline from "../components/Overline";
import Button from "../components/Button";
import { ttsCollections } from "./data";

/* ==============================
   ANIMATION VARIANTS
   ============================== */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const revealImage = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
  },
};

export default function TapToShowerCollection() {
  return (
    <>
      <Navbar />

      <main className="bg-bg-main min-h-screen pt-20 lg:pt-24">
        {/* ===== HERO SECTION ===== */}
        <SectionWrapper id="tts-hero" pt="pt-8 lg:pt-12" className="pb-16 lg:pb-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-12">
              <motion.div variants={fadeUp}>
                <Overline withLine className="mb-8">
                  The Shower Experience Redefined
                </Overline>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight mb-12 text-text-main"
              >
                Tap-to-<em className="text-accent italic">Shower</em><br />
                Collection
              </motion.h1>
            </div>

            <div className="lg:col-span-5">
              <motion.p 
                variants={fadeUp}
                className="font-body text-lg md:text-xl text-text-body leading-relaxed max-w-lg"
              >
                Our Tap-to-Shower system is engineered to transform standard cold-only 
                installations into luxurious hot & cold shower experiences with minimal 
                disruption. From complete bundles to individual components, each element 
                reflects our commitment to German and Danish engineering precision.
              </motion.p>
            </div>

            <div className="lg:col-span-7">
               <motion.div variants={revealImage} className="relative overflow-hidden w-full aspect-[16/9]">
                  <EditorialImage 
                    src="/images/shower.png" 
                    alt="Tap-to-Shower Systems" 
                    aspect="16/9"
                    priority
                    className="object-cover"
                  />
               </motion.div>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* ===== COLLECTIONS GRID ===== */}
        <section className="border-t border-text-main/10 bg-bg-main/30 backdrop-blur-sm">
          <SectionWrapper id="collections-list" pt="pt-24 lg:pt-36" pb="pb-24 lg:pb-36">
            <div className="space-y-32 lg:space-y-48">
              {ttsCollections.map((collection, index) => (
                <div 
                  key={collection.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <motion.div variants={fadeUp}>
                      <Overline withLine className="mb-6">
                        Collection {collection.code}
                      </Overline>
                    </motion.div>

                    <motion.h2 
                      variants={fadeUp}
                      className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-text-main"
                    >
                      {collection.name}
                    </motion.h2>

                    <motion.p 
                      variants={fadeUp}
                      className="font-body text-base md:text-lg text-text-body leading-relaxed mb-10"
                    >
                      {collection.description}
                    </motion.p>

                    <motion.div variants={fadeUp}>
                      <a href={collection.detailsPath}>
                        <Button variant="primary" className="group">
                          {collection.ctaText}
                          <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Image */}
                  <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={revealImage}
                    className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <EditorialImage 
                      src={collection.image} 
                      alt={collection.name} 
                      aspect="4/3"
                      className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-text-main relative overflow-hidden">
             {/* Decorative Background Text */}
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <span className="font-heading text-[30vw] text-bg-main whitespace-nowrap">
                   TAP-TO-SHOWER
                </span>
             </div>

             <SectionWrapper id="final-cta" pt="pt-24 lg:pt-40" pb="pb-24 lg:pb-40">
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                   <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                     viewport={{ once: true }}
                   >
                    <Overline withLine dark className="justify-center mb-8">
                       Engineering Excellence
                    </Overline>
                    <h2 className="font-heading text-5xl md:text-7xl text-bg-main tracking-tight mb-12">
                       Ready to <em className="text-accent italic">Upgrade</em> Your Space?
                    </h2>
                    <p className="font-body text-bg-main/60 text-lg mb-12 max-w-2xl mx-auto">
                       Contact our product specialists to find the perfect configuration 
                       for your bathroom project. We offer professional consultation 
                       and technical support across Southeast Asia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                       <Button size="lg">Consult a Specialist</Button>
                       <Button variant="secondary" size="lg" className="border-bg-main/30 text-bg-main hover:bg-bg-main hover:text-text-main">
                          Download Catalog
                       </Button>
                    </div>
                   </motion.div>
                </div>
             </SectionWrapper>
        </section>
      </main>

      <Footer />
    </>
  );
}
