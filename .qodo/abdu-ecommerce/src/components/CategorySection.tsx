import React from 'react';

const categories = [
  { id: 1, name: 'Watches', image: '/assets/images/watches.jpg' },
  { id: 2, name: 'Shoes', image: '/assets/images/shoes.jpg' },
  { id: 3, name: 'Others', image: '/assets/images/others.jpg' },
];

const CategorySection: React.FC = () => {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;