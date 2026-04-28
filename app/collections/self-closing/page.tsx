"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function SelfClosingCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "SELF CLOSING",
        title: "Self Closing",
        titleAccent: "Taps & Flush Valves",
        description:
          "Automatic closing push taps, flush valves, and foot-activated solutions — engineered with soft touch magnetic cartridges for water savings, vandal resistance, and hygienic installations.",
        verticalLabel: "SELF CLOSING / Taps",
        collectionSlug: "self-closing",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
