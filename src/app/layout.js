import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ["latin"] }, );

export const metadata = {
  title: "Joachim | Portfolio",
  description: "Welcome to Joachim Mwengi's portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
