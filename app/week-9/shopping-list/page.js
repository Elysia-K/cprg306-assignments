'use client';

import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
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

  // 아이템 이름을 정리하는 함수
  const cleanItemName = (name) => {
    // 이모지 제거
    const cleanedName = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    );

    // 콤마로 나누고 첫 번째 부분을 추출하여 크기/수량 제거
    const nameParts = cleanedName
      .split(',')[0]
      .split(' ')
      .slice(0, -1)
      .join(' ');

    return nameParts.trim(); // 정리된 아이템 이름 반환
  };

  // 쇼핑 리스트에서 아이템 선택 시 호출되는 함수
  const handleItemSelect = (itemName) => {
    const cleanedName = cleanItemName(itemName); // 아이템 이름 정리
    setSelectedItemName(cleanedName); // 정리된 이름을 상태에 저장
  };

  // 아이템 추가 시 호출되는 함수
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

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
