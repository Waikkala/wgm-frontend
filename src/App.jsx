import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogView from "./pages/BlogView";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import RefundPolicy from "./pages/RefundPolicy";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
<script src="https://test-bankofceylon.mtf.gateway.mastercard.com/checkout/version/100/checkout.js"></script>;

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.weight === item.weight);
      if (existingItem) {
        return prevItems.map((i) =>
          i.weight === item.weight
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevItems, item];
    });
  };

  const updateCartItem = (weight, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.weight === weight ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (weight) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.weight !== weight)
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home cartCount={getTotalQuantity()} />} />
        <Route
          path="/about"
          element={<AboutUs cartCount={getTotalQuantity()} />}
        />
        <Route path="/blog" element={<Blog cartCount={getTotalQuantity()} />} />
        <Route
          path="/blog/:id"
          element={<BlogView cartCount={getTotalQuantity()} />}
        />
        <Route
          path="/products"
          element={<Product cartCount={getTotalQuantity()} />}
        />
        <Route
          path="/product-detail"
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
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<Confirmation />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
