import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Kamehameha Highway Long-Range Coastal Resilience Plan",
  description: "For Hawaii DOT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Navbar />
        <main className="rounded-lg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
