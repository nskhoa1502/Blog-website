import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi, I'm Khoa</b> ! Welcome to my blog
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Dolore ullamco exercitation veniam id fugiat laborum nostrud velit.
          </h1>
          <p className={styles.postDesc}>
            Deserunt quis culpa veniam in ad elit est ex ad. Qui tempor
            excepteur laborum labore culpa sit cillum ea. Est est in laboris
            elit consectetur aliqua est quis incididunt aliquip aliqua. Amet
            officia laboris est adipisicing. Minim dolore adipisicing incididunt
            sit ullamco velit laboris aliquip cupidatat labore ea.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
