"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Overline from "../components/Overline";

/* ==============================
   ANIMATION VARIANTS
   ============================== */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ==============================
   DATA
   ============================== */
const collections = [
  "DUET Collection",
  "S2 Collection — Faucets",
  "SUS Collection — Stainless Steel",
  "Shower Product Collection",
  "LINE Collection — Taps",
  "Self Closing Tap / Flush Valve Collection",
  "Sensor Product Collection",
  "Kitchen Products Collection",
  "Bathroom Collection",
  "Bathroom Accessories Collection",
  "Furniture Collection",
  "Bidet Spray Collection",
  "Fittings Collection",
];

/* ==============================
   PAGE
   ============================== */
export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (name: string) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form delivery is being finalised pending domain & email service setup.
    // Until then, surface an honest acknowledgement that directs the user
    // to email us directly. See FORM_DELIVERY_PENDING note below.
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative flex items-end bg-bg-main overflow-hidden min-h-[50vh] lg:min-h-[60vh]">
        {/* Decorative large text background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-heading text-[18vw] lg:text-[14vw] font-normal tracking-tighter text-text-main/[0.03] leading-none">
            CONTACT
          </span>
        </div>

        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-16 pb-16 md:pb-24 pt-32 lg:pt-40">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <Overline withLine className="mb-6">
                Get In Touch
              </Overline>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-text-main"
            >
              Let&apos;s{" "}
              <em className="text-accent not-italic italic">Talk</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-text-body leading-relaxed max-w-xl"
            >
              For bathroom and kitchen product enquiries or partnership
              conversations, contact us below.
            </motion.p>
          </motion.div>
        </div>

        {/* Vertical label */}
        <span className="hidden lg:block vertical-text absolute right-16 bottom-16 font-body text-[10px] uppercase tracking-[0.3em] text-text-body/40">
          Contact / Enquiry
        </span>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="bg-bg-alt border-t border-text-main/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left — Sidebar info */}
            <motion.aside
              className="lg:col-span-4 lg:sticky lg:top-28 self-start"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Overline withLine className="mb-6">
                  Contact Information
                </Overline>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl md:text-4xl leading-[0.95] tracking-tight text-text-main mb-10"
              >
                Send us an{" "}
                <em className="text-accent italic">Enquiry</em>
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-8">
                {/* Email */}
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60 block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:info@bsundc.com"
                    className="font-body text-sm text-text-main hover:text-accent transition-colors duration-200"
                  >
                    info@bsundc.com
                  </a>
                </div>

                {/* Response time */}
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60 block mb-2">
                    Response Time
                  </span>
                  <p className="font-body text-sm text-text-body">
                    We typically respond within 1–2 business days.
                  </p>
                </div>

                {/* Decorative line */}
                <div className="h-px w-full bg-text-main/10" />

                <p className="font-body text-xs text-text-body/50 leading-relaxed">
                  All enquiries are treated with strict confidentiality.
                  Your information will only be used to respond to your
                  request.
                </p>
              </motion.div>
            </motion.aside>

            {/* Right — Form */}
            <motion.div
              className="lg:col-span-7 lg:col-start-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
             <div className="bg-bg-main border border-text-main/10 shadow-sm p-8 md:p-12 lg:p-16">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-bg-main border border-text-main/10 p-12 md:p-16 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl tracking-tight text-text-main mb-3">
                    Thank You
                  </h3>
                  <p className="font-body text-sm text-text-body max-w-md mx-auto mb-6">
                    Online form delivery is being finalised while we complete
                    our domain setup. To make sure your enquiry reaches us,
                    please email us directly at the address below.
                  </p>
                  <a
                    href="mailto:info@bsundc.com?subject=Website%20Enquiry"
                    className="inline-flex items-center justify-center px-8 py-3 bg-text-main text-bg-main font-body text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500"
                  >
                    Email info@bsundc.com
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0 mt-0">
                  {/* Form delivery notice — visible until domain & email service are live */}
                  <div className="mb-10 border-l-2 border-accent bg-accent/5 px-5 py-4">
                    <p className="font-body text-xs text-text-body leading-relaxed">
                      <span className="font-medium text-text-main">Note:</span>{" "}
                      Online form delivery is being finalised while we complete
                      our domain setup. For an immediate response, please email{" "}
                      <a
                        href="mailto:info@bsundc.com"
                        className="text-accent hover:underline"
                      >
                        info@bsundc.com
                      </a>
                      .
                    </p>
                  </div>

                  {/* Personal Information */}
                  <motion.div variants={fadeUp}>
                    <div className="border-b border-text-main/10 pb-2 mb-8">
                      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60">
                        Personal Information
                      </span>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                    <motion.div variants={fadeUp}>
                      <label
                        htmlFor="firstName"
                        className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                        className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <label
                        htmlFor="lastName"
                        className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Surname"
                        required
                        className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  {/* Company */}
                  <motion.div variants={fadeUp}>
                    <div className="border-b border-text-main/10 pb-2 mb-8">
                      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60">
                        Company Details
                      </span>
                    </div>
                  </motion.div>

                  <div className="space-y-6 mb-12">
                    <motion.div variants={fadeUp}>
                      <label
                        htmlFor="company"
                        className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <motion.div variants={fadeUp}>
                        <label
                          htmlFor="address"
                          className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                        >
                          Address
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          <input
                            type="text"
                            id="address"
                            name="street"
                            placeholder="Street Address"
                            className="col-span-2 bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                          />
                          <input
                            type="text"
                            name="houseNumber"
                            placeholder="No."
                            className="bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <label
                          htmlFor="city"
                          className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="City Name"
                          className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <motion.div variants={fadeUp}>
                        <label
                          htmlFor="zip"
                          className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                        >
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="Zip Code"
                          className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                        />
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <label
                          htmlFor="country"
                          className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          placeholder="Country Name"
                          className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Contact */}
                  <motion.div variants={fadeUp}>
                    <div className="border-b border-text-main/10 pb-2 mb-8">
                      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60">
                        Contact Details
                      </span>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                    <motion.div variants={fadeUp}>
                      <label
                        htmlFor="phone"
                        className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="text"
                          name="countryCode"
                          placeholder="+ Code"
                          className="bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          className="col-span-2 bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      {/* [CJ] — "E-Mail" → "Email Address" per form label standard. */}
                      <label
                        htmlFor="email"
                        className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        required
                        className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  {/* Product Interest */}
                  <motion.div variants={fadeUp}>
                    <div className="border-b border-text-main/10 pb-2 mb-8">
                      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60">
                        I am interested in the:
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
                  >
                    {collections.map((name) => {
                      const isActive = selected.includes(name);
                      return (
                        <button
                          key={name}
                          type="button"
                          onClick={() => toggle(name)}
                          className={`group relative text-left px-5 py-3.5 border transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-accent border-accent text-bg-main"
                              : "bg-bg-main border-text-main/10 text-text-main hover:border-accent/30 hover:bg-accent/[0.03]"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {/* Custom checkbox */}
                            <span
                              className={`flex-shrink-0 w-4 h-4 border flex items-center justify-center transition-all duration-200 ${
                                isActive
                                  ? "border-bg-main/40 bg-bg-main/20"
                                  : "border-text-main/20 group-hover:border-accent/40"
                              }`}
                            >
                              {isActive && (
                                <svg
                                  className="w-2.5 h-2.5 text-bg-main"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  strokeWidth="3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </span>
                            <span className="font-body text-xs font-medium tracking-wide">
                              {name}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fadeUp}>
                    <div className="border-b border-text-main/10 pb-2 mb-8">
                      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-body/60">
                        Your Message
                      </span>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mb-12">
                    {/* [CJ] — "Write a Message" → "Message" per form label standard. */}
                    <label
                      htmlFor="message"
                      className="block font-body text-xs font-medium uppercase tracking-[0.15em] text-text-main mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      className="w-full bg-bg-main border border-text-main/10 px-4 py-3 font-body text-sm text-text-main placeholder:text-text-body/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-vertical min-h-[140px]"
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeUp}>
                    <Button type="submit" variant="primary" size="lg" withArrow className="w-full md:w-auto">
                      Submit Enquiry
                    </Button>
                  </motion.div>
                </form>
              )}
             </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
