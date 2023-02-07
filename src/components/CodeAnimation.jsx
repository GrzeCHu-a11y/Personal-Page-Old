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
        onInit={(typewriter) => {
          typewriter
            // .typeString("body {")
            // .pauseFor(2500)
            .typeString(
              "body { <br> margin: 0; <br> padding: 0; <br> font-size: 19px; <br> } <br> <br> p {  <br> color: red; <br> font-weight: bolder;<br> } <br> <br> div { <br> width: 100%; height: 100vh; <br> }"
            )
            .start();
        }}
        typeSpeed={7000}
      />
    </div>
  );
};

export default CodeAnimation;
