import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food, idx) => (
        <FoodItem key6={idx} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
}
