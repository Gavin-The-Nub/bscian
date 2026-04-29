import {
  sections as s2Sections,
  COMPLIANCE as s2Compliance,
  FEATURES as s2Features,
} from "./s2/data";
import {
  sections as lineSections,
  COMPLIANCE as lineCompliance,
  FEATURES as lineFeatures,
} from "./line/data";
import {
  sections as susSections,
  COMPLIANCE as susCompliance,
  FEATURES as susFeatures,
} from "./sus/data";
import {
  sections as showerSections,
  COMPLIANCE as showerCompliance,
  FEATURES as showerFeatures,
} from "./shower/data";
import {
  sections as kitchenSections,
  COMPLIANCE as kitchenCompliance,
  FEATURES as kitchenFeatures,
} from "./kitchen/data";
import {
  sections as selfClosingSections,
  COMPLIANCE as selfClosingCompliance,
  FEATURES as selfClosingFeatures,
} from "./self-closing/data";
import {
  sections as sensorSections,
  COMPLIANCE as sensorCompliance,
  FEATURES as sensorFeatures,
} from "./sensor/data";
import {
  sections as bathroomSections,
  COMPLIANCE as bathroomCompliance,
  FEATURES as bathroomFeatures,
} from "./bathroom/data";
import {
  sections as furnitureSections,
  COMPLIANCE as furnitureCompliance,
  FEATURES as furnitureFeatures,
} from "./furniture/data";
import {
  sections as bidetSections,
  COMPLIANCE as bidetCompliance,
  FEATURES as bidetFeatures,
} from "./bidet-spray/data";
import {
  sections as fittingsSections,
  COMPLIANCE as fittingsCompliance,
  FEATURES as fittingsFeatures,
} from "./fittings/data";
import type { Product, Section } from "../components/CollectionLayout";

export interface CollectionMeta {
  slug: string;
  title: string;
  titleAccent: string;
  sections: Section[];
  compliance: string[];
  features: { label: string; icon: React.ElementType }[];
}

const collections: Record<string, CollectionMeta> = {
  s2: {
    slug: "s2",
    title: "S2",
    titleAccent: "Collection",
    sections: s2Sections,
    compliance: s2Compliance,
    features: s2Features,
  },
  line: {
    slug: "line",
    title: "LINE",
    titleAccent: "Collection",
    sections: lineSections,
    compliance: lineCompliance,
    features: lineFeatures,
  },
  sus: {
    slug: "sus",
    title: "SUS",
    titleAccent: "Collection",
    sections: susSections,
    compliance: susCompliance,
    features: susFeatures,
  },
  shower: {
    slug: "shower",
    title: "Shower",
    titleAccent: "Collection",
    sections: showerSections,
    compliance: showerCompliance,
    features: showerFeatures,
  },
  kitchen: {
    slug: "kitchen",
    title: "Kitchen",
    titleAccent: "Collection",
    sections: kitchenSections,
    compliance: kitchenCompliance,
    features: kitchenFeatures,
  },
  "self-closing": {
    slug: "self-closing",
    title: "Self Closing",
    titleAccent: "Taps & Flush Valves",
    sections: selfClosingSections,
    compliance: selfClosingCompliance,
    features: selfClosingFeatures,
  },
  sensor: {
    slug: "sensor",
    title: "Sensor",
    titleAccent: "Collection",
    sections: sensorSections,
    compliance: sensorCompliance,
    features: sensorFeatures,
  },
  bathroom: {
    slug: "bathroom",
    title: "Bathroom",
    titleAccent: "Collection",
    sections: bathroomSections,
    compliance: bathroomCompliance,
    features: bathroomFeatures,
  },
  furniture: {
    slug: "furniture",
    title: "Furniture",
    titleAccent: "Collection",
    sections: furnitureSections,
    compliance: furnitureCompliance,
    features: furnitureFeatures,
  },
  "bidet-spray": {
    slug: "bidet-spray",
    title: "Bidet Spray",
    titleAccent: "Collection",
    sections: bidetSections,
    compliance: bidetCompliance,
    features: bidetFeatures,
  },
  fittings: {
    slug: "fittings",
    title: "Fittings",
    titleAccent: "Collection",
    sections: fittingsSections,
    compliance: fittingsCompliance,
    features: fittingsFeatures,
  },
};

export interface ProductLookupResult {
  product: Product;
  section: Section;
  collection: CollectionMeta;
}

export function getProduct(
  collectionSlug: string,
  productCode: string
): ProductLookupResult | null {
  const collection = collections[collectionSlug];
  if (!collection) return null;

  const decodedCode = decodeURIComponent(productCode);

  for (const section of collection.sections) {
    const product = section.products.find(
      (p) => p.code === decodedCode
    );
    if (product) {
      return { product, section, collection };
    }
  }
  return null;
}

export function getAllProductCodes(): {
  collection: string;
  code: string;
}[] {
  const results: { collection: string; code: string }[] = [];
  for (const [slug, col] of Object.entries(collections)) {
    for (const section of col.sections) {
      for (const product of section.products) {
        results.push({ collection: slug, code: product.code });
      }
    }
  }
  return results;
}
