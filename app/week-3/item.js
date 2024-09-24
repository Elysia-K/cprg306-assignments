export default function Item({ name, quantity, category }) {
  return (
    <li>
      <h3>Name: {name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
