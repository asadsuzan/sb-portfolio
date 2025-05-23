"use client";
import React, { useEffect, useState } from "react";

const LoaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", () => setIsLoading(false));
    }

    return () => {
      window.removeEventListener("load", () => setIsLoading(false));
    };
  }, []);
  return <>{isLoading ? <h1 className="text-5xl">LOADING...</h1> : children}</>;
};

export default LoaderWrapper;
