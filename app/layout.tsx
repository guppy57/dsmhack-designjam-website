import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DesignJam by dsmHack",
  description: "24 hour event where designers pair with non-profits to redesign logos, tweak websites, and beautify branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
