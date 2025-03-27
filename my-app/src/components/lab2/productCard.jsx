import React, { useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const [activeColor, setActiveColor] = useState(product.colors[0]);
  const [size, setSize] = useState(1);
  const navigate = useNavigate();

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const increaseSize = () => setSize(size + 1);
  const decreaseSize = () => {
    if (size > 1) setSize(size - 1);
  };

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={goToDetail} style={{ cursor: "pointer" }}>
      <img src={product.picture} alt={product.name} className="product-image" />
      <h2 className="product-name">
        {product.name} <span cl
        
        
        assName="product-price">${product.price}</span>
      </h2>

      <div className="product-colors" onClick={(e) => e.stopPropagation()}>
        <p>Color</p>
        <div className="color-options">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`color-circle ${activeColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>

      <div className="product-size" onClick={(e) => e.stopPropagation()}>
        <p>Size</p>
        <div className="size-selector">
          <button onClick={decreaseSize} disabled={size === 1}>-</button>
          <span>{size}</span>
          <button onClick={increaseSize}>+</button>
        </div>
      </div>

      <button className="add-to-cart" onClick={(e) => e.stopPropagation()}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
