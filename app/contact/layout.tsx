import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BSC for bathroom and kitchen product enquiries, partnership conversations, and project consultations. Response within 1–2 business days.",
  openGraph: {
    title: "Contact BSC",
    description:
      "Bathroom and kitchen product enquiries, partnerships, and project consultations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
