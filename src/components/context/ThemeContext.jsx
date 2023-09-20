"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  return new Promise((resolve) => {
    // Check if window and localStorage are available
    if (typeof window !== "undefined" && window.localStorage) {
      const value = localStorage.getItem("theme");
      resolve(value || "light");
    } else {
      // If localStorage is not available (e.g., on the server), resolve with a default value
      resolve("dark"); // Provide a default value or handle this case as needed
    }
  });
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Initial theme value can be anything
  // console.log(theme);

  useEffect(() => {
    // Fetch the theme asynchronously when the component mounts
    getFromLocalStorage().then((storedTheme) => {
      setTheme(storedTheme);
    });
  }, []); // Empty dependency array to run this effect only once on mount

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
