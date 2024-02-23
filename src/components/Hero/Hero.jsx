import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Suwapat Thammachot</h1>
        <p className={styles.description}>
          I am looking for new job in data analyst, process improvement and data
          science position. You can reach my project in this web site.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:suwapat.neangnigon@gmail.com"
        >
          Contact me
        </a>
      </div>
      <img
        className={styles.heroimg}
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Picture of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
