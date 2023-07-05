import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";
import { cn } from "@/lib/utils";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased font-sans", urbanist.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
