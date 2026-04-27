import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "National Park Service — Find Your Wild",
  description:
    "Discover, plan, and explore America's national parks with a smarter, voice-first experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="topo-bg min-h-screen antialiased">{children}</body>
    </html>
  );
}
