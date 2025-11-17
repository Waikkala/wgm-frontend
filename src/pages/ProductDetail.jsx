import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('100g');
  const [activeTab, setActiveTab] = useState('description');

  const weights = [
    { value: '100g', label: '100g', price: '3.5oz' },
    { value: '250g', label: '250g', price: '8.8oz' },
    { value: '500g', label: '500g', price: '17.6oz' },
    { value: '1000g', label: '1000g', price: '35.2oz' }
  ];

  const handleAddToCart = () => {
    navigate('/cart');
  };

  const handlePlaceOrder = () => {
    navigate('/checkout');
  };

  return (
    <div className="page-container">
      <div className="top-banner">
        ⭐ Free Shipping on EVERY ORDER! | Premium Quality Guaranteed
      </div>
      
      <div className="nav-bar">
        <button className="nav-btn">Contacts</button>
        <button className="nav-btn">Order Tracking</button>
      </div>

      <main className="product-detail">
        <div className="product-container">
          <div className="product-images">
            <div className="main-image">
              <img src="/wgm-frontend/product.png" alt="Ceylon Raga Reserve - Masala Brew" />
            </div>
            <div className="thumbnail-images">
              <div className="thumbnail active">
                <img src="/wgm-frontend/product.png" alt="Product view 1" />
              </div>
              <div className="thumbnail">
                <img src="/wgm-frontend/package.png" alt="Package view" />
              </div>
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">Ceylon Raga Reserve</h1>
            <p className="product-subtitle">Masala Brew</p>
            
            <div className="stock-badge">✓ In Stock</div>
            
            <div className="product-price">
              <span className="currency">LKR</span>
              <span className="amount">1,500.00</span>
            </div>

            <div className="package-weight">
              <div className="weight-label">
                <img src="/wgm-frontend/package.png" alt="Package" className="package-icon" /> Package Weight
              </div>
              <div className="weight-options">
                {weights.map((weight) => (
                  <button
                    key={weight.value}
                    className={`weight-btn ${selectedWeight === weight.value ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(weight.value)}
                  >
                    <div className="weight-icon">
                      <img src="/wgm-frontend/package.png" alt="Package" />
                    </div>
                    <div className="weight-text">
                      <div className="weight-value">{weight.label}</div>
                      <div className="weight-oz">{weight.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                🛒 ADD TO CART
              </button>
              <button className="btn-place-order" onClick={handlePlaceOrder}>
                PLACE ORDER
              </button>
            </div>

            <div className="delivery-info">
              <div className="delivery-item">
                <span className="delivery-icon">🚚</span>
                <span>Island-wide Delivery</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">⏱️</span>
                <span>3-4 Days Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button 
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab ${activeTab === 'additional' ? 'active' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button 
              className={`tab ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button 
              className={`tab ${activeTab === 'instructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="tab-panel">
                <p className="description-text">
                  Experience the elegance of Ceylon Raga Reserve - Masala Brew, where Sri Lanka's finest spices meet Kerala's timeless traditions. 
                  This luxurious blend enriches your daily rituals with its rich aroma and vibrant energy, refreshing the mind and uplifting the spirit.
                </p>
                <p className="description-text">
                  Enjoy it with tea, coffee, or a milk infusion for a sophisticated and exotic twist, or mix with whiskey, wine, or other spirits for added 
                  warmth and depth. Each sip of Masala Brew offers an unparalleled experience.
                </p>
                
                <h3 className="features-title">Key Features:</h3>
                <ul className="features-list">
                  <li>• Premium blend of Sri Lankan and Kerala spices</li>
                  <li>• Versatile preparation methods - hot or cold beverages</li>
                  <li>• Perfect for mixing with spirits and wines</li>
                  <li>• Rich aromatic profile for an exotic experience</li>
                  <li>• 100% natural ingredients</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
