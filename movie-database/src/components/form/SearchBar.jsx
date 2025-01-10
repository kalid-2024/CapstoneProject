import React, { useState } from 'react';


  const SearchBar = ({ onSearch }) => {

    const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(event)=>{setQuery(event.target.value)}}
          className="input input-bordered  md:w-1/3  lg:w-1/3 sm:text-base text-sm blur-xs font-bold py-3 px-4 pl-12 pr-10 rounded-full bg-gray-100 bg-opacity-20  placeholder-theme-adaptive focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded-full hover:opacity-90">
          Search
        </button>
      </form>
    );
  };
  
  export default SearchBar;
  
