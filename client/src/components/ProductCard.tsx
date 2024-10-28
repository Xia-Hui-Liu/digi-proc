import React from 'react';

interface Product {
  name: string;
  price: number;
  rating: number; 
  imageUrl: string;
  color: string; 
}

const ProductCard: React.FC<{ product: Product; onAddToCart: () => void }> = ({ product, onAddToCart }) => {
  console.log(`Product: ${product.name}, Rating: ${product.rating}`);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={
            i < rating
              ? 'text-yellow-500' // Solid yellow for filled stars
              : 'text-yellow-500'  // Outlined yellow for unfilled star
          }
          style={i >= rating ? { color: 'white', WebkitTextStroke: '1px #F59E0B' } : {}}
        >
          ★
        </span>
      );
    }
    return stars;
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-48 h-72 relative flex flex-col justify-between">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-bold w-20 h-8 flex items-center justify-center rounded-l-lg">
          {product.price.toLocaleString('sv-SE')} SEK
        </div>
      </div>

      <div className="p-4 flex flex-col items-center"> {/* Center align items */}
        <h2 className="text-xs font-bold text-center">{product.name}</h2>
        <p className='text-xs'>ratings</p>
        <p className="text-yellow-500 text-center">{renderStars(product.rating)}</p> {/* Display stars */}
        <button
          onClick={onAddToCart}
          className="mt-2 bg-blue-500 text-white py-2 rounded w-full" // Adjusted to full width
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
