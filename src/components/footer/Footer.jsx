import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Khoa blog</h1>
        </div>
        <p className={styles.desc}>
          Pariatur sit id irure voluptate cupidatat velit minim aliquip
          pariatur. Magna cupidatat minim dolor mollit voluptate tempor minim
          ipsum aliquip officia amet pariatur in commodo. Dolore irure fugiat
          tempor dolore deserunt minim aliqua ea adipisicing esse occaecat sint.
        </p>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt="" width={18} height={18} />
          <Image src={"/instagram.png"} alt="" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="" width={18} height={18} />
          <Image src={"/youtube.png"} alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Food</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
