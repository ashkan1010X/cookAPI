import styles from "./nav.module.css";

export default function Nav() {
  const emojis = "🥘🥙🥞🍕🍖🍝🍰🍔";
  const emojisS = "🍔🍰🍝🍖🍕🥞🥙🥘";

  return (
    <div className={styles.nav}>
      <div className={styles.emojis}>{emojis}</div>
      <div className={styles.title}>DataDish</div>
      <div className={styles.emojis}>{emojisS}</div>
    </div>
  );
}
