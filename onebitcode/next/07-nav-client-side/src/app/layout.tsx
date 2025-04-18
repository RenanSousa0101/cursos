import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay.ttf",
  variable: "--font-playfair-display",
  weight: "100 400 700"
})

export const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "400 700"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <header>
          <div>
            <div className="site-logo">Universo em Foco</div>
            <p>Explore o incrível mundo da astronomia e descubra segredos do cosmos através de artigos, imagens e muito mais!</p>
          </div>
          <nav>
            <Link href={"/"}>Início</Link>
            {" | "}
            <Link href={"/blog"}>Blog</Link>
            {" | "}
            <Link href={"/loja"}>Loja</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
