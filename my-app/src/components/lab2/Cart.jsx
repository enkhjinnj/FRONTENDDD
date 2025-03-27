import React from 'react';

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (id, color) => {
        setCart((prev) =>
        prev.filter((item) => !(item.id === id && item.color === color))
        );
    };

    let cartContent;

    if (cart.length === 0) {
        cartContent = <p>Your cart is empty.</p>;
    } else {
        cartContent = cart.map((item) => (
        <div key={`${item.id}-${item.color}`}>
            <h3>{item.name}</h3>
            <p>Color: {item.color}</p>
            <p>Qty: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id, item.color)}>Remove</button>
        </div>
        ));
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Your Cart</h2>
            {cartContent}
        </div>
    );
};


export default Cart;
