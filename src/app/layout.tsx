import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marina Ziembar — Sr Frontend Engineer & Creative Technologist",
  description:
    "Desarrolladora frontend con formación en Diseño Gráfico y UX/UI, en Buenos Aires. React, Next.js, TypeScript y Tailwind.",
  openGraph: {
    title: "Marina Ziembar — Sr Frontend Engineer & Creative Technologist",
    description: "Experiencias web pulidas e interactivas, donde el diseño y el código trabajan juntos.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#E63B2A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
