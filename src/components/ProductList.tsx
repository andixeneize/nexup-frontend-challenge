/* eslint-disable react/require-default-props */
import React from 'react';
import { Product } from '../models/Product';
import './ProductList.css';

interface ProductListProps {
  productList: Product[];
  isLoading?: boolean;
  error?: string | null;
}

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const ProductList: React.FC<ProductListProps> = ({
  productList,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return (
      <div className="product-list-loading">
        <div className="loading-spinner" />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-error">
        <p className="error-message">⚠️ {error}</p>
      </div>
    );
  }

  if (productList.length === 0) {
    return <div className="product-list-empty">No products found</div>;
  }

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <div
            className={`product-status product-status-${product.status.toLowerCase()}`}
            aria-label={`Status: ${product.status}`}
          />
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-category">{product.category}</div>
          </div>
          <div className="product-price">{formatPrice(product.price)}</div>
        </div>
      ))}
    </div>
  );
};
