"use client";

import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0 });

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => setWindowSize({ width: window.innerWidth });

    // Only set up the event listener if running in the browser
    if (typeof window !== "undefined") {
      // Initialize the state with the current window size
      handleResize();

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
