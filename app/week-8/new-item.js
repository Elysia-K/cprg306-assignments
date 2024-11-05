'use client';
import { useState } from 'react';

const formContainer =
  'h-180 w-60 mt-2 p-3 flex flex-col items-center justify-center';
const itemContainer =
  'h-8 w-40 rounded bg-white flex items-center pl-2 mb-2 focus:border-teal-600';
const inputContainer = 'h-8 w-20 rounded bg-white flex items-center pl-2';
const quantityContainer =
  'h-10 w-40 flex justify-center items-center space-x-1 mb-2';
const buttonsStyleDe =
  'h-7 w-8 rounded-md bg-[#EB455F] text-white hover:bg-[#FD8A8A]';
const buttonsStyleIn =
  'h-7 w-8 rounded-md bg-[#2B3467] text-white hover:bg-[#BAD7E9]';
const categoryStyle = 'h-8 w-40 rounded bg-white flex items-center pl-2 mb-2';
const buttonStyleSub =
  'h-7 w-40 rounded-md bg-[#2b675e] text-white hover:bg-[#51b6a7]';

export default function ItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      quantity: count,
      category: category,
    };

    onAddItem(newItem);
    setItemName('');
    setCount(1);
    setCategory('produce');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={formContainer}>
        <div>
          <input
            type="text"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
            className={itemContainer}
            placeholder="Item name"
            required
          />
        </div>
        <div className={quantityContainer}>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className={inputContainer}
          />
        </div>
        <div className={categoryStyle}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-40 text-black"
          >
            <option value="produce">Produce</option>
            <option value="meat">Meat</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>
        <button type="submit" className={buttonStyleSub}>
          Add Item
        </button>
      </form>
    </div>
  );
}
