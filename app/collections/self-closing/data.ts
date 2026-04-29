import { Droplets, Settings2, Wrench, ShieldCheck } from "lucide-react";
import type { Product, Section } from "../../components/CollectionLayout";

const D = "Automatic Closing / Push Taps Washbasin, Kitchen, Shower in Chrome (other colors on request)";

const ph = (code: string): Product => ({
  name: "",
  desc: "",
  specs: [],
  config: [],
  code,
  placeholder: true,
});

const SC_COMPLIANCE = [
  "Chrome surface: pass 24h Acid Salt Spray Test",
  "WRAS",
  "LEED",
  "WELS 3 Ticks PPP",
];
const SC_COMPLIANCE_BASIC = [
  "Chrome surface: pass 24h Acid Salt Spray Test",
  "WRAS",
];
const WC_COMPLIANCE = [
  "Chrome surface: pass 24h Acid Salt Spray Test",
  "WRAS",
  "LEED",
  "MS2545:2022 Type 1",
  "ASME 112.19.5:2011",
];

export const COMPLIANCE = SC_COMPLIANCE;

export const FEATURES = [
  { label: "Water Saving", icon: Droplets },
  { label: "Precision Engineering", icon: Settings2 },
  { label: "Easy Installation", icon: Wrench },
  { label: "1 Year Warranty", icon: ShieldCheck },
];

