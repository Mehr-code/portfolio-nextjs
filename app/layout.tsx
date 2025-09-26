import type { Metadata } from "next";
import "@fontsource/vazir";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehr Code",
  description: "Mehran's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className="dark">{children}</body>
    </html>
  );
}
