"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function LINECollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "LINE",
        title: "LINE",
        titleAccent: "Collection",
        description:
          "Washbasin, kitchen, and shower taps available in Chrome — precision-engineered with brass construction and ceramic cartridges for reliable, long-lasting performance.",
        verticalLabel: "LINE / Taps",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
