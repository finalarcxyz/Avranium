import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ── Font ───────────────────────────────────────────────────────── */
// Inter is a variable font — no weight array needed.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* ── Metadata ───────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Avranium — 3D & VR Walkthroughs for Real Estate",
  description:
    "Photorealistic 3D walkthroughs and interactive VR experiences for real estate developers and architects across India. Help your clients sell before the building exists.",
  keywords: [
    "3D walkthrough",
    "VR walkthrough",
    "real estate visualization",
    "architectural visualization",
    "India",
    "Avranium",
  ],
  openGraph: {
    title: "Avranium — 3D & VR Walkthroughs for Real Estate",
    description:
      "Photorealistic 3D walkthroughs and interactive VR experiences for real estate developers and architects across India.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avranium — 3D & VR Walkthroughs for Real Estate",
    description:
      "Photorealistic 3D walkthroughs and interactive VR experiences for real estate developers and architects across India.",
  },
};

/* ── Root layout ────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
