'use client';

import React, { useState } from 'react';
import Item from './item';

export default function ItemList() {
  const item1 = {
    name: 'milk, 4 L 🥛',
    quantity: 1,
    category: 'dairy',
  };

  const item2 = {
    name: 'bread 🍞',
    quantity: 2,
    category: 'bakery',
  };

  const item3 = {
    name: 'eggs, dozen 🥚',
    quantity: 2,
    category: 'dairy',
  };

  const item4 = {
    name: 'bananas 🍌',
    quantity: 6,
    category: 'produce',
  };

  const item5 = {
    name: 'broccoli 🥦',
    quantity: 3,
    category: 'produce',
  };

  const item6 = {
    name: 'chicken breasts, 1 kg 🍗',
    quantity: 1,
    category: 'meat',
  };

  const item7 = {
    name: 'pasta sauce 🍝',
    quantity: 3,
    category: 'canned goods',
  };

  const item8 = {
    name: 'spaghetti, 454 g 🍝',
    quantity: 2,
    category: 'dry goods',
  };

  const item9 = {
    name: 'toilet paper, 12 pack 🧻',
    quantity: 1,
    category: 'household',
  };

  const item10 = {
    name: 'paper towels, 6 pack',
    quantity: 1,
    category: 'household',
  };

  const item11 = {
    name: 'dish soap 🍽️',
    quantity: 1,
    category: 'household',
  };

  const item12 = {
    name: 'hand soap 🧼',
    quantity: 4,
    category: 'household',
  };

  const items = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
  ];

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
          onClick={() => setGroupByCategory(true)}
          className={btnStyle + ' flex flex-col'}
        >
          <span>Grouped</span>
          <span>Category</span>
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
                      key={item.name}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
}
