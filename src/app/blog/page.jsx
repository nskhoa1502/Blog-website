import React from "react";
import styles from "./BlogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
