import React from "react";
import styles from "./home.module.scss";
import Button from "./components/Button";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <main className={styles.main}>
        <div className={styles.infoWrapper}>
          <header className={styles.header}>
            <h1 className={styles.h1}>
              My name is Grzegorz. my passion is creating websites.
            </h1>
          </header>
          <Button />
        </div>

        <div className={styles.animationWrapper}></div>
      </main>
      {/* <h1 className={styles.h1}>Home</h1> */}
    </section>
  );
};

export default Home;
