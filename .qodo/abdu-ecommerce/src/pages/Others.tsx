import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { CategorySection } from '../components/CategorySection';

const Others = () => {
  const otherProducts = [
    // Sample data for other products
    { id: 1, title: "Stylish Backpack", price: 49.99, image: "/assets/images/backpack.jpg" },
    { id: 2, title: "Wireless Mouse", price: 29.99, image: "/assets/images/mouse.jpg" },
    { id: 3, title: "Portable Charger", price: 19.99, image: "/assets/images/charger.jpg" },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Other Products</h1>
      <CategorySection categories={['Watches', 'Shoes', 'Others']} />
      <div className="product-grid">
        {otherProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Others;