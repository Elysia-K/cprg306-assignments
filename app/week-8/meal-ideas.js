'use client';

import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ingredient) return;

    const fetchMealIdeas = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
      setLoading(false);
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div>
      {loading ? (
        <p className="text-white">Loading meal ideas...</p>
      ) : meals.length === 0 ? (
        <p className="text-white">No meal ideas found for {ingredient}</p>
      ) : (
        <div>
          <p className="text-white mb-2">
            Here are some meal ideas using {ingredient}:
          </p>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="text-white p-2 bg-gray-800 rounded-md mb-2 w-[350px] break-words"
              >
                {meal.strMeal}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
