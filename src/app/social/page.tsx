"use client";

import { FaGithub, FaEnvelope } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";

export default function SocialButtons() {
  const { width } = useWindowSize();
  const isLargeScreen = width > 1280;

  return (
    <>
      {/* Social Buttons for large screens */}
      {isLargeScreen && (
        <section className="fixed -left-5 top-1/2 transform -translate-y-1/2 pl-6 bg-gray-800 bg-opacity-75 border-t border-r border-b border-red-500 rounded-r-lg p-4 shadow-xl flex items-center group transition-transform duration-300 ease-in-out -translate-x-20 group-hover:translate-x-0 hover:translate-x-5 hidden lg:flex">
          <div id="socialButtons" className="flex flex-col space-y-6 ml-auto">
            <a
              href="https://github.com/dplauder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-900 hover:bg-gray-700 p-4 rounded-full border-2 border-gray-600 hover:border-gray-500 flex items-center justify-center transition-transform transform hover:scale-105"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:dominik.plauder@gmail.com"
              className="text-white bg-red-700 hover:bg-red-500 p-4 rounded-full border-2 border-red-500 hover:border-red-400 flex items-center justify-center transition-transform transform hover:scale-105"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          <div
            id="socialLabel"
            className="text-white flex flex-col items-center h-full justify-center pl-4 text-3xl font-bold z-10"
          >
            <span className="font-bold leading-none">S</span>
            <span className="font-bold leading-none">O</span>
            <span className="font-bold leading-none">C</span>
            <span className="font-bold leading-none">I</span>
            <span className="font-bold leading-none">A</span>
            <span className="font-bold leading-none">L</span>
          </div>
        </section>
      )}

      {/* Social Buttons for small screens */}
      {!isLargeScreen && (
        <div id="socialButtonsSmall" className="flex space-x-4 mt-4">
          <a
            href="https://github.com/dplauder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-900 hover:bg-gray-700 p-4 rounded-full border-2 border-gray-600 hover:border-gray-500 flex items-center justify-center transition-transform transform hover:scale-105"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:dominik.plauder@gmail.com"
            className="text-white bg-red-700 hover:bg-red-500 p-4 rounded-full border-2 border-red-500 hover:border-red-400 flex items-center justify-center transition-transform transform hover:scale-105"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      )}
    </>
  );
}
