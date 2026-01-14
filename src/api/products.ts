import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

// Mock data for products
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Apple',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 1.5,
  },
  {
    id: 2,
    name: 'Banana',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 0.8,
  },
  {
    id: 3,
    name: 'Orange',
    status: ProductStatus.Inactive,
    category: ProductCategory.Fruit,
    price: 2.0,
  },
  {
    id: 4,
    name: 'Carrot',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 1.2,
  },
  {
    id: 5,
    name: 'Broccoli',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 2.5,
  },
  {
    id: 6,
    name: 'Lettuce',
    status: ProductStatus.Inactive,
    category: ProductCategory.Vegetables,
    price: 1.8,
  },
  {
    id: 7,
    name: 'Chicken',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 8.5,
  },
  {
    id: 8,
    name: 'Beef',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 12.0,
  },
  {
    id: 9,
    name: 'Pork',
    status: ProductStatus.Inactive,
    category: ProductCategory.Meat,
    price: 9.5,
  },
];

// Simulate REST API call with delay
const API_DELAY_MS = 500;

export const getProductList = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, API_DELAY_MS);
  });
};
