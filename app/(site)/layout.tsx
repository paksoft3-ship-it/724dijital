import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getSiteData } from "@/lib/data";
import { GoogleTagManager } from '@next/third-parties/google';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "724dijital | Modern Yazılım ve Dijital Ajans Çözümleri",
    template: "%s | 724dijital"
  },
  description: "KOBİ'ler için premium yazılım geliştirme, SEO, dijital pazarlama ve kurumsal kimlik çözümleri. 7/24 yanınızdayız.",
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://724dijital.com',
    siteName: '724dijital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '724dijital - Modern Yazılım ve Dijital Ajans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@724dijital',
    creator: '@724dijital',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteData = await getSiteData();

  return (
    <html lang="tr">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body
        className={`${manrope.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header data={siteData} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer data={siteData} />
        <WhatsAppButton number={siteData.contact.whatsapp} />
      </body>
    </html>
  );
}
