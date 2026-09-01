import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shiva Garuda — ECE @ Berkeley",
  description:
    "ECE student at UC Berkeley working across hardware, machine learning, and full-stack systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlex.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background font-sans text-foreground">
        <div aria-hidden className="grain" />
        <div
          aria-hidden
          className="dot-grid pointer-events-none fixed inset-0 z-0 opacity-40"
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
