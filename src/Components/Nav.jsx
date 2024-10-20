import styles from "./nav.module.css";

export default function Nav() {
  const emojis = "🥘🥙🥞🍕🍖🍝🍰🍔";
  const emojisS = "🍔🍰🍝🍖🍕🥞🥙🥘";
  return (
    <div className={styles.nav}>
      {emojis} DataDish {emojisS}
    </div>
  );
}
