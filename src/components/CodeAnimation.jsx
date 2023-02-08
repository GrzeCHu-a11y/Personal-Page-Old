import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./codeAnimation.module.scss";

const CodeAnimation = () => {
  return (
    <div className={styles.codeAnimationContainer}>
      <div className={styles.circlesContainer}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <Typewriter
        options={{
          strings: [
            "body { <br> margin: 0; <br> padding: 0; <br> font-size: 19px; <br> } <br> <br> p {  <br> color: red; <br> font-weight: bolder;<br> } <br> <br> div { <br> width: 100%; <br> height: 100vh; <br> }",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
        }}
      />
    </div>
  );
};

export default CodeAnimation;
