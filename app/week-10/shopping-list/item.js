'use client';

import React from 'react';

export default function Item({ id, name, quantity, category, onSelect }) {
  const listStyle =
    'bg-slate-900 ml-5 mt-3 p-3 text-white max-w-sm cursor-pointer';

  return (
    <li className={listStyle} onClick={() => onSelect(name)}>
      <h3 className="font-bold text-xl">{name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
