import React from 'react';
import { Product } from '../models/Product';
// import { ProductStatus } from '../models/ProductStatus';
import './ProductList.css';

interface ProductListProps {
  productList: Product[];
}

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  if (productList.length === 0) {
    return <div className="product-list-empty">No products available</div>;
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
