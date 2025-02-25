import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const loveLace = localFont({
  src: "./fonts/Lovelace.woff",
  variable: "--font-lovelace",
  weight: "100 900",
});
const garet = localFont({
  src: "./fonts/Garet.woff",
  variable: "--font-garet",
  weight: "100 900",
});
const themysion = localFont({
  src: "./fonts/Themysion.woff",
  variable: "--font-themysion",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loveLace.variable} ${garet.variable} ${themysion.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
