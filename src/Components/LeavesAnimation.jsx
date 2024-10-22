import React, { useEffect } from "react";
import styles from "./leavesanimation.module.css";

export default function LeavesAnimation() {
  const leaves = Array(10).fill(0); // Array to render multiple leaves 🍁
  const halloween = Array(3).fill(0); // Array to render multiple monsters 👻

  return (
    <div>
      <div className={styles.leavesContainer}>
        {leaves.map((_, index) => (
          <img
            src={`leaves/leaf${index + 1}.png`}
            key={index}
            alt="leaf"
            className={`${styles.leaf} ${styles[`leaf${index + 1}`]}`}
          />
        ))}
      </div>
      <div className={styles.monstersContainer}>
        {halloween.map((_, index) => (
          <img
            src={`monsters/monster${index + 1}.png`}
            key={index}
            alt="monster"
            className={`${styles.monster} ${styles[`monster${index + 1}`]}`}
          />
        ))}
      </div>
    </div>
  );
}
