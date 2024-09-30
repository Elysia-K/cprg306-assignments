'use client';
import { useState } from 'react';

let container =
  'h-10 w-40 bg-[#EEEDED] flex justify-center items-center space-x-1';
let numContainer = 'h-8 w-20 bg-white flex items-center pl-2';
let buttonsStyleDe =
  'h-7 w-8 rounded-md bg-[#EB455F] text-white hover:bg-[#FD8A8A]';
let buttonsStyleIn =
  'h-7 w-8 rounded-md bg-[#2B3467] text-white hover:bg-[#BAD7E9]';

export default function Counter() {
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

  return (
    <div className="flex justify-center mt-2">
      <div className={container}>
        <div className={numContainer}>{count}</div>
        <button
          onClick={decrement}
          className={`${buttonsStyleDe} ${
            count <= 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={count <= 1}
        >
          -
        </button>
        <button
          onClick={increment}
          className={`${buttonsStyleIn} ${
            count >= 20 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={count >= 20}
        >
          +
        </button>
      </div>
    </div>
  );
}
