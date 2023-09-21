"use client";

import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { formatDate } from "@/utils/formatDate";

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const status = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetchData
  );
  console.log(data);
  return (
    <div>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item?.id}>
                <div className={styles.user}>
                  <Image
                    src={item?.user?.image || "/p1.jpeg"}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user?.name}</span>
                    <span className={styles.date}>
                      {formatDate(item?.createdAt)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item?.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
