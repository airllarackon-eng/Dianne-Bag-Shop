import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton/ScrollToTopButton";
import layoutStyles from "./layout.module.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foundrylane.studio"),
  title: {
    default: "Foundry Lane",
    template: "%s | Foundry Lane",
  },
  description:
    "Foundry Lane is a strategic digital studio shaping ambitious brands through editorial design, web systems, and launch campaigns.",
  openGraph: {
    title: "Foundry Lane",
    description:
      "Strategic creative studio for growth-stage brands, blending design direction, storytelling, and high-performance websites.",
    url: "https://foundrylane.studio",
    siteName: "Foundry Lane",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/f5f0e8/121212?text=Foundry+Lane+Studio",
        width: 1200,
        height: 630,
        alt: "Foundry Lane studio brand presentation cover",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        <div className={layoutStyles.siteShell}>
          <Navbar />
          <main id="main-content" className={layoutStyles.siteMain}>
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
