import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import Navbar from '../components/Navbar';

interface Product {
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  color: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar cartCount={cart.length} />
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl w-full">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
