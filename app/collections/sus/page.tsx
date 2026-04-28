"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function SUSCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "SUS",
        title: "SUS",
        titleAccent: "Collection",
        description:
          "Premium faucets and fixtures crafted from Stainless Steel 304 — combining durability, hygiene, and a timeless brushed finish for modern living spaces.",
        verticalLabel: "SUS / Stainless Steel",
        collectionSlug: "sus",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
