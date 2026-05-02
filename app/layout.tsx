import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bsundc.com"),
  title: {
    default: "BSC — Premium Bathroom, Kitchen & Building Products",
    template: "%s · BSC",
  },
  description:
    "Engineered in Germany & Denmark. BSC delivers premium faucets, fixtures, and sanitary products that unite precision engineering with refined design for residential and commercial spaces across Southeast Asia.",
  applicationName: "BSC",
  authors: [{ name: "Bastian Schaefer Consulting" }],
  openGraph: {
    title: "BSC — Engineered Precision, Designed Beauty",
    description:
      "Premium bathroom, kitchen & building products. German-Danish engineering. Trusted across Southeast Asia.",
    type: "website",
    siteName: "BSC",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSC — Engineered Precision, Designed Beauty",
    description:
      "Premium bathroom, kitchen & building products. German-Danish engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}

        {/* Paper noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Editorial grid lines — desktop only */}
        <div className="hidden lg:block pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="grid-line" style={{ left: "8.33%" }} />
          <div className="grid-line" style={{ left: "33.33%" }} />
          <div className="grid-line" style={{ left: "66.66%" }} />
          <div className="grid-line" style={{ left: "91.66%" }} />
        </div>
      </body>
    </html>
  );
}
