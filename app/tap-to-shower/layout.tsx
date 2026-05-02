import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tap-to-Shower Conversion",
  description:
    "Transform an existing tap into a full shower without major plumbing changes. BSC's Tap-to-Shower solution is engineered for fast, clean retrofits in homes, hotels, and rental properties.",
  openGraph: {
    title: "Tap-to-Shower by BSC",
    description:
      "Convert a tap into a shower without major plumbing changes. Engineered for fast, clean retrofits.",
  },
};

export default function TapToShowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
