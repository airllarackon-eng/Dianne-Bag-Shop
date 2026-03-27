import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton/ScrollToTopButton";
import layoutStyles from "./layout.module.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ornaluxe.com"),
  title: {
    default: "OrnaLuxe",
    template: "%s | OrnaLuxe",
  },
  description:
    "OrnaLuxe is a premium lifestyle and accessories brand curating luxury bags and statement essentials for modern professionals.",
  openGraph: {
    title: "OrnaLuxe",
    description:
      "Explore OrnaLuxe collections of premium bags and refined accessories designed for confidence, elegance, and timeless style.",
    url: "https://ornaluxe.com",
    siteName: "OrnaLuxe",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/f3eee5/1a1713?text=OrnaLuxe+Premium+Accessories",
        width: 1200,
        height: 630,
        alt: "OrnaLuxe premium accessories brand cover with editorial styling",
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
      className={`${inter.variable} ${playfair.variable}`}
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
