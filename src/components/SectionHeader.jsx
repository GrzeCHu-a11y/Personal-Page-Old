import React from "react";
import styles from "./sectionHeader.module.scss";

const SectionHeader = (props) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerH2}>{props.title}</h2>
    </header>
  );
};

export default SectionHeader;
