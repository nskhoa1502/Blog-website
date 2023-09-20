import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.07.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>Amet irure non do nisi Lorem quis.</h1>
        </Link>
        <p className={styles.desc}>
          Est elit esse ex aliquip ut duis voluptate Lorem in ad minim dolor
          culpa non. Non ea proident voluptate sit dolore labore laboris. Anim
          et fugiat exercitation aute consequat. Enim nisi enim ut laborum
          tempor eiusmod. Reprehenderit culpa culpa sit eiusmod et commodo. Aute
          sunt nostrud velit cillum.
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
