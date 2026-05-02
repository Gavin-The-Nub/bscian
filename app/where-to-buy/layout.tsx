import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where to Buy",
  description:
    "Find BSC products through our authorised dealer network across Southeast Asia. Contact us directly for project quotations and trade enquiries.",
  openGraph: {
    title: "Where to Buy BSC Products",
    description:
      "Authorised dealer network across Southeast Asia. Contact us for project quotations.",
  },
};

export default function WhereToBuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
