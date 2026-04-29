import { Droplets, Settings2, Wrench, ShieldCheck } from "lucide-react";
import type { Product, Section } from "../../components/CollectionLayout";

const D = "LINE Tap Collection Washbasin, Kitchen, Shower taps available in Chrome (other colors on request)";

export const COMPLIANCE = [
  "Chrome surface: pass 24h Acid Salt Spray Test",
  "Low Lead Brass",
  "WRAS",
  "LEED",
  "WELS 3 Ticks PPP",
];

export const FEATURES = [
  { label: "Water Saving", icon: Droplets },
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "3 Year Warranty", icon: ShieldCheck },
];

const ph = (code: string): Product => ({
  name: "",
  desc: "",
  specs: [],
  config: [],
  code,
  placeholder: true,
});

export const sections: Section[] = [
  {
    id: "washbasin",
    title: "Washbasin",
    overline: "Basin Taps",
    products: [
      {
        name: "Deck Washbasin Tap (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Stainless Steel Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Aerator unrestricted",
        ],
        config: [
          "Tap 3.8 lpm / 1.0 gpm",
          "Tap 1.9 lpm / 0.5 gpm",
          "Extended Rehab / Hospital Handle",
          "Brass Fixing Nut with Screws",
          "Fittings (drainer, p-trap, angle valve, connection hose)",
        ],
        code: "F005",
      },
      ph("F006"),
      {
        name: "Deck Bib Tap (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Body Brass HP59",
          "Brass Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Aerator unrestricted",
        ],
        config: [
          "Tap 1.0 gpm / 3.8 lpm",
          "Brass Fixing Nut with Screws",
          "Fittings (drainer, p-trap, angle valve, connection hose)",
        ],
        code: "F022",
      },
      {
        name: "Wall Bib Tap (cold)",
        desc: D,
        specs: [
          "Surface Finish Chrome",
          "Brass HP59 Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Aerator unrestricted",
        ],
        config: [
          "Bib Tap 0.5 gpm / 1.9 lpm",
          "Bib Tap 1.0 gpm / 3.8 lpm",
          "Fittings (drainer, p-trap)",
        ],
        code: "F001",
      },
      ph("F002"),
      {
        name: "Wall Bib Tap (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass HP59 Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Aerator unrestricted",
        ],
        config: [
          "Tap 3.8 lpm / 1.0 gpm",
          "Tap 1.9 lpm / 0.5 gpm",
          "Extended Rehab / Hospital Handle",
          "Fittings (drainer, p-trap)",
        ],
        code: "F007",
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    overline: "Kitchen Taps",
    products: [
      ph("F008"),
      ph("F009"),
      ph("F010"),
      ph("F012"),
      {
        name: "Wall Bib Tap (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass HP59 Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Aerator unrestricted",
        ],
        config: [
          "Tap 3.8 lpm / 1.0 gpm",
          "Tap 1.9 lpm / 0.5 gpm",
          "Extended Rehab / Hospital Handle",
          "Fittings (drainer, p-trap)",
        ],
        code: "F007-K",
      },
      ph("F013"),
      {
        name: "Wall Kitchen Tap (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass HP59 Body",
          "360° Swivel Spout",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Aerator unrestricted",
        ],
        config: [
          "Tap 3.8 lpm / 1.0 gpm",
        ],
        code: "F042",
      },
    ],
  },
  {
    id: "bath-shower",
    title: "Bath & Shower",
    overline: "Shower Solutions",
    products: [
      ph("F015"),
      {
        name: "Shower Solution (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass HP59 Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Hand Shower 1 function",
          "Wall Bracket 2 Positions",
          "1.5m Shower Hose",
        ],
        config: [
          "Hand Shower 2.0 gpm / 7.6 lpm",
          "Hand Shower 1.5 gpm / 5.7 lpm",
          "Wall Bracket",
          "Hand Shower white",
          "Hand Shower 3 function",
          "Wall Bracket Adjustable",
          "Riser Rail",
          "PVC Shower Hose",
        ],
        code: "F016",
      },
      {
        name: "Shower Solution (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass HP59 Body",
          "Zinc Handle",
          "¼ turn (90° LEFT or RIGHT) Ceramic Diverter Cartridge",
          "Hand Shower 1 function",
          "Wall Bracket 2 positions",
          "1.5m Shower Hose",
        ],
        config: [
          "Hand Shower 2.0 gpm / 7.6 lpm",
          "Hand Shower 1.5 gpm / 5.7 lpm",
          "Tap 1.0 gpm / 3.8 lpm",
          "Hand Shower 3 function",
          "Wall Bracket Adjustable",
          "Riser Rail",
          "PVC Shower Hose",
        ],
        code: "F017",
      },
      ph("F017g"),
      {
        name: "Shower Solution (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass HP59 Body",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Hand Shower 1 function",
          "Aerator unrestricted",
          "Wall Bracket 2 Positions",
          "1.5m Shower Hose",
        ],
        config: [
          "Hand Shower 2.0 gpm / 7.6 lpm",
          "Hand Shower 1.5 gpm / 5.7 lpm",
          "Tap 1.0 gpm / 3.8 lpm",
          "Hand Shower white",
          "Hand Shower 3 Functions",
          "Wall Bracket Adjustable",
          "Riser Rail",
          "PVC Shower Hose",
        ],
        code: "F018",
      },
      {
        name: "Shower Solution (cold)",
        desc: D,
        specs: [
          "Body Brass HP59, chrome plated",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Flow Streamer Tap Outlet",
          "Escutcheon",
          "Shower Arm",
          "Head Shower 1 function",
        ],
        config: [
          "Head Shower 2.0 gpm / 7.6 lpm",
          "Head Shower 1.5 gpm / 5.7 lpm",
          "Tap with Aerator 1.0 gpm / 3.8 lpm",
          "Head Shower 3 function",
        ],
        code: "F019",
      },
      {
        name: "Shower Solution (cold)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Zinc Handle",
          "¼ turn (90°) Ceramic Cartridge",
          "Escutcheon",
          "Shower Arm",
          "Head Shower 1 function",
        ],
        config: [
          "Head Shower 2.0 gpm / 7.6 lpm",
          "Head Shower 1.5 gpm / 5.7 lpm",
          "Head Shower 3 function",
        ],
        code: "F020",
      },
      ph("F021"),
      ph("F095"),
    ],
  },
];
