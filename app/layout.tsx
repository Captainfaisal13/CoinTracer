import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coin Tracer",
  description:
    "A display of top 50 cryptocurrencies with their details and real-time prices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <link rel="icon" href="favicon.ico/" />
      <body className={inter.className}>
        <main className="dark:bg-[#26272b] dark:text-[#fff]">
          <div className="m-auto max-w-6xl font-rubik">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
