"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function ShowerCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "SHOWER",
        title: "Shower",
        titleAccent: "Collection",
        description:
          "Premium concealed and exposed shower systems, thermostatic valves, and accessories — engineered for precise temperature control, versatile installations, and luxurious showering experiences.",
        verticalLabel: "SHOWER / Systems",
        collectionSlug: "shower",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
