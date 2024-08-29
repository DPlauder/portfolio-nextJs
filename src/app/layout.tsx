"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./info/scrollerLanguages/scrollerLanguage.css";
import "./about/about.css";
import "./globals.css";

import Link from "next/link";
import SocialButtons from "./social/page";
import useWindowSize from "../hooks/useWindowSize";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-custom-bg text-white">
        <header className="fixed top-0 left-0 w-full bg-custom-bg text-white py-6 px-8 border-b border-red-500 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-3xl xl:text-4xl font-bold">
              Dominik Plauder
            </div>
            <button
              className="xl:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div
                className={`w-8 h-8 flex flex-col justify-between items-center transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-45" : ""
                }`}
              >
                <span
                  className={`block h-1 w-full bg-white transform transition duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-3" : ""
                  }`}
                />
                <span
                  className={`block h-1 w-full bg-white transition duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-1 w-full bg-white transform transition duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-3" : ""
                  }`}
                />
              </div>
            </button>
            <ul className="hidden xl:flex space-x-6 ml-auto">
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

        {/* Full-screen menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-custom-bg text-white z-40 flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="space-y-8 text-2xl flex flex-col items-center">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              {/* Social Buttons */}
              <li>
                <div className="flex space-x-4">
                  <SocialButtons />
                </div>
              </li>
            </ul>
          </div>
        )}

        {/* Condition render SocialButtons >= 1280px */}
        {width > 1280 && <SocialButtons />}

        <main
          className={`flex flex-col items-center justify-center flex-1 ${
            width >= 1280 ? "h-[calc(100vh-14rem)]" : ""
          } mt-[6rem] z-30`}
        >
          {children}
        </main>

        <footer className="text-white py-8 text-center border-t border-red-500 z-30">
          <p>
            &copy; {new Date().getFullYear()} Dominik Plauder. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
