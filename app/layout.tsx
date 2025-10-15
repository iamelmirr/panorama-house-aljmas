import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNavProvider } from "@/contexts/MobileNavContext";
import { MobileNav } from "@/components/MobileNav";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.meta.title,
  description: SITE.meta.description,
  keywords: SITE.meta.keywords,
  metadataBase: new URL(SITE.meta.url),
  openGraph: {
    title: SITE.meta.title,
    description: SITE.meta.description,
    type: "website",
    url: SITE.meta.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.meta.ogImage,
        alt: SITE.tagline,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.meta.title,
    description: SITE.meta.description,
    images: [SITE.meta.ogImage],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${headingFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-brand-sand text-brand-charcoal">
        <LocaleProvider>
          <MobileNavProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileNav />
          </MobileNavProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
