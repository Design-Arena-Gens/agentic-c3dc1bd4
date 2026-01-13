import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Drame Romantique",
  description: "Synthèse claire et révisée des caractéristiques du drame romantique."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
