import React, { useEffect } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { getProductList } from '../api/products';

export const ProductManager: React.FC = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductList();
      console.log('Products fetched from API:', products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <CategoryFilter />
      <ProductList productList={[]} />
    </div>
  );
};
