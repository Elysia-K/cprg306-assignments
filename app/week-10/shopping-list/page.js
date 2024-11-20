'use client';

import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';
import { getItems, addItem } from '../_service/shopping-list-service';

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const router = useRouter();

  // Add item to the list
  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const itemId = await addItem(user.uid, newItem);
        const itemWithId = { id: itemId, ...newItem };
        setItems((prevItems) => [...prevItems, itemWithId]);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Redirect to home if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      loadItems();
    }
  }, [user, router]);

  // Fetch items from Firestore
  const loadItems = async () => {
    try {
      if (user) {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      }
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  // Clean item name
  const cleanItemName = (name) => {
    return name.replace(/[^a-zA-Z\s]/g, '').trim();
  };

  // Handle item selection
  const handleItemSelect = (itemName) => {
    const cleanedName = cleanItemName(itemName);
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black min-h-screen p-4">
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
