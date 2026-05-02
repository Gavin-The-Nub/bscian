import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore BSC's full product range — S2 faucets, LINE taps, SUS stainless steel, shower systems, sensor solutions, kitchen and bathroom collections. Engineered in Germany & Denmark.",
  openGraph: {
    title: "BSC Collections",
    description:
      "Faucets, taps, showers, kitchen and bathroom products. German-Danish engineering.",
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
