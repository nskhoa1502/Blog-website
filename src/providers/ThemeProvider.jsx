"use client";
import { ThemeContext } from "@/components/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  // Extract the theme from context
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  // Check if component is mounted or not
  useEffect(() => {
    setMounted(true);
  }, []);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
