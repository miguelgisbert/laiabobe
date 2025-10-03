import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laia Bobé - Intel·ligència Emocional",
  description:
    "Formadora en Intel·ligència Emocional, Docent i Coach. Ajudo a persones i equips a desenvolupar el seu potencial amb eines pràctiques i transformadores.",
  keywords: [
    "intel·ligència emocional",
    "coaching",
    "formació",
    "salut mental",
    "desenvolupament personal",
  ],
  authors: [{ name: "Laia Bobé" }],
  openGraph: {
    title: "Laia Bobé - Intel·ligència Emocional",
    description: "Formadora en Intel·ligència Emocional, Docent i Coach",
    url: "https://laiabobe.com",
    siteName: "Laia Bobé",
    locale: "ca_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
