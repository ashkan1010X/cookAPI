import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodID }) {
  const handleClick = () => {
    setFoodID(food.id); // Set the new food ID
    // Check if the viewport width is less than or equal to 768px (mobile)
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };
  console.log(food);
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} className={styles.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
