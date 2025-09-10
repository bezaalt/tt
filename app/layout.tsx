import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shark Wraps | Columbus’ Premium Car Wrap & Customization Shop",
  description: "High-end vinyl wraps, PPF, chrome deletes, wheel painting, starlight headliners, and ceramic coating in Columbus, Ohio.",
  openGraph: {
    title: "Shark Wraps",
    description: "Columbus’ Premium Car Wrap & Customization Shop",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
