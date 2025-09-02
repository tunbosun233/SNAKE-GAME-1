import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/productsData'; // Assuming you have a products data file

const Watches: React.FC = () => {
  const watchProducts = products.filter(product => product.category === 'watches');

  return (
    <div>
      <h1>Watches Collection</h1>
      <div className="product-grid">
        {watchProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Watches;