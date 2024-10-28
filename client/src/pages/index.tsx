import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/services/api";

interface Product{
    name: string;
    price: number;
    rating: number;
    imageUrl: string;
    color: string;
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then(setProducts).catch(console.error);
    }, []);

    return (
        <div>
            <div>
                <div>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} onAddToCart={()=> console.log("Added to Cart")} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
