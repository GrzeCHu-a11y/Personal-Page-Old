import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./codeAnimation.module.scss";

const CodeAnimation = () => {
  return (
    <div className={styles.codeAnimationContainer}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            // .typeString("body {")
            // .pauseFor(2500)
            .typeString("bdf sdf fsgfdf sdfds <br> sdbfsdhfbdsb")
            .start();
        }}
      />
    </div>
  );
};

export default CodeAnimation;
// `${"body {"} <br>  margin: 0; <br>  padding: 0; <br>
//             font-size: 19px; <br> }`

// body { <br> margin: 0 auto; <br> }
