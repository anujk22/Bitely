import React, { useEffect, useRef } from 'react';
import RecipeResult from './RecipeResult';

const RecipeList = ({ meals, isLoading }) => {
  const listRef = useRef(null);
  
  useEffect(() => {
    if (!meals.length || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.1}s`;
            entry.target.classList.add('card-enter');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '-50px',
        threshold: 0.1
      }
    );

    const cards = listRef.current?.querySelectorAll('.recipe-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [meals, isLoading]);

  if (!meals.length) return null;

  return (
    <div
      ref={listRef}
      className="
        grid
        gap-6
        px-4 md:px-8
        py-8
        w-full
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        justify-center
        items-start
      "
    >
      {meals.map((meal, index) => (
        <RecipeResult 
          key={meal.idMeal} 
          meal={meal}
          index={index}
        />
      ))}
    </div>
  );
};

export default RecipeList;
