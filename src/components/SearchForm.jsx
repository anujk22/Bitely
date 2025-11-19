import React from 'react';

const SearchForm = ({ searchTerm, setSearchTerm, onSearch }) => (
  <form onSubmit={onSearch} className="mb-10 flex justify-center max-w-xl mx-auto">
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for a meal..."
      className="w-full p-3 rounded-l-lg border-0 focus:ring-2 focus:ring-violet-500 text-black shadow"
    />
    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 px-6 rounded-r-lg text-white font-bold transition-colors"
    >
      Search
    </button>
  </form>
);

export default SearchForm;
