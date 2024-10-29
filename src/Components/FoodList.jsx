import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food, idx) => (
        <FoodItem key={idx} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
}
