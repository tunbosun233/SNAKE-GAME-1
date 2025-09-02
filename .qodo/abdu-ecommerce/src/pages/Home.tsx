import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AnimatedBackground />
      <main>
        <h1>Welcome to Abdu</h1>
        <p>Your one-stop shop for the latest products in Watches, Shoes, and more!</p>
        <CategorySection />
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {/* Example Product Cards - Replace with dynamic data later */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;