import React, { useState } from 'react';
import ProductCard from '../../lab2/productCard';
import { products } from '../../lab2/data3';


export default function ProductApp() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectColor, setSelectColor] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProducts = products.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const colorMatch = selectColor === "" || (product.colors || []).includes(selectColor);
        const priceMatch =
            (minPrice === "" || product.price >= Number(minPrice)) &&
            (maxPrice === "" || product.price <= Number(maxPrice));

        return nameMatch && colorMatch && priceMatch;
    });

    return (
        <div className="App">
            <h1>Shirt Store</h1>

            <div className="filters">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                
                <select value={selectColor} onChange={(e) => setSelectColor(e.target.value)}>
                    <option value="">All Colors</option>
                    {["blue", "green", "yellow", "purple", "black", "pink", "orange", "gray", "brown", "cyan"].map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>

                <input 
                    type="number" 
                    placeholder="Min Price" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Max Price" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)} 
                />
            </div>

            <h2>Products:</h2>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
