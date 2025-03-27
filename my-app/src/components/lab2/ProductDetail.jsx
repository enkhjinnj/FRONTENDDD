import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './data3';
import './ProductCard.css';
// import { Cart } from '../lab2/Cart'


const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((item) => item.id === parseInt(id));

    const [activeColor, setActiveColor] = useState(product?.colors[0]);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-card" style={{ margin: '40px auto', maxWidth: '400px' }}>
            <img src={product.picture} alt={product.name} className="product-image" />
            <h2 className="product-name">
                {product.name} <span className="product-price">${product.price}</span>
            </h2>

            <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
                All of our items are made with fantastic materials fabrics.
                This is our latest limited collection.
            </p>
        <div className="product-colors">
            <p>Color</p>
            <div className="color-options">
            {product.colors.map((color) => (
                <div
                key={color}
                className={`color-circle ${activeColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setActiveColor(color)}
                ></div>
            ))}
            </div>
        </div>

        <div className="product-size">
            <p>Quantity</p>
            <div className="size-selector">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div>

        <button 
            className="add-to-cart"
            onClick={() => addToCart(product, activeColor, quantity)}
            >Add to Cart</button>


        <button onClick={() => navigate(-1)} style={{ backgroundColor: 'black' }}> </button>

    </div>
    
    );
};

export default ProductDetail;
