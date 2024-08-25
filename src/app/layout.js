import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kick Nigeria",
  description: "24 hours online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
        </main>
        <main className="bg-neutral-300">
          {children}
        </main>
      </body>
    </html>
  );
}
