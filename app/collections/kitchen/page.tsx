"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function KitchenCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "KITCHEN",
        title: "Kitchen",
        titleAccent: "Collection",
        description:
          "Premium kitchen sinks, faucets, taps, and accessories — from all-in-one integrated solutions to economy undermount sinks, engineered for durability, hygiene, and modern kitchen design.",
        verticalLabel: "KITCHEN / Sinks & Faucets",
        collectionSlug: "kitchen",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
