import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { getProductList } from '../api/products';
import { Product } from '../models/Product';

export const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProductList();
      console.log('Products fetched from API:', fetchedProducts);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <CategoryFilter />
      <ProductList productList={products} />
    </div>
  );
};
