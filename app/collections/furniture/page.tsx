"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function FurnitureCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "FURNITURE",
        title: "Furniture",
        titleAccent: "Collection",
        description:
          "Premium bathroom cabinets with LED mirrors, countertop washbasins, and integrated faucet sets — available in various materials, finishes, and configurations for modern bathroom design.",
        verticalLabel: "FURNITURE / Cabinets",
        collectionSlug: "furniture",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
