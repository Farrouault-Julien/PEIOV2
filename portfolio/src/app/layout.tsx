import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";



const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Studio Peio",
  description: "Graphic Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
