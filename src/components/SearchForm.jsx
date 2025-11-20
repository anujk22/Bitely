import React, { useState } from 'react';

const SearchForm = ({ searchTerm, setSearchTerm, onSearch, isLoading }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form 
      onSubmit={onSearch} 
      className="mb-12 flex justify-center max-w-2xl mx-auto search-form-fade"
    >
      <div className={`relative w-full transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for a meal..."
          disabled={isLoading}
          className={`
            w-full p-4 pl-6 rounded-l-2xl border-0 
            bg-white/90 backdrop-blur-md
            text-black text-lg shadow-xl
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-4 focus:ring-orange-400/50
            focus:bg-white focus:shadow-2xl
            placeholder:text-gray-400
            ${isFocused ? 'glow-effect' : ''}
            ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
          `}
        />
        {isFocused && (
          <div className="absolute inset-0 rounded-l-2xl bg-gradient-to-r from-orange-500/20 to-yellow-400/20 animate-pulse pointer-events-none" />
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`
          bg-gradient-to-r from-orange-500 to-orange-600 
          hover:from-orange-600 hover:to-orange-700
          px-8 rounded-r-2xl text-white font-bold text-lg
          transition-all duration-300 ease-out
          shadow-xl hover:shadow-2xl
          transform hover:scale-105 active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:scale-100
          relative overflow-hidden
          button-shimmer
        `}
      >
        <span className="relative z-10">{isLoading ? 'Searching...' : 'Search'}</span>
        <div className="shimmer-effect" />
      </button>
    </form>
  );
};

export default SearchForm;
