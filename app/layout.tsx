import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivacolor - Descubre tu manera",
  description: "Color, funcionalidad e innovación para tu industria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
