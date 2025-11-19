import React from 'react';
import RecipeResult from './RecipeResult';

const RecipeList = ({ meals }) => {
  if (!meals.length) return null;
  return (
    <div
      className="
        grid
        gap-4
        px-8
        py-8
        w-full
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        justify-center
        items-start
      "
    >
      {meals.map((meal) => (
        <RecipeResult key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default RecipeList;
