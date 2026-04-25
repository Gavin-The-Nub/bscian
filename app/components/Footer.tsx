"use client";

import React from "react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Imprint", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-text-main text-bg-main border-t border-bg-main/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div>
            <a
              href="#"
              className="font-heading text-3xl italic text-bg-main tracking-tight"
            >
              BSC
            </a>
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-bg-main/40 mt-2">
              Bathroom · Sanitary · Construction
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-bg-main/60 hover:text-accent transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-bg-main/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-[10px] text-bg-main/30 tracking-wider">
            © {new Date().getFullYear()} BSC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@bsundc.com"
              className="font-body text-[10px] text-bg-main/30 hover:text-accent transition-colors duration-500 tracking-wider"
            >
              info@bsundc.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] text-bg-main/30 hover:text-accent transition-colors duration-500 tracking-wider uppercase"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
}
