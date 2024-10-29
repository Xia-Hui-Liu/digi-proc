import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Product {
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  color: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cart');
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const updatedCart = [...prev, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
