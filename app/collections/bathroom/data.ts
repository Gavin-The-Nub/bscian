import { Droplets, Settings2, Wrench, ShieldCheck } from "lucide-react";
import type { Product, Section } from "../../components/CollectionLayout";

const FEAT_3YR = [
  { label: "Water Saving", icon: Droplets },
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "3 Year Warranty", icon: ShieldCheck },
];
const FEAT_BASIN = [
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "3 Year Warranty", icon: ShieldCheck },
];

export const COMPLIANCE: string[] = [];

export const FEATURES = FEAT_3YR;

export const sections: Section[] = [
  /* ── TOILET ── */
  {
    id: "toilet",
    title: "Toilet",
    overline: "WC Solutions",
    products: [
      {
        name: "Smart Toilet",
        desc: "Elevate your bathroom experience with a SMART toilet featuring powerful flushing, adjustable seat and water temperature, nozzle self-cleaning, wireless remote control, and night illumination. Designed for ultimate comfort and convenience, this toilet redefines modern hygiene.",
        specs: [
          "Size: 650x410x530mm, 220V 50/60Hz",
          "English instruction manual, neutral packaging",
          "Buttock Cleaning",
          "Feminine Wash",
          "Massage Cleaning",
          "Automatic Drying",
          "Toilet Cover Damping Slow-Down",
          "Automatic Flushing",
          "Powerful Flushing",
          "Automatic Deodorization",
          "Manual Flushing",
          "Wireless Remote Control",
          "Child Mode",
          "Seat Temperature Regulation",
          "Air Temperature Regulation",
          "Nozzle Self-Cleaning",
          "Night Illumination",
          "Water Temperature Adjustment",
          "Nozzle Adjustment, Pressure Adjustment",
          "Sensor Lid Opening",
          "Concealed Tank",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "S-Trap 300mm",
          "S-Trap 400mm",
        ],
        code: "ST-002",
      },
      {
        name: "One Piece Toilet (S-Trap 300/400mm)",
        desc: "One Piece Rimless Toilet with UF Seat Cover.",
        specs: [
          "Finishes White",
          "One Piece Toilet",
          "Rimless",
          "Dual Flush System (6/3 lpf)",
          "Siphonic or Washdown Discharge",
          "Urea Soft Closing Toilet Seat & Cover",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Colour Options",
          "S-Trap 300 / 400mm",
          "PP Soft Close Toilet Seat",
        ],
        code: "PCP-01",
      },
      {
        name: "One Piece Toilet (S-Trap 250mm)",
        desc: "One Piece Rimless Toilet with UF Seat Cover.",
        specs: [
          "Finishes White",
          "One Piece Toilet",
          "Rimless",
          "Dual Flush System (6/3 lpf)",
          "Siphonic or Washdown Discharge",
          "Urea Soft Closing Toilet Seat & Cover",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Colour Options",
          "S-Trap 250mm",
          "PP Soft Close Toilet Seat",
        ],
        code: "PCP-02",
      },
      {
        name: "One Piece Toilet (Compact)",
        desc: "One Piece Rimless Toilet with UF Seat Cover.",
        specs: [
          "Finishes White",
          "One Piece Toilet",
          "Rimless",
          "Dual Flush System (6/3 lpf)",
          "Siphonic or Washdown Discharge",
          "Urea Soft Closing Toilet Seat & Cover",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Colour Options",
          "S-Trap 300 / 400mm",
          "PP Soft Close Toilet Seat",
        ],
        code: "PCP-03",
      },
    ],
  },

  /* ── WASHBASIN ── */
  {
    id: "washbasin",
    title: "Washbasin",
    overline: "Basin Solutions",
    products: [
      {
        name: "Washbasin with Pedestal Option",
        desc: "Wall Mounted with Optional Half or Full Pedestal.",
        specs: [
          "Finishes White",
          "Wall Mounted Washbasin",
          "520 x 430mm",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Half Pedestal",
          "Full Pedestal",
          "Alternative Dimensions:",
          "360 x 410mm",
          "410 x 370mm",
          "565 x 440mm",
          "570 x 480mm",
          "620 x 460mm",
        ],
        code: "PCP-06",
        compliance: [],
        features: FEAT_BASIN,
      },
      {
        name: "Countertop Washbasin (Round)",
        desc: "Round Countertop Washbasin.",
        specs: [
          "White",
          "Countertop Washbasin Round",
          "Ø460 x 165 mm",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Alternative Dimensions",
          "Oval Design",
          "Without Tap Hole",
          "Colors",
          "Material Stainless Steel, Glass, Solid Surface",
        ],
        code: "PCP-11",
        compliance: [],
        features: FEAT_BASIN,
      },
      {
        name: "Countertop Washbasin (Rectangular)",
        desc: "Rectangular Countertop Washbasin.",
        specs: [
          "White",
          "Countertop Washbasin Rectangular",
          "410 x 310 x 120mm",
          "No Overflow Hole",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Alternative Dimensions",
          "Colors",
          "With Overflow Hole",
          "Without Tap Hole",
          "Semi Recess",
          "Material Stainless Steel, Solid Surface",
        ],
        code: "PCP-45",
        compliance: [],
        features: FEAT_BASIN,
      },
      {
        name: "Floorstanding Washbasin (Round)",
        desc: "Round Floorstanding Washbasin.",
        specs: [
          "White",
          "Ø400 x 830 mm",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Alternative Dimensions",
          "Rectangular Design",
          "Without Tap Hole",
          "Colors",
          "Material Stainless Steel, Glass, Solid Surface",
        ],
        code: "PCP-030",
        compliance: [],
        features: FEAT_BASIN,
      },
      {
        name: "Floor Standing Washbasin",
        desc: "Floor Standing Washbasin.",
        specs: [
          "White",
          "Floor Standing Washbasin",
          "Ø500 x 830mm",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Alternative Designs",
        ],
        code: "PCP-22",
        compliance: [],
        features: FEAT_BASIN,
      },
    ],
  },

  /* ── URINAL ── */
  {
    id: "urinal",
    title: "Urinal",
    overline: "Urinal Solutions",
    products: [
      {
        name: "Wall Hung Urinal",
        desc: "Wall Hung Urinal.",
        specs: [
          "White",
          "Wall Hung Urinal",
          "P-Trap 520mm S-Trap 90mm",
          "300 x 290 x 430mm",
          "Easy to Install",
          "Supplied with all Fittings",
        ],
        config: [
          "Alternative Designs",
        ],
        code: "PCP-044",
        compliance: [],
        features: FEAT_BASIN,
      },
      {
        name: "Wall Hung Urinal with Electronic Flush",
        desc: "Wall Hung Urinal with Integrated Electronic Flush System.",
        specs: [
          "White",
          "Wall Hung Urinal",
          "Top Water Inlet",
          "P-Trap 440mm S-Trap 90mm",
          "No need for Water Spreader",
          "Includes fixing screw set",
          "IR Sensor Flush Valve",
          "DC Power Supply",
        ],
        config: [
          "Standard Urinal excluding Sensor",
          "Alternative Designs",
        ],
        code: "PCP-046",
      },
    ],
  },
];
