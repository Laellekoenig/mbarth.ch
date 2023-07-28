import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MB",
  description: "Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-12 border-b-2 flex items-center px-2 hidden">
          Test
        </header>
        {children}
      </body>
    </html>
  );
}
