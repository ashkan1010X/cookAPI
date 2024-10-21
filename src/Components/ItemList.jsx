import Item from "./Item";

export default function ItemList({ foodInfo }) {
  return (
    <div>
      {foodInfo.extendedIngredients ? (
        foodInfo.extendedIngredients.map((item, idx) => (
          <Item key={idx} item={item} />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
