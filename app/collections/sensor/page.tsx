"use client";

import CollectionLayout from "../../components/CollectionLayout";
import { sections, COMPLIANCE, FEATURES } from "./data";

export default function SensorCollectionPage() {
  return (
    <CollectionLayout
      config={{
        bgText: "SENSOR",
        title: "Sensor",
        titleAccent: "Collection",
        description:
          "Automatic infrared sensor taps, soap dispensers, and flush valves — engineered for hygiene, water savings, and vandal resistance in commercial and public installations.",
        verticalLabel: "SENSOR / Touchless",
        collectionSlug: "sensor",
        sections,
        compliance: COMPLIANCE,
        features: FEATURES,
      }}
    />
  );
}
