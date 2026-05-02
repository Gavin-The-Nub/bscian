import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "BSC unites German-Danish engineering with refined design to deliver premium bathroom, kitchen, and building products across Southeast Asia. Learn about our standards, certifications, and approach.",
  openGraph: {
    title: "About BSC",
    description:
      "Engineered in Germany & Denmark. Trusted across Southeast Asia.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
