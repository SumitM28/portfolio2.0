import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  icons: {
    icon: "https://thumbs.dreamstime.com/b/sm-initial-letter-vector-logo-icon-sm-initial-letter-vector-logo-icon-199800709.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={
            montserrat.className +
            "font-mont bg-light dark:bg-dark flex flex-col  min-h-screen h-full w-full justify-between"
          }
        >
          <Navbar />

          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
