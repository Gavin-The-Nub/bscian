import { Settings2, ShieldCheck, Wrench } from "lucide-react";
import type { Section } from "../../components/CollectionLayout";

const FEAT = [
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "3 Year Warranty", icon: ShieldCheck },
];

export const COMPLIANCE: string[] = [];
export const FEATURES = FEAT;

export const sections: Section[] = [
  /* ── FITTINGS ── */
  {
    id: "fittings",
    title: "Fittings",
    overline: "Plumbing Fittings",
    products: [
      {
        name: "Floor Drainer",
        desc: "Floor Drainer Solutions — Square, Triangle or Linear.",
        specs: [
          "Finishes Brushed, Chrome",
          "Stainless Steel 304",
          "Surface Treatment after Welding (Passivation & Pickling)",
          "Odor Protection",
          "Ø50mm Discharge Pipe",
        ],
        config: [
          "Material Thickness 0.6 – 1.0mm",
          "Material Brass, Stainless Steel 201",
          "100 x 100mm",
          "120 x 120mm",
          "150 x 150mm",
          "70 - 100 x 300 - 3000mm",
          "Triangle / Corner Solution",
          "With Tile Insert",
          "Horizontal Discharge Pipe Connection",
          "With Levelling Feet",
          "Extensive Grate Cover Selection",
        ],
        code: "FFD",
        image: "/images/collection/fittings/FFD-1920w.png",
      },
      {
        name: "Connection Hose (Supply Hose)",
        desc: "The standard hose with EPDM inliner offers a flexible connection between the water supply network and any type of faucet.",
        specs: [
          "Length 300, 450, 600mm",
          'Inlet Connections (1/2", 3/8")',
          'Outlet Connections (M8, M10, 1/2")',
        ],
        config: [
          "WRAS certified",
          "DVWG certified",
        ],
        code: "FSH",
        image: "/images/collection/fittings/FSH-1920w.png",
      },
      {
        name: "Angle Valves",
        desc: 'Angle Valves with G½" Single or Double Outlet in Brass, Zinc, Stainless Steel and ABS.',
        specs: [
          "Finishes Chrome, Stainless Steel",
          "Brass, Stainless Steel, Zinc, ABS",
          "¼ turn ceramic head valve",
          "G½ connections",
          "Escutcheon",
        ],
        config: [
          "Double Outlet",
          "Compression Valve",
          "Handle Brass, Zinc or ABS",
          "Angle Valve Set includes Supply Hose",
        ],
        code: "FAV",
        image: "/images/collection/fittings/FAV-1920w.png",
      },
      {
        name: "P-Trap",
        desc: "P-Trap for Washbasin, Kitchen Sink or Bathtub application.",
        specs: [
          "Finishes Chrome, Mirror Polished, Brushed, White, PVD Finishes",
          "Bottle P-Trap, S-Trap, P-Trap, Floor Discharge",
          "Brass, Stainless Steel 304 or 201, ABS, PP",
          "Includes Rubber Plug",
        ],
        config: [],
        code: "FPT",
        image: "/images/collection/fittings/FPT-1920w.png",
      },
      {
        name: "Waste Drainer",
        desc: "Waste Drainer for Washbasin, Kitchen Sink or Bathtub application.",
        specs: [
          "Finishes Chrome, Matt Black, PVD Coated, Mirror Polished",
          "Push Pop Up, Lever Rod Pop Up, Flip Top or Rubber Plug",
          "Brass, Stainless Steel (201 or 304), ABS, PP",
          "With (Slotted) or Without Overflow Window",
          "Full Cap",
          '1¼" or 1½" connection',
          "Kitchen sink diameter 90, 110 or 113mm",
        ],
        config: [],
        code: "FWD",
        image: "/images/collection/fittings/FWD-1920w.png",
      },
    ],
  },
];
