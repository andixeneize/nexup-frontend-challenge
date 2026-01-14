import React from 'react';
import { ProductCategory } from '../models/ProductCategory';
import './CategoryFilter.css';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ALL_CATEGORIES = 'Todos';

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    ALL_CATEGORIES,
    ProductCategory.Fruit,
    ProductCategory.Vegetables,
    ProductCategory.Meat,
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="category-filter-label">
        Category:
      </label>
      <select
        id="category-select"
        className="category-filter-select"
        value={selectedCategory}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
