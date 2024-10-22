import React, { useEffect } from "react";
import styles from "./leavesanimation.module.css";

export default function LeavesAnimation() {
  const leaves = Array(10).fill(0); // Array to render multiple leaves

  return (
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
  );
}
