"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function BathroomCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "BATHROOM",
        title: "Bathroom",
        titleAccent: "Collection",
        description:
          "Complete bathroom solutions including smart toilets, one-piece rimless WC, wall-mounted and countertop washbasins, and urinals — designed for modern hygiene, comfort, and elegant aesthetics.",
        verticalLabel: "BATHROOM / Sanitaryware",
        collectionSlug: "bathroom",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
