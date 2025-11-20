import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import './style.css';
import BitelyCookie from './images/bitelycropped.png';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = async (term) => {
    setError('');
    setMeals([]);
    if (!term) {
      setError('Please enter a food name.');
      return;
    }
    
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeals(searchTerm.trim());
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 font-sans text-gray-900 pb-12 w-full overflow-hidden relative animated-bg">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-yellow-400/20 animate-gradient-shift pointer-events-none" />
      
      {/* Floating geometric shapes */}
      <div className="geometric-bg">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <header className="relative w-full py-12 mb-12 hero-section">
        <div className="flex flex-col items-center gap-4 px-4 z-10 relative">
          <div className="cookie-container">
            <img
              src={BitelyCookie}
              alt="Bitely Cookie Mascot"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl bg-white p-2 cookie-float"
              draggable={false}
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl title-fade-in">
            Bitely
          </h1>
          <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg subtitle-fade-in">
            Discover delicious recipes from around the world
          </p>
        </div>
      </header>

      <section className="w-full px-6 relative z-10">
        <SearchForm 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onSearch={handleSearch}
          isLoading={isLoading}
        />
        
        {error && (
          <div className="text-red-600 text-center my-6 font-semibold text-lg glass-card mx-auto max-w-md p-4 rounded-xl error-fade-in">
            {error}
          </div>
        )}
        
        {isLoading && (
          <div className="flex justify-center my-8">
            <div className="spinner" />
          </div>
        )}
        
        <RecipeList meals={meals} isLoading={isLoading} />
      </section>
    </main>
  );
};

export default App;
