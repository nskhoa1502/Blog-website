import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { removeHtmlAndCssTags } from "@/utils/truncateHtml";
// import TruncateHtml from "react-truncate-html";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
    // featured: true,
  });
  // console.log(res);

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Featured = async () => {
  const { posts } = await getData();
  const featuredPost = posts[0];
  // console.log(featuredPost);
  // const descHtml = featuredPost?.desc || null; // Ensure data.desc is not undefined
  // const truncatedDesc = (
  //   <TruncateHtml
  //     dangerouslySetInnerHTML={{ __html: descHtml }}
  //     maxLine={4} // Set the maximum number of lines to display
  //     ellipsis="..."
  //   />
  // );

  // console.log("deschtml", descHtml);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi, I'm Khoa</b> ! Welcome to my blog
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={featuredPost.img || "/p1.jpeg"} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{featuredPost.title}</h1>
          <p className={styles.postDesc}>
            {removeHtmlAndCssTags(featuredPost?.desc)?.substring(0, 300)}
          </p>
          <Link
            href={`/posts/${featuredPost.slug}`}
            style={{ cursor: "pointer" }}
          >
            <button className={styles.button}>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
