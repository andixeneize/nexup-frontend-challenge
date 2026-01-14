import React from 'react';
import './SearchFilter.css';

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="search-filter">
      <label htmlFor="search-input" className="search-filter-label">
        Search:
      </label>
      <input
        id="search-input"
        type="text"
        className="search-filter-input"
        placeholder="Search products by name..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};
