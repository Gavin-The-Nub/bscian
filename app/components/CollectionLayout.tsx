"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Overline from "./Overline";

export interface Product {
  name: string;
  desc: string;
  specs: string[];
  config: string[];
  code: string;
  placeholder?: boolean;
}

export interface Section {
  id: string;
  title: string;
  overline: string;
  products: Product[];
}

export interface CollectionConfig {
  bgText: string;
  title: string;
  titleAccent: string;
  description: string;
  verticalLabel: string;
  sections: Section[];
  compliance: string[];
  features: { label: string; icon: string }[];
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const imgIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
  </svg>
);

function ProductCard({ product, compliance, features }: { product: Product; compliance: string[]; features: { label: string; icon: string }[] }) {
  const [open, setOpen] = useState(false);

  if (product.placeholder) {
    return (
      <motion.article variants={fadeUp} className="bg-bg-main border border-text-main/5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden opacity-50">
        <div className="relative aspect-[4/3] bg-bg-feature border-b border-text-main/5 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-body/20">{imgIcon}</div>
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-text-body/20">Coming Soon</span>
        </div>
        <div className="p-6 md:p-8">
          <span className="inline-block font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-text-body/40 bg-text-main/5 px-3 py-1 mb-3">{product.code}</span>
          <p className="font-body text-xs text-text-body/40">Details coming soon</p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article variants={fadeUp} className="group bg-bg-main border border-text-main/5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-700 overflow-hidden">
      <div className="relative aspect-[4/3] bg-bg-feature border-b border-text-main/5 flex flex-col items-center justify-center gap-3 overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-body/30">{imgIcon}</div>
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-text-body/30">Product Image</span>
      </div>
      <div className="p-6 md:p-8">
        <span className="inline-block font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent/5 px-3 py-1 mb-4">{product.code}</span>
        <h3 className="font-heading text-lg md:text-xl tracking-tight text-text-main mb-2 leading-snug">{product.name}</h3>
        <p className="font-body text-sm text-text-body/70 leading-relaxed mb-6 line-clamp-2">{product.desc}</p>

        <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-text-main transition-colors duration-300 cursor-pointer">
          <span>{open ? "Hide" : "View"} Specifications</span>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-text-main/10 space-y-6">
                <div>
                  <h4 className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-text-main mb-3">Product Specification</h4>
                  <ul className="space-y-1.5">
                    {product.specs.map((s, i) => (
                      <li key={i} className="font-body text-xs text-text-body/70 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                {product.config.length > 0 && (
                  <div>
                    <h4 className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-text-main mb-3">Configuration Options</h4>
                    <ul className="space-y-1.5">
                      {product.config.map((c, i) => (
                        <li key={i} className="font-body text-xs text-text-body/70 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-text-main/20 flex-shrink-0" />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-text-main mb-3">Compliant With</h4>
                  <div className="flex flex-wrap gap-2">
                    {compliance.map((c, i) => (
                      <span key={i} className="font-body text-[10px] text-text-body/60 bg-bg-alt px-2.5 py-1 border border-text-main/5">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-text-main/10">
                  {features.map((f) => (
                    <div key={f.label} className="flex flex-col items-center gap-1 py-2">
                      <span className="text-lg">{f.icon}</span>
                      <span className="font-body text-[9px] uppercase tracking-[0.15em] text-text-body/60 text-center leading-tight">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function CollectionLayout({ config }: { config: CollectionConfig }) {
  return (
    <>
      <Navbar />
      <section className="relative flex items-end bg-bg-main overflow-hidden min-h-[55vh] lg:min-h-[65vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-heading text-[18vw] lg:text-[14vw] font-bold tracking-tighter text-text-main/[0.03] leading-none">{config.bgText}</span>
        </div>
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-16 pb-16 md:pb-24 pt-32 lg:pt-40">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}><Overline withLine className="mb-6">Products Collection</Overline></motion.div>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-text-main">
              {config.title}{" "}<em className="text-accent not-italic italic">{config.titleAccent}</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-text-body leading-relaxed max-w-xl">{config.description}</motion.p>
          </motion.div>
        </div>
        <span className="hidden lg:block vertical-text absolute right-16 bottom-16 font-body text-[10px] uppercase tracking-[0.3em] text-text-body/40">{config.verticalLabel}</span>
      </section>

      <nav className="sticky top-16 md:top-20 z-20 bg-bg-main/95 backdrop-blur-sm border-t border-b border-text-main/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3 -mx-2">
            {config.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex-shrink-0 px-4 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-text-body/60 hover:text-accent hover:bg-accent/5 transition-all duration-300">{s.title}</a>
            ))}
          </div>
        </div>
      </nav>

      {config.sections.map((section, sIdx) => (
        <section key={section.id} id={section.id} className={`scroll-mt-28 ${sIdx % 2 === 0 ? "bg-bg-alt" : "bg-bg-main"} border-b border-text-main/10`}>
          <div className="mx-auto max-w-[1600px] px-6 md:px-16 py-20 md:py-28">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-14 md:mb-20">
              <motion.div variants={fadeUp}><Overline withLine className="mb-6">{section.overline}</Overline></motion.div>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-text-main">
                {section.title.includes("—") ? (
                  <>{section.title.split("—")[0]}<br className="hidden md:block" /><em className="text-accent italic">— {section.title.split("—")[1]}</em></>
                ) : (
                  <>{section.title}{" "}<em className="text-accent italic">Products</em></>
                )}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {section.products.map((product) => (
                <ProductCard key={product.code} product={product} compliance={config.compliance} features={config.features} />
              ))}
            </motion.div>
          </div>
        </section>
      ))}
      <Footer />
    </>
  );
}
