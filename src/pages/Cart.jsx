import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();

  const cartItem = {
    name: 'Ceylon Raga Reserve',
    subtitle: 'Masala Brew',
    quantity: 1,
    weight: '100g',
    price: 1500
  };

  const subtotal = 1500.00;
  const shipping = 250.00;
  const tax = 87.50;
  const total = 1837.50;

  const handlePlaceOrder = () => {
    navigate('/checkout');
  };

  return (
    <div className="page-container">
      <Header 
        title="Your Tea Collection" 
        subtitle="Innovating Your Festive Selections"
      />

      <main className="cart-page">
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-header">
              <h2>🛒 Shopping Cart (1 item)</h2>
            </div>

            <div className="cart-item">
              <div className="item-image">
                <img src="/wgm-frontend/product.png" alt="Ceylon Raga Reserve" />
              </div>
              <div className="item-details">
                <h3>{cartItem.name}</h3>
                <p className="item-subtitle">{cartItem.subtitle}</p>
                <p className="item-meta">Quantity: {cartItem.quantity} • {cartItem.weight}</p>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-item-card">
              <div className="summary-item-image">
                <img src="/wgm-frontend/product.png" alt="Ceylon Raga Reserve" />
              </div>
              <div className="summary-item-info">
                <h4>{cartItem.name}</h4>
                <p className="summary-item-meta">Quantity: {cartItem.quantity} • {cartItem.weight}</p>
              </div>
              <div className="summary-item-price">
                LKR {cartItem.price.toFixed(2)}
              </div>
            </div>

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
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
