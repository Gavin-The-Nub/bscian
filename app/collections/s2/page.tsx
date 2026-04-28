"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function S2CollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "S2",
        title: "S2",
        titleAccent: "Collection",
        description:
          "A harmonious fusion of design, functionality, versatility, and affordability — engineered for residential bathrooms and kitchens. Available in Chrome and Matt Black.",
        verticalLabel: "S2 / Faucets",
        collectionSlug: "s2",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
