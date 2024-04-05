import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/fonts";

export const metadata: Metadata = {
  title: "Brainwave.io",
  description: "Get your brain waved now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
