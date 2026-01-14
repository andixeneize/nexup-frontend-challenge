import React, { useEffect, useState, useMemo } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { getProductList } from '../api/products';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';

const ALL_CATEGORIES = 'Todos';

export const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>(ALL_CATEGORIES);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProductList();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === ALL_CATEGORIES) {
      return products;
    }
    return products.filter(
      (product) => product.category === (selectedCategory as ProductCategory),
    );
  }, [products, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList productList={filteredProducts} />
    </div>
  );
};
