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
            className={`${itemContainer} text-black`}
            placeholder="Item name"
            required
          />
        </div>
        <div className={quantityContainer}>
          <div className={`${inputContainer} text-black`}>{count}</div>
          <button
            type="button"
            onClick={() => setCount(count > 1 ? count - 1 : 1)}
            className={buttonsStyleDe}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => setCount(count < 20 ? count + 1 : 20)}
            className={buttonsStyleIn}
          >
            +
          </button>
        </div>
        <div className={`${categoryStyle} text-black`}>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className={buttonStyleSub}>
          +
        </button>
      </form>
    </div>
  );
}
