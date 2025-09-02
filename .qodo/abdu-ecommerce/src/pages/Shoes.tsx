import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products'; // Assuming you have a data file for products

const Shoes = () => {
  const shoesProducts = products.filter(product => product.category === 'shoes');

  return (
    <div>
      <h1>Shoes Collection</h1>
      <div className="product-grid">
        {shoesProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;