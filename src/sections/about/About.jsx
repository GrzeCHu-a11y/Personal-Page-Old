import React from "react";
import styles from "./about.module.scss";
import image from "../../assets/images/Online page-amico-min.png";
import SectionHeader from "../../components/SectionHeader";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <SectionHeader title="About me" />
      <div className={styles.informationsWrapper}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt="image" />
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.textContainer}>
            <article className={styles.article}>
              <p className={styles.p}>
                Hi, I’m Grzegorz, a self-taught front-end developer. I like building responsive, user-friendly websites and web apps, that look
                visually appealing.
              </p>
            </article>
            <article className={styles.article}>
              <p className={styles.p}>
                My present stack includes HTML, CSS, SCSS and JavaScript, and I am currently in the process of learning Vue. My tools for design
                are Figma and Adobe Xd.
              </p>
            </article>
            <h3 className={styles.h3}>Technologies what i use</h3>
            <div className={styles.technologiesContainer}>
              <h4 className={styles.h4}>FRONTEND & BACKEND</h4>
              <p className={styles.techP}>HTML</p>
              <p className={styles.techP}>CSS / SCSS</p>
              <p className={styles.techP}>REACT</p>
              <p className={styles.techP}>PHP</p>
              <p className={styles.techP}>SYMFONY</p>
              <p className={styles.techP}>MYSQL</p>
              <p className={styles.techP}>WORDPRESS</p>
              <p className={styles.techP}>BOOTSTRAP</p>
              <p className={styles.techP}>VITE</p>
              <h4 className={styles.h4}>WEB DESIGN</h4>
              <p className={styles.techP}>FIGMA</p>
              <p className={styles.techP}>ADOBE XD</p>
              <h4 className={styles.h4}>OPERATING SYSTEM</h4>
              <p className={styles.techP}>WINDOWS</p>
              <p className={styles.techP}>LINUX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
