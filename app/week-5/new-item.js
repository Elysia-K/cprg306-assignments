'use client';
import { useState } from 'react';

//Style Code
let formWrap = 'flex justify-center items-center';
let formContainer =
  'h-180 w-60 bg-[#EEEDED] mt-2 p-3 flex flex-col items-center justify-center';
let itemContainer =
  'h-8 w-40 rounded bg-white flex items-center pl-2 mb-2 focus:border-teal-600';
let inputContainer = 'h-8 w-20 rounded bg-white flex items-center pl-2';
let quantityContaitner =
  'h-10 w-40 bg-[#EEEDED] flex justify-center items-center space-x-1 mb-2';
let buttonsStyleDe =
  'h-7 w-8 rounded-md bg-[#EB455F] text-white hover:bg-[#FD8A8A]';
let buttonsStyleIn =
  'h-7 w-8 rounded-md bg-[#2B3467] text-white hover:bg-[#BAD7E9]';
let categoryStyle = 'h-8 w-40 rounded bg-white flex items-center pl-2 mb-2';
let buttonStyleSub =
  'h-7 w-40 rounded-md bg-[#2b675e] text-white hover:bg-[#51b6a7]';

//Item Form Code
export default function ItemForm() {
  //Item Name Input Code
  const [itemName, setItemName] = useState('');

  const handleItemNameChange = (event) => setItemName(event.target.value);

  // Quantity Code
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  //Category Code
  const [category, setCategory] = useState('produce');

  const handleCategoryChange = (event) => setCategory(event.target.value);

  //Submit Button Fuction
  const handleSubmit = (event) => {
    event.preventDefault();

    let regObject = {
      iName: itemName,
      quantity: count,
      iCategory: category,
    };

    console.log(regObject);
    alert(
      `ADDED item:${regObject.iName}, quantity: ${regObject.quantity}, category: ${regObject.iCategory}`
    );

    setItemName('');
    setCount(1);
    setCategory('produce');
  };

  return (
    <div className={formWrap}>
      <form onSubmit={handleSubmit} className={formContainer}>
        <div>
          <input
            type="text"
            onChange={handleItemNameChange}
            value={itemName}
            className={itemContainer}
            placeholder="Item name"
            required
          />
        </div>

        <div className={quantityContaitner}>
          <div className={inputContainer}>{count}</div>
          <button
            type="button"
            onClick={decrement}
            className={`${buttonsStyleDe} ${
              count <= 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={count <= 1}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={`${buttonsStyleIn} ${
              count >= 20 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={count >= 20}
          >
            +
          </button>
        </div>

        <div className={categoryStyle}>
          <select onChange={handleCategoryChange} value={category}>
            <option disabled value="">
              Category
            </option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className={buttonStyleSub}>
          +
        </button>
      </form>
    </div>
  );
}
