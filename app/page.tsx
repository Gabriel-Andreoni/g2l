import { Metadata } from "next";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Prices from "./sections/Prices";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

export const metadata:Metadata = {
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

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Portfolio />
      <Testimonial />
      <Prices />
      <Footer />
    </div>
  );
}
