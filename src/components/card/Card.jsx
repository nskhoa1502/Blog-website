import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { removeHtmlAndCssTags } from "@/utils/truncateHtml";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image
          src={item?.img || "/p1.jpeg"}
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formatDate(item?.createdAt)} - </span>
          <span className={styles.category}>{item?.catSlug}</span>
        </div>
        <Link href={`/posts/${item?.slug}`}>
          <h1>{item?.title}</h1>
        </Link>
        <p className={styles.desc}>
          {removeHtmlAndCssTags(item?.desc).substring(0, 60)}
        </p>
        <Link href={`/posts/${item?.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
