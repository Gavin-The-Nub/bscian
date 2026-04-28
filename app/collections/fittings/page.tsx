"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function FittingsCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "FITTINGS",
        title: "Fittings",
        titleAccent: "Collection",
        description:
          "Essential plumbing fittings including floor drainers, connection hoses, angle valves, P-traps, and waste drainers — precision-engineered in stainless steel and brass for reliable, long-lasting installations.",
        verticalLabel: "FITTINGS / Plumbing",
        collectionSlug: "fittings",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
