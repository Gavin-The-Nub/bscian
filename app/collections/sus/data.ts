import type { Product, Section } from "../../components/CollectionLayout";

const D = "SUS Faucet Series Washbasin, Kitchen, Shower Faucets made from Stainless Steel 304";

export const COMPLIANCE = ["WRAS", "LEED", "WELS 3 Ticks PPP"];

export const FEATURES = [
  { label: "Water Saving", icon: "💧" },
  { label: "Precision Engineering", icon: "⚙" },
  { label: "Easy Installation", icon: "🔧" },
  { label: "3 Year Warranty", icon: "🛡" },
];

export const sections: Section[] = [
  {
    id: "washbasin",
    title: "Washbasin",
    overline: "Basin Faucets & Taps",
    products: [
      {
        name: "Washbasin Mixer Faucet",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 casted body",
          "35mm Mixer Ceramic Cartridge",
          "450mm Connection Hoses",
        ],
        config: [
          "Faucet 1.0 gpm / 3.8 lpm",
          "Faucet 0.5 gpm / 1.9 lpm",
          "Fittings (Push Pop Up, P-Trap, Angle Valves)",
        ],
        code: "S020",
      },
      {
        name: "Vessel Mixer Faucet",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 extruded body",
          "35mm Mixer Ceramic Cartridge",
          "450mm Connection Hoses",
        ],
        config: [
          "Faucet 1.0 gpm / 3.8 lpm",
          "Faucet 0.5 gpm / 1.9 lpm",
          "Fittings (Push Pop Up, P-Trap, Angle Valves)",
        ],
        code: "S021",
      },
      {
        name: "Washbasin Tap (cold)",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 casted body",
          "¼ turn (90°) Ceramic Cartridge",
        ],
        config: [
          "Tap 1.0 gpm / 3.8 lpm",
          "Tap 0.5 gpm / 1.9 lpm",
          "Fittings (Push Pop Up, P-Trap, Angle Valve, Connection Hose)",
        ],
        code: "S020-C",
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    overline: "Kitchen Faucets",
    products: [
      {
        name: "Kitchen Mixer Faucet with Pull Out Spray",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 forged body",
          "35mm Ceramic Cartridge",
          "360° Swivel Spout",
          "Pull Out Sprayer with 2 Spray Modes",
          "600 mm Connection Hoses",
        ],
        config: [
          "Faucet 1.0 gpm / 3.8 lpm",
          "Faucet 0.5 gpm / 1.9 lpm",
          "Fittings (Angle Valves)",
        ],
        code: "S041",
      },
      {
        name: "Kitchen Mixer Faucet",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 forged body",
          "35mm Ceramic Cartridge",
          "360° Swivel Spout",
          "600 mm Connection Hoses",
        ],
        config: [
          "Faucet 1.5 gpm / 3.8 lpm",
          "Fittings (Angle Valves)",
        ],
        code: "S040",
      },
    ],
  },
  {
    id: "bath-shower",
    title: "Bath & Shower",
    overline: "Bath & Shower Solutions",
    products: [
      {
        name: "Shower Mixer Faucet with Hand Shower",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 casted body",
          "35mm Mixer Ceramic Cartridge",
          "Hand Shower 1 function",
          "1.5m Shower Hose",
          "Wall Bracket adjustable",
        ],
        config: [
          "Hand Shower 2.0 gpm / 7.6 lpm",
          "Hand Shower 3 function",
          "Shower Rail instead of Wall Bracket",
          "PVC Shower Hose",
          "Noise Reducer",
          "Back Check Valves",
        ],
        code: "S1161",
      },
      {
        name: "Bath Shower Mixer Faucet",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 casted body",
          "35mm Mixer Ceramic Cartridge",
          "Diverter Spout",
          "Tub Spout with High Flow Aerator > 20lpm",
          "Hand Shower 1 function",
          "1.5m Shower Hose",
          "Wall Bracket adjustable",
        ],
        config: [
          "Hand Shower 2.0 gpm / 7.6 lpm",
          "Shower Rail instead of Wall Bracket",
          "PVC Shower Hose",
          "Noise Reducer",
          "Back Check Valves",
        ],
        code: "S1181",
      },
      {
        name: "Exposed Bath Shower Solution",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 casted body",
          "35mm Mixer Ceramic Cartridge",
          "3 Way Diverter",
          "Height Adjustable Shower Pipe",
          "Swivel Tub Spout with High Flow Aerator > 20lpm",
          "Hand Shower 1 function",
          "1.5m Shower Hose",
          "Round 200mm Overhead Shower",
        ],
        config: [
          "Hand Shower 2.0 gpm / 7.6 lpm",
          "Overhead Shower 2.0 gpm / 7.6 lpm",
          "Extension Pipe",
          "PVC Shower Hose",
          "Noise Reducer",
          "Back Check Valves",
        ],
        code: "S023",
      },
      {
        name: "Concealed Bath Shower Mixer Faucet",
        desc: D,
        specs: [
          "Finish Brushed",
          "Stainless Steel 304 casted body",
          "35mm Mixer Ceramic Cartridge with Diverter",
          "Round 400mm Shower Arm",
          "Round 200mm Overhead Shower",
          "Tub Spout with High Flow Aerator > 20lpm",
        ],
        config: [
          "Overhead Shower 2.0 gpm / 7.6 lpm",
          "In Wall Installation Box",
          "Rectangular Trim Escutcheon",
          "Thermostatic Solution",
          "Square Shower Arm",
        ],
        code: "S1783",
      },
    ],
  },
];
