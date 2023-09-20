import React from "react";
import styles from "./SinglePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Nisi officia exercitation excepteur ullamco occaecat esse.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Elit labore incididunt eu anim pariatur voluptate commodo
              excepteur. Duis eu irure nisi amet ullamco. Minim amet ullamco
              amet in in non dolore.
            </p>
            <h2>
              Cillum consectetur occaecat consequat laborum non aliqua deserunt
              ad mollit.
            </h2>
            <p>
              Elit labore incididunt eu anim pariatur voluptate commodo
              excepteur. Duis eu irure nisi amet ullamco. Minim amet ullamco
              amet in in non dolore.
            </p>
            <h2>
              Cillum consectetur occaecat consequat laborum non aliqua deserunt
              ad mollit.
            </h2>
            <p>
              Elit labore incididunt eu anim pariatur voluptate commodo
              excepteur. Duis eu irure nisi amet ullamco. Minim amet ullamco
              amet in in non dolore.
            </p>
            <h2>
              Cillum consectetur occaecat consequat laborum non aliqua deserunt
              ad mollit.
            </h2>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
