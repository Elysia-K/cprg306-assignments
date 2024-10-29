'use client';

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="bg-black">
      <h1 className="font-bold text-3xl text-white p-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
