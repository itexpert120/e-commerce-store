import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

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
        <div className="flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Container>{children}</Container>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
