"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFormLocalStorage = () => {
  // Component initilizes as server-side component, takes time to  transition to client-side component.
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");

    return value || "light";
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
