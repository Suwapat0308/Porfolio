import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/aboutImage.jpg")}
          alt="This is me"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/university.png")} alt="My university" />
            <div className={styles.aboutItemText}>
              <h3>Electrical engineer</h3>
              <p>
                Graduate from King Mongkut's Institute of Technology Ladkrabang
                in electrical engineer.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Gear.png")} alt="Engineer" />
            <div className={styles.aboutItemText}>
              <h3>Experiance on engineer</h3>
              <p>
                Have experiance as a maintenance and calibration engineer with
                knowledge of quality tool including 8D ,FMEA and etc.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AI.png")} alt="AI" />
            <div className={styles.aboutItemText}>
              <h3>Passionate on data analytic</h3>
              <p>
                Have data analytics and machine learning project to improve
                process.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
