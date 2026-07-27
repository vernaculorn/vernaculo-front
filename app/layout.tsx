import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navigation/navbar";
import Footer from "./ui/footer";
import { inter } from "./ui/fonts";
import { ReactDOM } from "react";

export const metadata: Metadata = {
  title: {
    default: "Projeto Vernáculo | Arte e Artefato Popular do RN",
    template: "%s | Projeto Vernáculo",
  },
  description:
    "Arte e artefato popular do Rio Grande do Norte: preservação, estudo, divulgação e promoção da criação vernacular potiguar.",
  metadataBase: new URL("https://vernaculo.ufrn.br"),
  openGraph: {
    title: "Projeto Vernáculo | Arte e Artefato Popular do RN",
    description:
      "Arte e artefato popular do Rio Grande do Norte: preservação, estudo, divulgação e promoção da criação vernacular potiguar.",
    url: "https://vernaculo.ufrn.br",
    siteName: "Projeto Vernáculo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeto Vernáculo | Arte e Artefato Popular do RN",
    description:
      "Arte e artefato popular do Rio Grande do Norte: preservação, estudo, divulgação e promoção da criação vernacular potiguar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        <main className="p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
