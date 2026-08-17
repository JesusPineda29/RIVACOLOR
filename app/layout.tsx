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
  // data-scroll-behavior: Next 16 ya no anula el `scroll-behavior: smooth`
  // global durante las navegaciones; sin este atributo cada cambio de página
  // hace un scroll suave que atraviesa la página nueva y dispara todas las
  // animaciones de useInView antes de llegar arriba.
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
