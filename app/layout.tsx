import type { Metadata } from "next";
import "./globals.css";

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
      <body className="">{children}</body>
    </html>
  );
}
