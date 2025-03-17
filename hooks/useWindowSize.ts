"use client";

import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0, // Default values to avoid SSR errors
    height: 0,
  });

  useEffect(() => {
    // Ensure `window` exists before using it
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize(); // Get initial size

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

export default useWindowSize;
