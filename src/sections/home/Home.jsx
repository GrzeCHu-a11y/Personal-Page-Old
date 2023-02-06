import React from "react";
import styles from "./home.module.scss";
import CodeAnimation from "../../components/CodeAnimation";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <main className={styles.main}>
        <div className={styles.infoWrapper}>
          <header className={styles.header}>
            <h1 className={styles.h1}>
              My name is Grzegorz. My passion is creating websites.
            </h1>
          </header>
          <div className={styles.socialsContainer}>
            <button className={styles.socialsButton}>
              <a href="#">download cv</a>
            </button>
            <a
              className={styles.socialsA}
              href="https://github.com/GrzeCHu-a11y"
              target={"_blank"}
            >
              or see github profile
            </a>
          </div>
        </div>

        <div className={styles.animationWrapper}>
          <CodeAnimation />
        </div>
      </main>
    </section>
  );
};

export default Home;
