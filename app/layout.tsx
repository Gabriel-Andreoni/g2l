import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";

const inter = Inter({
  weight: ['300', '400', '500', '700', "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "G2L - Desenvolvimento de Sites e Aplicativos",
  description: "Desenvolvimento de sites e aplicativos para empresas e profissionais liberais. Criação de sites, lojas virtuais e aplicativos para Android e iOS.",
  keywords: "desenvolvimento de sites, desenvolvimento de aplicativos, criação de sites, criação de aplicativos, criação de lojas virtuais, criação de aplicativos para Android, criação de aplicativos para iOS",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://g2l.tech",
    title: "G2L - Desenvolvimento de Sites e Aplicativos",
    description: "Desenvolvimento de sites e aplicativos para empresas e profissionais liberais. Criação de sites, lojas virtuais e aplicativos para Android e iOS.",
    images: [
      {
        url: "https://g2l.tech/g2l-logo.png",
        width: 1200,
        height: 630,
        alt: "Imagem de capa do site G2L - Desenvolvimento de Sites e Aplicativos",
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
