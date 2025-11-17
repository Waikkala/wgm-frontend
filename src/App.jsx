import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.weight === item.weight);
      if (existingItem) {
        return prevItems.map(i =>
          i.weight === item.weight
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevItems, item];
    });
  };

  const updateCartItem = (weight, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.weight === weight ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (weight) => {
    setCartItems(prevItems => prevItems.filter(item => item.weight !== weight));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router basename="/wgm-frontend">
      <Routes>
        <Route
          path="/"
          element={
            <ProductDetail
              addToCart={addToCart}
              cartCount={getTotalQuantity()}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateCartItem={updateCartItem}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
