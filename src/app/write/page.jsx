"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./Write.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { slugify } from "@/utils/slugify";
import dynamic from "next/dynamic";

const storage = getStorage(app);

const WritePage = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const { status } = useSession();

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState(null);
  const [catSlug, setCatSlug] = useState("fashion");

  useEffect(() => {
    const upload = () => {
      // Generate unique name
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((categoryList) => setCategories(categoryList));
  }, []);

  // console.log(categories);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const handleSubmit = async () => {
    const bodyRes = JSON.stringify({
      title,
      desc: value,
      img: media,
      slug: slugify(title),
      catSlug,
    });
    const res = await fetch("/api/posts", {
      method: "POST",
      body: bodyRes,
    });

    // console.log(bodyRes);
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className={styles.category}
          id="slugSelect"
          onChange={(e) => setCatSlug(e.target.value)}
        >
          {categories?.map((category) => (
            <option value={category?.slug} key={category?.slug}>
              {category?.title}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        <div className={styles.postButtons}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src={"/plus.png"} alt="" width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image" style={{ cursor: "pointer" }}>
                  <Image src={"/image.png"} alt="" width={16} height={16} />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image src={"/external.png"} alt="" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src={"/video.png"} alt="" width={16} height={16} />
              </button>
            </div>
          )}
        </div>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
