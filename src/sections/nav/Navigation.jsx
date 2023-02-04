import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";

const Navigation = () => {
  const [toogleMenu, setTooglemenu] = useState(false);
  const [scrrenWidth, setScreenWidth] = useState(window.innerWidth);

  const toogleNav = () => {
    setTooglemenu(!toogleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      {(toogleMenu || scrrenWidth > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}>
            <a className={styles.a} href="#home">
              home
            </a>
          </li>
          <li className={styles.items}>
            <a className={styles.a} href="#about">
              about
            </a>
          </li>
          <li className={styles.items}>
            <a className={styles.a} href="#projects">
              projects
            </a>
          </li>
          <li className={styles.items}>
            <a className={styles.a} href="#contact">
              contact
            </a>
          </li>
        </ul>
      )}

      <div onClick={toogleNav} className={styles.hamburger}>
        <span className={styles.span}></span>
        <span
          className={`${toogleMenu ? styles.spanActive : styles.span}`}
        ></span>
        <span
          className={`${toogleMenu ? styles.spanActiveBottom : styles.span}`}
        ></span>
      </div>
    </nav>
  );
};

export default Navigation;
