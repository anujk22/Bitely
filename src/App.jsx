import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import './style.css';
import BitelyCookie from './images/bitelycropped.png';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const fetchMeals = async (term) => {
    setError('');
    setMeals([]);
    if (!term) {
      setError('Please enter a food name.');
      return;
    }
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await res.json();
      if (!data.meals) {
        setError('Meal not found!');
      } else {
        setMeals(data.meals);
      }
    } catch (err) {
      setError('An error occurred fetching data.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeals(searchTerm.trim());
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-200 to-orange-400 font-sans text-gray-900 pb-12 w-full">
      <header className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 py-6 shadow-md mb-10">
        <div className="flex flex-col items-center gap-2 px-4">
          <img
            src={BitelyCookie}
            alt="Bitely Cookie Mascot"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-2 bg-white"
            draggable={false}
          />
          <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-lg mb-1">
            Bitely
          </h1>
        </div>
      </header>
      <section className="w-full px-6">
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        {error && <div className="text-red-500 text-center my-4 font-semibold">{error}</div>}
        <RecipeList meals={meals} />
      </section>
    </main>
  );
};

export default App;
