import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban Zen",
  description: "Colaboración en equipo, manejo de proyectos y alcanzar tu máximo en productividad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
