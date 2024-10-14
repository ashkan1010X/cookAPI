import { useEffect, useState } from "react";
import styles from "./search.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        // Only make the request if the query isn't empty
        async function fetchFood() {
          const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          const data = await res.json();
          console.log(data.results);
          setFoodData(data.results);
        }
        fetchFood();
      }
    }, 300); // 500ms delay for debouncing

    // Cleanup timeout if query changes before the timeout finishes
    return () => clearTimeout(handler);
  }, [query]); // Re-run effect only when query changes

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Enter Recipe"
      />
    </div>
  );
}
