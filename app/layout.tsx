import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "@rainbow-me/rainbowkit/styles.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PharosGPT 🔥| The First AI Blockchain Explorer for Pharos Network ✨",
  description:
    "PharosGPT aims to simplify complex blockchain data for community and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HKTDSRP087"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HKTDSRP087');
  `}
      </Script>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