export const sections: Section[] = [
  /* ── WASHBASIN - DECK MOUNTED ── */
  {
    id: "washbasin-deck",
    title: "Washbasin — Deck Mounted",
    overline: "Self Closing Deck Taps",
    products: [
      {
        name: "Self Closing Tap Washbasin (Hidden Aerator)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Soft touch magnetic cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
          "Secure tight mounting nut with screws",
          "Hidden Aerator max 1.9 lpm / 0.5 gpm",
          "Rub-It clean function",
          "Vandal proof",
          "Includes 450mm Connection Hose G½ x G½",
        ],
        config: [
          "1.0 lpm with Spray Aerator",
          "5.7 lpm with Aerator Angle Adjustment",
          "Fittings (Drainer, P-Trap, Angle Valve, Connection Hose)",
        ],
        code: "F200",
      },
      {
        name: "Self Closing Tap Washbasin (Unrestricted Aerator)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Soft touch magnetic cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
          "Secure tight mounting nut with screws",
          "Aerator unrestricted",
          "Includes 450mm Connection Hose G½ x G½",
        ],
        config: [
          "1.0 lpm with Spray Aerator",
          "Fittings (Drainer, P-Trap, Angle Valve, Connection Hose)",
        ],
        code: "F204",
      },
      {
        name: "Self Closing Tap Washbasin (Vandal Proof)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Soft touch magnetic cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
          "Secure tight mounting nut with screws",
          "Hidden Aerator max 1.9 lpm / 0.5 gpm",
          "Rub-It clean function",
          "Vandal proof",
          "Includes 450mm Connection Hose G½ x G½",
        ],
        config: [
          "1.0 lpm with Spray Aerator",
          "Fittings (Drainer, P-Trap, Angle Valve, Connection Hose)",
        ],
        code: "F4210",
      },
      {
        name: "Self Closing Tap Washbasin (Standard Aerator)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Soft touch magnetic cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
          "Secure tight mounting nut with screws",
          "Aerator max 1.9 lpm / 0.5 gpm",
          "Includes 450mm Connection Hose G½ x G½",
        ],
        config: [
          "1.0 lpm with Spray Aerator",
          "Fittings (Drainer, P-Trap, Angle Valve, Connection Hose)",
        ],
        code: "F4218",
      },
      ph("F213"),
    ],
  },

  /* ── WASHBASIN - WALL MOUNTED ── */
  {
    id: "washbasin-wall",
    title: "Washbasin — Wall Mounted",
    overline: "Self Closing Wall Taps",
    products: [
      {
        name: "Self Closing Tap Wall Mounted (Hidden Aerator)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Soft touch magnetic cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
          "Hidden Aerator max 1.9 lpm / 0.5 gpm",
          "Rub-It clean function",
          "Vandal proof",
        ],
        config: [
          "1.0 lpm with Spray Aerator",
          "Fittings (Drainer, P-Trap)",
          "Short (113mm) or Long (194mm) Reach",
        ],
        code: "F4225",
      },
      {
        name: "Self Closing Tap Wall Mounted",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Soft touch magnetic cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
        ],
        config: [
          "1.0 lpm with Spray Aerator",
          "Fittings (Drainer, P-Trap)",
        ],
        code: "F4222",
      },
    ],
  },

  /* ── FOOT ACTIVATED ── */
  {
    id: "foot-activated",
    title: "Foot Activated",
    overline: "Foot Operated Solutions",
    products: [
      {
        name: "Self Closing Tap Foot Activated",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Brass Actuator",
          "Non Slip Pedal",
          "G½ Connections",
        ],
        config: [
          "Deck Mounted Spout",
          "Wall Mounted Spout",
          "Urinal Fittings",
        ],
        code: "SCT001",
        compliance: SC_COMPLIANCE_BASIC,
      },
      {
        name: "Flush Valve WC Step Time Delayed / Foot Activated",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Brass Actuator",
          "Non Slip Pedal",
          "G1\" or G¾\" Connections",
        ],
        config: [
          "Push time delayed",
          "Auxiliary Piping",
          "Concealed Valve",
        ],
        code: "SCT002",
        compliance: SC_COMPLIANCE_BASIC,
      },
    ],
  },

  /* ── SHOWER ── */
  {
    id: "shower",
    title: "Shower",
    overline: "Self Closing Shower Taps",
    products: [
      {
        name: "Self Closing Tap Shower",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Stainless Steel Escutcheon",
          "Soft Touch Magnetic Cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 13 ± 2sec",
        ],
        config: [
          "9.5 lpm (2.5 gpm)",
          "7.9 lpm (2.0 gpm)",
          "5.7 lpm (1.5 gpm)",
          "Shower Arm with HEAD or Overhead Shower",
          "Ceiling Pipe and Overhead Shower",
        ],
        code: "F4209",
      },
      {
        name: "Self Closing Tap Shower (Concealed)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Stainless Steel Escutcheon",
          "Soft Touch Magnetic Cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 13 ± 2sec",
        ],
        config: [
          "9.5 lpm (2.5 gpm)",
          "7.9 lpm (2.0 gpm)",
          "5.7 lpm (1.5 gpm)",
          "Shower Arm with HEAD or Overhead Shower",
          "Ceiling Pipe and Overhead Shower",
        ],
        code: "F4227",
      },
      {
        name: "Self Closing Tap Shower (Pipe Mount)",
        desc: D,
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Stainless Steel Escutcheon",
          "Soft Touch Magnetic Cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 13 ± 2sec",
        ],
        config: [
          "9.5 lpm (2.5 gpm)",
          "7.9 lpm (2.0 gpm)",
          "5.7 lpm (1.5 gpm)",
          "Shower Pipe with HEAD or Overhead Shower",
          "Ceiling Pipe and Overhead Shower",
        ],
        code: "F4208",
      },
    ],
  },

  /* ── URINAL ── */
  {
    id: "urinal",
    title: "Urinal",
    overline: "Self Closing Urinal Valves",
    products: [
      {
        name: "Self Closing Valve Urinal",
        desc: "Self closing urinal flush valve with magnetic cartridge technology.",
        specs: [
          "Finishes Chrome",
          "Brass Body",
          "Zinc Handle",
          "Integrated Shut Off Valve",
          "Soft Touch Magnetic Cartridge",
          "Push pressure is less than 17.5N ≈ 1.8 kg",
          "Cycle Time Push Function 6 ± 2sec",
          "Flexible Ø14mm Inlet Pipe",
          "Rubber Plug with Escutcheon",
        ],
        config: [
          "< 1.0 lpf (liter per flush)",
          "< 0.5 lpf (liter per flush)",
          "Straight Ø14mm Inlet Pipe",
          "Angled Ø14mm Inlet Pipe",
          "Spreader for Urinal",
        ],
        code: "F220",
      },
    ],
  },

  /* ── WC ── */
  {
    id: "wc",
    title: "WC",
    overline: "Flush Valves",
    products: [
      {
        name: "Manual Flush Valve WC",
        desc: "Manual flush valve for WC installations.",
        specs: [
          "Finish Chrome",
          "Brass",
          "Includes all fittings",
          "G1 inlet pipe",
          "Ø38mm Outlet Pipe",
          "Vacuum Breaker",
          "Spud NPT1",
          "Flush Performance < 4.5 lpf / 1.19 gpf @ 0.25 MPa",
        ],
        config: [
          "< 5 lpf (liter per flush) @ 0.25 MPa",
          "< 6 lpf (liter per flush) @ 0.25 MPa",
          "Outlet Pipe Length 220mm",
          "Outlet Pipe Length 580mm",
          "Foot Activation",
          "90° Bended Outlet Pipe",
        ],
        code: "F216C",
        compliance: WC_COMPLIANCE,
      },
      {
        name: "Manual Flush Valve WC with Full and Half Flush",
        desc: "Dual flush valve for WC installations with full and half flush options.",
        specs: [
          "Finish Chrome",
          "Brass",
          "Includes all fittings",
          "G1 inlet pipe",
          "Ø38mm Outlet Pipe",
          "Vacuum Breaker",
          "Spud NPT1",
          "Full Flush < 4.5 lpf / 1.19 gpf @ 0.25 MPa",
          "Half Flush < 3.0 lpf / 0.66 gpf @ 0.25 MPa",
        ],
        config: [
          "< 5 lpf (liter per flush) Full Flush @ 0.25 MPa",
          "< 6 lpf (liter per flush) Full Flush @ 0.25 MPa",
          "Outlet Pipe Length 220mm",
          "Outlet Pipe Length 580mm",
        ],
        code: "F216C-DUAL",
        compliance: WC_COMPLIANCE,
      },
      {
        name: "Manual Flush Valve (Concealed) WC with Full and Half Flush",
        desc: "Concealed dual flush valve for WC installations.",
        specs: [
          "Finish Chrome",
          "Brass",
          "Includes all fittings",
          "G1 inlet pipe",
          "Ø38mm Outlet Pipe",
          "Vacuum Breaker",
          "Spud NPT1",
          "Full Flush < 6.0 lpf / 2.2 gpf @ 0.25 MPa",
          "Half Flush < 3.0 lpf / 0.66 gpf @ 0.25 MPa",
        ],
        config: [
          "< 5 lpf (liter per flush) Full Flush @ 0.25 MPa",
          "Chrome surface only TRIM Parts",
          "Full Flush Only",
          "Excluding Vacuum Breaker",
        ],
        code: "F240D",
        compliance: WC_COMPLIANCE,
      },
    ],
  },
];
