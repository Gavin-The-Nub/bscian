"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function BidetSprayCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "BIDET",
        title: "Bidet Spray",
        titleAccent: "Collection",
        description:
          "Complete bidet spray solutions including ceramic mixer sets, stainless steel sprayers, angle valve holders, and anti-theft accessories — engineered for hygiene, durability, and easy installation.",
        verticalLabel: "BIDET / Spray",
        collectionSlug: "bidet-spray",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
