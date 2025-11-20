import React, { useState } from 'react';

const SearchForm = ({ searchTerm, setSearchTerm, onSearch, isLoading }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form 
      onSubmit={onSearch} 
      className="flex w-full max-w-2xl"
    >
      <div className="relative flex-1">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for a meal..."
          disabled={isLoading}
          className={`
            w-full p-5 rounded-l-2xl
            border-0 
            bg-white/95 backdrop-blur-md
            text-black text-lg shadow-xl
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-4 focus:ring-orange-400/50
            focus:bg-white focus:shadow-2xl
            placeholder:text-gray-400
            ${isFocused ? 'ring-4 ring-orange-400/50' : ''}
            ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
          `}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`
          bg-gradient-to-r from-orange-500 to-orange-600 
          hover:from-orange-600 hover:to-orange-700
          px-10 py-5 rounded-r-2xl
          text-white font-bold text-lg
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
