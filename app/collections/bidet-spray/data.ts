import { Droplets, Settings2, Wrench, ShieldCheck } from "lucide-react";
import type { Product, Section } from "../../components/CollectionLayout";

const FEAT_3YR = [
  { label: "Water Saving", icon: Droplets },
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "3 Year Warranty", icon: ShieldCheck },
];
const FEAT_HOLDER = [
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "3 Year Warranty", icon: ShieldCheck },
];
const FEAT_1YR = [
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "1 Year Warranty", icon: ShieldCheck },
];

export const COMPLIANCE: string[] = [];
export const FEATURES = FEAT_3YR;

export const sections: Section[] = [
  /* ── BIDET SPRAY SET ── */
  {
    id: "bidet-spray-set",
    title: "Bidet Spray Set",
    overline: "Shataf / Anal Spray Solutions",
    products: [
      {
        name: "Bidet Spray Set with Ceramic Mixer Cartridge",
        desc: "Bidet Spray Set (Shataf / Anal Spray) with ceramic mixer cartridge, integrated holder and bidet hose.",
        specs: [
          "Finishes Chrome",
          "Brass",
          "25mm Ceramic Cartridge",
          "Concealed Installation Box",
          "Soft Spray with Temperature Regulation",
          "1.2m Nylon braided hose with Silver Grey PVC Outer Liner",
          "Tested to pass 35,000 Activations",
        ],
        config: [
          "Alternative Bidet Sprayer Design in Brass, Stainless Steel or ABS",
          "1.2m Anti-Theft Bidet Hose",
        ],
        code: "BSS-F302",
        image: "/images/collection/bidet-spray/BSS-F302-1920w.png",
      },
      {
        name: "Bidet Spray Set — Stainless Steel 304",
        desc: "Bidet Spray Set (Shataf / Anal Spray) in Stainless Steel 304 with integrated holder and bidet hose.",
        specs: [
          "Finishes Brushed",
          "Stainless Steel 304",
          "¼ turn (90°) Ceramic Cartridge",
          "1.2m Stainless Steel Bidet Hose",
          "Tested to pass 35,000 Activations",
        ],
        config: [
          "Soft Spray with max 4 lpm Water Flow Limitation",
          "1.2m Anti-Theft Bidet Hose",
        ],
        code: "BSS-F303",
        image: "/images/collection/bidet-spray/BSS-F303-1920w.png",
      },
      {
        name: "Bidet Spray Set — Stainless Steel with Holder",
        desc: "Bidet Spray Set (Shataf / Anal Spray) with holder and bidet hose.",
        specs: [
          "Finishes Stainless Steel",
          "Stainless Steel 304",
          "Aerator",
          "1.2m long PVC bidet hose with Stainless Steel Swivel Nut",
          "Wall bracket",
        ],
        config: [
          "Soft Spray with max 4 lpm Water Flow Limitation",
          "Alternative Wall Bracket",
          "1.2m double locked Stainless Steel Bidet Hose",
          "1.2m Anti-Theft Bidet Hose",
        ],
        code: "F592",
        image: "/images/collection/bidet-spray/F592-1920w.png",
      },
      {
        name: "Bidet Spray Set — ABS (Chrome/Black)",
        desc: "Bidet Spray Set (Shataf / Anal Spray) with holder and bidet hose.",
        specs: [
          "Finishes Chrome / Black, Brushed Nickel",
          "ABS",
          "Aerator",
          "1.2m long PVC bidet hose with Brass Swivel Nut",
          "Wall bracket",
        ],
        config: [
          "Soft Spray with max 4 lpm Water Flow Limitation",
          "Alternative Wall Bracket",
          "1.2m double locked chrome plated Stainless Steel Bidet Hose",
          "1.2m Anti-Theft Bidet Hose",
        ],
        code: "F596",
        image: "/images/collection/bidet-spray/F596-1920w.png",
      },
      {
        name: "Bidet Spray Set — ABS (Variant)",
        desc: "Bidet Spray Set (Shataf / Anal Spray) with holder and bidet hose.",
        specs: [
          "Finishes Chrome / Black, Brushed Nickel",
          "ABS",
          "Aerator",
          "1.2m long PVC bidet hose with Brass Swivel Nut",
          "Wall bracket",
        ],
        config: [
          "Soft Spray with max 4 lpm Water Flow Limitation",
          "Alternative Wall Bracket",
          "1.2m double locked chrome plated Stainless Steel Bidet Hose",
          "1.2m Anti-Theft Bidet Hose",
        ],
        code: "F597",
      },
      {
        name: "Bidet Spray Set — ABS (Chrome/Brushed Nickel)",
        desc: "Bidet Spray Set (Shataf / Anal Spray) with holder and bidet hose.",
        specs: [
          "Finishes Chrome, Brushed Nickel",
          "ABS",
          "Aerator",
          "1.2m long PVC bidet hose with Brass Swivel Nut",
          "Wall bracket",
        ],
        config: [
          "Soft Spray with max 4 lpm Water Flow Limitation",
          "Alternative Wall Bracket",
          "1.2m double locked chrome plated Stainless Steel Bidet Hose",
          "1.2m Anti-Theft Bidet Hose",
        ],
        code: "F598",
        image: "/images/collection/bidet-spray/F598-1920w.png",
      },
    ],
  },

  /* ── ANGLE VALVE HOLDER ── */
  {
    id: "angle-valve-holder",
    title: "Angle Valve Holder",
    overline: "Bidet Spray Holders",
    products: [
      {
        name: "Bidet Spray Holder with Shut Off (Design 1)",
        desc: "Bidet Spray Holder with Shut Off Function.",
        specs: [
          "Finishes Chrome, Brushed Nickel",
          "Brass",
          "¼ turn (90°) Ceramic Cartridge",
          "G½ Connections (male)",
        ],
        config: [],
        code: "F599-1",
        image: "/images/collection/bidet-spray/F599-1-1920w.png",
        compliance: [],
        features: FEAT_HOLDER,
      },
      {
        name: "Bidet Spray Holder with Shut Off (Design 2)",
        desc: "Bidet Spray Holder with Shut Off Function.",
        specs: [
          "Finishes Chrome, Brushed Nickel",
          "Brass",
          "¼ turn (90°) Ceramic Cartridge",
          "G½ Connections (male)",
        ],
        config: [],
        code: "F599-2",
        image: "/images/collection/bidet-spray/F599-2-1920w.png",
        compliance: [],
        features: FEAT_HOLDER,
      },
    ],
  },

  /* ── ACCESSORIES ── */
  {
    id: "accessories",
    title: "Accessories",
    overline: "Bidet Spray Accessories",
    products: [
      {
        name: "Anti-Theft Bidet Hose",
        desc: "Anti-Theft Bidet Hose Solution for the Public Restroom.",
        specs: [
          "Finishes Chrome, Silver, Stainless Steel",
          "PVC Hose",
          "Brass Nuts",
          "Conical and Hex Sleeve Nuts Protect Theft",
          "Special Mounting Tool to tighten to the Bidet Sprayer and the Hose to the Angle Valve",
        ],
        config: [],
        code: "BSS",
        image: "/images/collection/bidet-spray/BSS-1920w.png",
        compliance: [],
        features: FEAT_1YR,
      },
    ],
  },
];
