export default function Item({ name, quantity, category }) {
  const listStyle = 'bg-slate-900 ml-5 mt-3 p-3 text-white max-w-sm';

  return (
    <li className={listStyle}>
      <h3 className="font-bold text-xl">{name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
