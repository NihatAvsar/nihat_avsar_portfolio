import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Muhammed Nihat Avşar | Yazılım Mühendisi";
  const description = "Muhammed Nihat Avşar'ın yazılım mühendisliği portfolyosu. Web geliştirme, yapay zeka ve veri odaklı projeler.";

  return {
    metadataBase,
    title,
    description,
    openGraph: { title, description, images: [{ url: "/nihat-avsar.jpeg", width: 1200, height: 1600, alt: "Muhammed Nihat Avşar" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/nihat-avsar.jpeg"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<Analytics /></body></html>;
}
