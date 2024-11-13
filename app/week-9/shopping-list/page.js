'use client';

import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useUserAuth } from './auth-context';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const cleanItemName = (name) => {
    const cleanedName = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    );

    const nameParts = cleanedName
      .split(',')[0]
      .split(' ')
      .slice(0, -1)
      .join(' ');

    return nameParts.trim();
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = cleanItemName(itemName);
    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="bg-black p-4">
      <div className="text-white">
        <h1 className="font-bold text-3xl mb-4">Shopping List</h1>

        <div className="flex">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div>
            <div className="text-2xl font-bold mb-1">Meal Ideas</div>
            {selectedItemName ? (
              <MealIdeas ingredient={selectedItemName} />
            ) : (
              <p className="text-white">Select an item to see meal ideas.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
