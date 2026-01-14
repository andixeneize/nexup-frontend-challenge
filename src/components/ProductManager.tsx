import React, { useEffect, useState, useMemo } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { SearchFilter } from './SearchFilter';
import { getProductList } from '../api/products';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';

const ALL_CATEGORIES = 'Todos';

export const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>(ALL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedProducts = await getProductList();
        setProducts(fetchedProducts);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to load products. Please try again later.',
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== ALL_CATEGORIES) {
      filtered = filtered.filter(
        (product) => product.category === (selectedCategory as ProductCategory),
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <ProductList
        productList={filteredProducts}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
