import React from "react";

interface Product {
    name : string;
    price : number;
    rating : number;
    imageUrl : string;
    color : string;
}

const ProductCard: React.FC<{ product: Product; onAddToCart: () => void }> = ({ product, onAddToCart }) => {
    console.log(`Product: ${product.name}, Rating: ${product.rating}`);

    return (
        <div>
            <div className="product-card" style={{ borderColor: product.color }}>
                <img src={product.imageUrl} alt={product.name} />
                <div>
                    {product.price.toLocaleString('sv-SE')} SEK
                </div>
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>ratings</p>
                <p>{product.rating}</p>
                <button onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;