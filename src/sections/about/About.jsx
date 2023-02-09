import React from "react";
import styles from "./about.module.scss";
import image from "../../assets/images/Online page-amico.png";
import SectionHeader from "../../components/SectionHeader";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <SectionHeader title="About" />
      <div className={styles.informationsWrapper}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt="image" />
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.textContainer}>
            <article className={styles.article}>
              <p className={styles.p}>
                I‘m interested in programing at 5 yerars. By this time i have
                konwegle at JS, React, HTML, SCSS. moreover I like project
                beautifoul websites.
              </p>
            </article>
            <article className={styles.article}>
              <p className={styles.p}>
                is simply dummy text of the printing and typesetting industry
                Lorem Ipsum has been the industry's standard dummy text er since
                the 1500s, when an unknown printer took a galley of and
                scrambled it to make a type specimen book.
              </p>
            </article>
            <h3 className={styles.h3}>Technologies what i use</h3>
            <div className={styles.technologiesContainer}>
              <h4 className={styles.h4}>FRONTEND:</h4>
              <p className={styles.techP}>HTML</p>
              <p className={styles.techP}>CSS / SCSS</p>
              <p className={styles.techP}>REACT JS</p>
              <p className={styles.techP}>WORDPRESS</p>
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
