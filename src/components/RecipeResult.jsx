import React, { useState } from 'react';

const RecipeResult = ({ meal, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  const truncatedInstructions = meal.strInstructions.slice(0, 150) + '...';

  return (
    <div 
      className="recipe-card glass-card-recipe group"
      style={{ '--index': index }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <img
          src={meal.strMealThumb}
          alt={`Image of ${meal.strMeal}`}
          className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h2 className="text-2xl font-extrabold mb-3 text-gray-900 drop-shadow-sm group-hover:text-amber-800 transition-colors duration-300">
        {meal.strMeal}
      </h2>

      <div className="w-full space-y-3">
        <div className="text-sm leading-relaxed text-gray-800">
          {isExpanded ? meal.strInstructions : truncatedInstructions}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-amber-700 font-semibold text-sm hover:text-amber-800 transition-colors duration-200 hover:underline"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>

        <div className="pt-3 border-t border-amber-900/20">
          <h3 className="font-bold mb-2 text-base text-gray-900 flex items-center gap-2">
            <span className="text-orange-500">🥘</span>
            Ingredients:
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 max-h-32 overflow-y-auto custom-scrollbar">
            {ingredients.map((ing, idx) => (
              <li key={idx} className="hover:text-amber-800 transition-colors duration-200">
                {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeResult;
