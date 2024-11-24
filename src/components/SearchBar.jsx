import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        placeholder="Search for movies..."
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

// Add prop validation
SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
