import { useNavigate } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './Cart.css';
import PackImage from '../assets/Pack.png';

const Cart = ({ cartItems = [], updateCartItem, removeFromCart }) => {
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 0; // Delivery charges already included in product price
  const tax = 0; // Tax already included in product price
  const total = subtotal;

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      navigate('/checkout', {
        state: {
          cartItems: cartItems,
          subtotal: subtotal,
          shipping: shipping,
          tax: tax,
          total: total
        }
      });
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
      <SimpleHeader />

      {/* White Gap Container */}
      <div className="cart-page-wrapper">
        {/* Cart Banner Section */}
        <section className="cart-banner">
          <div className="cart-banner-content">
            <h1 className="cart-banner-title">Your Cart</h1>
            <p className="cart-banner-subtitle">Reviewing Your Reserve Selections</p>
          </div>
        </section>

        <main className="cart-page">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="80" height="80">
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                <circle cx="9" cy="21" r="1" fill="currentColor" stroke="none" />
                <circle cx="20" cy="21" r="1" fill="currentColor" stroke="none" />
              </svg>
              <h2>Your cart is empty</h2>
              <p>Add some products to get started!</p>
              <button className="btn-continue-shopping" onClick={() => navigate('/product-detail')}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-main-card">
              <button className="back-btn-cart" onClick={() => navigate('/product-detail')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8l-4 4 4 4M16 12H8" />
                </svg>
              </button>

              <div className="cart-container">
                <div className="cart-items">
                  <div className="cart-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      <circle cx="9" cy="21" r="1" fill="currentColor" stroke="none" />
                      <circle cx="20" cy="21" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    <h2>Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} Item{cartItems.reduce((sum, item) => sum + item.quantity, 0) === 1 ? '' : 's'})</h2>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.weight} className="cart-item">
                      <div className="item-image">
                        <img src={PackImage} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <p className="item-subtitle">{item.subtitle}</p>
                        <p className="item-meta">Quantity: {item.quantity} × {item.weight}</p>
                      </div>
                      <div className="item-actions-row">
                        <button
                          className="btn-remove-item-icon"
                          onClick={() => handleRemoveItem(item.weight)}
                          title="Remove item"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>
                        <div className="item-quantity-controls">
                          <button
                            className="qty-btn-cart"
                            onClick={() => handleQuantityChange(item.weight, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="qty-display">{item.quantity}</span>
                          <button
                            className="qty-btn-cart"
                            onClick={() => handleQuantityChange(item.weight, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-summary">
                  <h2>Order Summary</h2>

                  {cartItems.map((item) => (
                    <div key={item.weight} className="summary-item-card">
                      <div className="summary-item-image">
                        <img src={PackImage} alt={item.name} />
                      </div>
                      <div className="summary-item-info">
                        <h4>{item.name}</h4>
                        <p className="summary-item-meta">Quantity: {item.quantity} × {item.weight}</p>
                      </div>
                      <div className="summary-item-price">
                        LKR {(item.price * item.quantity).toLocaleString('en-LK', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  ))}

                  <div className="summary-details">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>LKR {subtotal.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="summary-note">
                      <span style={{ fontSize: '0.85rem', color: '#666' }}>* Delivery charges included in price</span>
                    </div>
                  </div>

                  <div className="summary-total">
                    <span>Total</span>
                    <span className="total-amount">LKR {total.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>

                  <button className="btn-place-order" onClick={handlePlaceOrder}>
                    PLACE ORDER
                  </button>

                  <div className="secure-payment">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Secure SSL Encrypted Payment
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default Cart;
