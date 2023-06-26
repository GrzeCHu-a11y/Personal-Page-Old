import React from "react";
import styles from "./footer.module.scss";
import SectionHeader from "../../components/SectionHeader";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <SectionHeader title="Contact" />
      <p>grzegorzgonczowski9@gmail.com</p>
      <p>Grzegorz Gończowski © 2023</p>
    </footer>
  );
};

export default Footer;
