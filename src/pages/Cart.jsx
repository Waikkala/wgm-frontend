import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Cart.css';

const Cart = ({ cartItems = [], updateCartItem, removeFromCart }) => {
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 250.00 : 0;
  const tax = subtotal * 0.0583; // 5.83% tax
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    }
  };

  const handleQuantityChange = (weight, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItem(weight, newQuantity);
    }
  };

  const handleRemoveItem = (weight) => {
    removeFromCart(weight);
  };

  return (
    <div className="page-container">
      <Header 
        title="Your Tea Collection" 
        subtitle="Innovating Your Festive Selections"
      />

      <main className="cart-page">
        <button className="back-btn-cart" onClick={() => navigate(-1)}>
          ← Back to Shopping
        </button>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="80" height="80">
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              <circle cx="9" cy="21" r="1" fill="currentColor" stroke="none"/>
              <circle cx="20" cy="21" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <button className="btn-continue-shopping" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              <div className="cart-header">
                <h2>🛒 Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} {cartItems.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'item' : 'items'})</h2>
              </div>

              {cartItems.map((item) => (
                <div key={item.weight} className="cart-item">
                  <div className="item-image">
                    <img src="/wgm-frontend/product.png" alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-subtitle">{item.subtitle}</p>
                    <p className="item-meta">Weight: {item.weight}</p>
                    <p className="item-price">LKR {item.price.toFixed(2)} each</p>
                    
                    <div className="item-quantity-controls">
                      <button 
                        className="qty-btn-cart"
                        onClick={() => handleQuantityChange(item.weight, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.weight, Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                        className="qty-input-cart"
                      />
                      <button 
                        className="qty-btn-cart"
                        onClick={() => handleQuantityChange(item.weight, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="item-actions">
                    <div className="item-total-price">
                      LKR {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      className="btn-remove-item"
                      onClick={() => handleRemoveItem(item.weight)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <h2>Order Summary</h2>
              
              {cartItems.map((item) => (
                <div key={item.weight} className="summary-item-card">
                  <div className="summary-item-image">
                    <img src="/wgm-frontend/product.png" alt={item.name} />
                  </div>
                  <div className="summary-item-info">
                    <h4>{item.name}</h4>
                    <p className="summary-item-meta">Quantity: {item.quantity} • {item.weight}</p>
                  </div>
                  <div className="summary-item-price">
                    LKR {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}

              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>LKR {subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>LKR {shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (Estimated)</span>
                  <span>LKR {tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span className="total-amount">LKR {total.toFixed(2)}</span>
              </div>

              <button className="btn-place-order" onClick={handlePlaceOrder}>
                PLACE ORDER
              </button>

              <div className="secure-payment">
                🔒 Secure SSL Encrypted Payment
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
