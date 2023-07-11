import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ModalProvider } from "@/providers/modal-provider";

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
        <ModalProvider />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
