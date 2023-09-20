import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* POPULAR POSTS */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1>Most Popular</h1>
      <MenuPosts />
      {/* DISCOVER BY TOPICS */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1>Editor Pick</h1>
      <MenuCategories />
      {/* RECOMMENDED POST */}

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1>Editor Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
