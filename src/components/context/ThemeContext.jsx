"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFormLocalStorage = () => {
  // Component initilizes as server-side component, takes time to  transition to client-side component.
  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "light";
  } else {
    // Handle the case where localStorage is not available, e.g., when running on the server
    return "light"; // Provide a default value or handle this case as needed
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFormLocalStorage();
  });
  //   console.log("theme from context", theme);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
