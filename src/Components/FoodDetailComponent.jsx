import styles from "./fooddetail.module.css";
import { useEffect, useState, useRef } from "react";
import ItemList from "./ItemList";

export default function FoodDetail({ foodID }) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [foodInfo, setFoodInfo] = useState({});

  const detailRef = useRef(null); // ref for the container

  useEffect(() => {
    async function fetchFoodData() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodInfo(data);
    }
    fetchFoodData();

    // Scroll to top when foodID changes
    if (detailRef.current) {
      detailRef.current.scrollTop = 0;
    }
  }, [foodID]);

  if (!foodInfo.title) return null;

  return (
    <div ref={detailRef} className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{foodInfo.title}</h1>
      <img className={styles.recipeImage} src={foodInfo.image} alt="" />
      <div className={styles.recipeDetails}>
        <span>
          <strong>{foodInfo.readyInMinutes} Minutes</strong>
        </span>
        <strong>
          <p>Serves {foodInfo.servings}</p>
        </strong>
        {foodInfo.vegetarian ? (
          <strong>Vegetarian</strong>
        ) : (
          <strong>Non-Vegetarian</strong>
        )}
      </div>
      <div>
        $<span>{(foodInfo.pricePerServing / 100).toFixed(2)} Per serving</span>
      </div>
      <h2>Ingredients</h2>
      <ItemList foodInfo={foodInfo} />
      <h2 className={styles.directions}>Directions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {foodInfo.analyzedInstructions[0]?.steps.map((step, idx) => (
            <li key={idx}>{step.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
