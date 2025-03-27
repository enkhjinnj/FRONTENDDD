//import React from 'react';
import './App.css';

//src/App.js
// import ButtonComponent from "./components/lab1/button";

// const App = () => (
//     <div>
//         <ButtonComponent />
//     </div>
// );

// export default App;



// import PersonCard from "./components/lab1/Profile";
// const App = () => {
//     return (
//     <div className="i">
//         <PersonCard
//         name="Jessica Alba"
//         role="American actress and businesswoman"
//         image="https://i.pinimg.com/736x/b7/2f/97/b72f97872aa1db67097c11057ba019d5.jpg"
//         />
//     </div>
//     );
// };

// export default App;



// import ColorList from './components//lab1/Color2';
// const App = () => {
//     const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
//     console.log(ColorList);
//     return (
//     <div>
//         <h1>Color Selector</h1>
//         <ColorList colors={colors} />
//     </div>
//     )
// }
// export default App



// import Counter from './components/lab2/Count2';

// const App = () => {
//     return (
//     <div>
//     <h1>Number counter</h1>
//     <Counter />
//     </div>
//     )
// }

// export default App






import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/lab3/router stuff/Layout";
import Home from "./components/lab3/router stuff/Home";
import Cart from "./components/lab2/Cart";
import Contact from "./components/lab3/router stuff/Contact";
import NoPage from "./components/lab3/router stuff/NoPage";
import ProtectedRoute from "./components/lab3/router stuff/ProtectedRoute";
import Login from "./components/lab3/router stuff/login";
import ProductDetail from "./components/lab2/ProductDetail";

import { useState } from "react";

export default function App() {
    const [user, setUser] = useState();
    const [cart, setCart] = useState([]);

    const addToCart = (product, color, quantity) => {
        setCart((prev) => [...prev, { ...product, color, quantity }]);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <Routes>
            <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<Home />} />

            <Route
                path="home"
                element={
                    <ProtectedRoute user={user}>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route
                    path="product/:id"
                    element={<ProductDetail addToCart={addToCart} />}
                />

            <Route
                path="cart"
                element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login onLogin={setUser} />} />
            <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);