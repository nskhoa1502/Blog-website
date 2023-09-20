"use client";
import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  // console.log(theme);
  //   console.log(toggle);
  return (
    <div
      className={styles.container}
      // Change background of button
      style={
        theme === "dark" ? { background: "white" } : { background: "#0f172a" }
      }
      onClick={() => toggle()}
    >
      <Image src="/moon.png" alt="themeToggle" width={14} height={14}></Image>
      <div
        className={styles.ball}
        // Change the ball color and position
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="themeToggle" width={14} height={14}></Image>
    </div>
  );
};

export default ThemeToggle;
