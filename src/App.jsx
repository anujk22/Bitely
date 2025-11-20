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
    <main className="min-h-screen bg-gradient-to-br from-orange-300 via-amber-200 to-yellow-100 font-sans text-gray-900 relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-transparent to-yellow-300/20 pointer-events-none" />
      
      {/* Hero Split Section */}
      <section className="relative min-h-[85vh] flex items-center py-12 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Giant Cookie Mascot */}
            <div className="flex justify-center lg:justify-start hero-cookie-container">
              <div className="relative cookie-hero-wrapper">
                <img
                  src={BitelyCookie}
                  alt="Bitely Cookie Mascot"
                  className="w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] object-contain cookie-float-large drop-shadow-2xl"
                  draggable={false}
                />
                <div className="cookie-glow" />
              </div>
            </div>

            {/* Right Side - Title and Search */}
            <div className="flex flex-col justify-center space-y-10 hero-content-side">
              <div className="space-y-5">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-amber-950 title-fade-in leading-tight" 
                    style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.25)' }}>
                  Bitely
                </h1>
                <p className="text-amber-900 text-2xl md:text-3xl lg:text-4xl font-medium subtitle-fade-in max-w-xl" 
                   style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
                  Find your next favorite recipe
                </p>
              </div>

              <div className="search-form-fade-hero">
                <SearchForm 
                  searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                  onSearch={handleSearch}
                  isLoading={isLoading}
                />
              </div>

              {error && (
                <div className="text-red-600 font-semibold text-lg glass-card p-4 rounded-xl error-fade-in max-w-xl">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full px-6 relative z-10 pb-12">
        {isLoading && (
          <div className="flex justify-center my-8">
            <div className="spinner" />
          </div>
        )}
        
        <RecipeList meals={meals} isLoading={isLoading} />
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-8 border-t border-orange-300/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={BitelyCookie} 
                alt="Bitely Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-amber-900 font-semibold text-lg">Bitely</p>
                <p className="text-amber-800 text-sm">Find your next favorite recipe</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-amber-900 font-medium">
                Made by <span className="font-bold">Anuj Kakumanu</span>
              </p>
              <p className="text-amber-800 text-sm mt-1">
                © 2025 Bitely. Powered by TheMealDB API
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
