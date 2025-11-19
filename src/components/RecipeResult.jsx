import React from 'react';

const RecipeResult = ({ meal }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="bg-gradient-to-br from-orange-500 via-yellow-200 to-orange-300 shadow-xl rounded-3xl p-6 text-gray-900 w-full max-w-lg flex flex-col items-center">
      <h2 className="text-2xl font-extrabold mb-2 text-center drop-shadow-sm">{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={`Image of ${meal.strMeal}`}
        className="rounded-2xl mb-3 w-56 h-40 object-cover"
      />
      <div className="w-full">
        <p className="text-base leading-relaxed whitespace-pre-line mb-2">
          {meal.strInstructions}
        </p>
        <h3 className="font-semibold mb-1 text-base">Ingredients:</h3>
        <ul className="list-disc list-inside text-sm">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeResult;
