import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Indus Air - Professional Industrial Air Compressor Manufacturer",
  description: "Indus Air is a leading air compressor manufacturer with 20+ years experience. We provide high-quality oil-injected, oil-free, and portable air compressors for industrial applications worldwide.",
  keywords: "air compressor, screw compressor, oil-free compressor, industrial compressor, India manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
