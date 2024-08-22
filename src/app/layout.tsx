import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./info/scrollerLanguages/scrollerLanguage.css";
import "./about/about.css";
import "./globals.css";

import Link from "next/link";

import SocialButtons from "./social/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dominik Plauder",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-custom-bg text-white">
        <header className="fixed top-0 left-0 w-full bg-custom-bg text-white py-6 px-8 border-b border-red-500 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-3xl md:text-4xl font-bold">
              Dominik Plauder
            </div>
            <ul className="flex space-x-6 ml-auto">
              <li>
                <Link
                  href="/"
                  className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline underline-offset-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline underline-offset-4"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <SocialButtons />
        <main className="flex flex-col justify-center items-center h-[calc(100vh-6rem)] pt-[6rem]">
          {children}
        </main>
      </body>
      <footer className="text-white py-8 text-center border-t border-red-500">
        <p>
          &copy; {new Date().getFullYear()} Dominik Plauder. All rights
          reserved.
        </p>
      </footer>
    </html>
  );
}
