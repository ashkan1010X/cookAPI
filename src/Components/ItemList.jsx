import Item from "./Item";

export default function ItemList({ foodInfo, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : foodInfo.extendedIngredients ? (
        foodInfo.extendedIngredients.map((item, idx) => (
          <Item key={idx} item={item} />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
