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
import type { Product, Section } from "../components/CollectionLayout";

export interface CollectionMeta {
  slug: string;
  title: string;
  titleAccent: string;
  sections: Section[];
  compliance: string[];
  features: { label: string; icon: string }[];
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
