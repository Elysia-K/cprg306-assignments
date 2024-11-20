'use client';

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
      }, {})
    : null;

  const btnStyle = 'm-2 px-6 py-1 text-lg text-white bg-orange-500 rounded';

  return (
    <div>
      <div className="flex items-center mb-4">
        <p className="m-2 text-white text-lg font-semibold">Sort by:</p>
        <button
          onClick={() => {
            setSortBy('name');
            setGroupByCategory(false);
          }}
          className={btnStyle}
        >
          Name
        </button>
        <button
          onClick={() => {
            setSortBy('category');
            setGroupByCategory(false);
          }}
          className={btnStyle}
        >
          Category
        </button>
        <button
          onClick={() => setGroupByCategory((prev) => !prev)}
          className={btnStyle}
        >
          {groupByCategory ? 'Ungroup' : 'Group by Category'}
        </button>
      </div>
      <ul>
        {groupByCategory
          ? Object.entries(groupedItems).map(([category, items]) => (
              <li key={category}>
                <strong className="text-white">{category}</strong>
                <ul>
                  {items.map((item) => (
                    <Item
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      onSelect={onItemSelect}
                    />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={onItemSelect}
              />
            ))}
      </ul>
    </div>
  );
}
