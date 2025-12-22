import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SimpleFooter from '../components/SimpleFooter';
import './ProductDetail.css';
import PackImage from '../assets/Pack.png';
import ProductImage from '../assets/blogSA (4).png';
import logo from '../assets/Logo.png';

const ProductDetail = ({ addToCart, cartCount = 0 }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('100g');
  const [activeTab, setActiveTab] = useState('description');

  const weights = [
    { value: '100g', label: '100g', price: 'Rs 2,100.00', priceValue: 2100, perCup: 'Rs 42.00 / per cup', note: '(including delivery charges)' },
    { value: '250g', label: '250g Bulk Pack', price: 'Rs 4,725.00', priceValue: 4725, perCup: 'Rs 37.80 / per cup', note: '(Including delivery charges)' },
    { value: '500g', label: '500g Bulk Pack', price: 'Rs 8,400.00', priceValue: 8400, perCup: 'Rs 33.60 / per cup', note: '(Including delivery charges)' },
    { value: '1kg', label: '1kg Bulk Pack', price: 'Rs 15,600.00', priceValue: 15600, perCup: 'Rs 31.20 / per cup', note: '(Including delivery charges)' }
  ];

  const handleAddToCart = () => {
    const selectedWeightData = weights.find(w => w.value === selectedWeight);
    const item = {
      name: 'Ceylon Raga Reserve',
      subtitle: 'Masala Brew',
      weight: selectedWeight,
      quantity: quantity,
      price: selectedWeightData?.priceValue || 2100
    };
    addToCart(item);
    // Reset quantity after adding
    setQuantity(1);
  };

  const handlePlaceOrder = () => {
    navigate('/cart');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Inquiry about Ceylon Raga Reserve - Masala Brew');
    const body = encodeURIComponent(`Dear Waikkala Grinding Mills Team,

I am interested in learning more about your Ceylon Raga Reserve - Masala Brew product.

[Please share your thoughts, questions, or feedback here]

Best regards,
[Your Name]`);
    // Open Gmail compose in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=marketing@wgm.lk&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="page-container">
      <div className="header-wrapper">
        <div className="logo-section" onClick={() => navigate('/')}>
          <img src={logo} alt="Waikkala Grinding Mills" className="nav-logo" />
        </div>
        
        <div className="top-banner">
          ⭐ Premium Quality Guaranteed
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="nav-buttons">
          <button type="button" className="nav-btn" onClick={handleContactClick}>Contacts</button>
          <button className="nav-btn" onClick={() => alert('Order tracking feature coming soon!')}>Order Tracking</button>
          <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
        </div>
        <button className="cart-icon-nav" onClick={() => navigate('/cart')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            <circle cx="9" cy="21" r="1.5" fill="currentColor" stroke="none"/>
            <circle cx="20" cy="21" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
          {cartCount > 0 && <span className="cart-badge-nav">{cartCount}</span>}
        </button>
      </div>

      <main className="product-detail">
        <div className="product-container">
          <div className="product-images">
            <div className="main-image">
              <img src={ProductImage} alt="Ceylon Raga Reserve - Masala Brew" />
            </div>
            <div className="thumbnail-images">
              <div className="thumbnail active">
                <img src={ProductImage} alt="Product view 1" />
              </div>
              <div className="thumbnail">
                <img src={ProductImage} alt="Package view" />
              </div>
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">Ceylon Raga Reserve</h1>
            <p className="product-subtitle">Masala Brew</p>
            
            <div className="stock-badge">✓ In Stock</div>
            
            <div className="product-price">
              <span className="amount">{weights.find(w => w.value === selectedWeight)?.price || 'Rs 2,100.00'}</span>
              <div className="price-details">
                <span className="per-cup">(Average {weights.find(w => w.value === selectedWeight)?.perCup || 'Rs 42 / per cup'})</span>
                <span className="delivery-note">{weights.find(w => w.value === selectedWeight)?.note || '(including delivery charges)'}</span>
              </div>
            </div>

            <div className="package-weight">
              <div className="weight-label">
                <img src={PackImage} alt="Package" className="package-icon" /> Package Weight
              </div>
              <div className="weight-options">
                {weights.map((weight) => (
                  <button
                    key={weight.value}
                    className={`weight-btn ${selectedWeight === weight.value ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(weight.value)}
                  >
                    <div className="weight-package-image">
                      <img src={PackImage} alt={`Package ${weight.label}`} />
                    </div>
                    <div className="weight-text">
                      <div className="weight-value">{weight.label}</div>
                      <div className="weight-price">{weight.price}</div>
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
                <span>ADD TO CART</span>
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
              <button 
                className={`btn-place-order ${cartCount === 0 ? 'disabled' : ''}`}
                onClick={handlePlaceOrder}
                disabled={cartCount === 0}
              >
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
              className={`tab ${activeTab === 'guidance' ? 'active' : ''}`}
              onClick={() => setActiveTab('guidance')}
            >
              General Guidance
            </button>
            <button 
              className={`tab ${activeTab === 'additional' ? 'active' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button 
              className={`tab ${activeTab === 'return-policy' ? 'active' : ''}`}
              onClick={() => setActiveTab('return-policy')}
            >
              Return & Policy
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
                  <li>• Premium blend of Sri Lankan spices and Kerala recipe</li>
                  <li>• Versatile preparation methods - hot or cold beverages</li>
                  <li>• Perfect for mixing with spirits and wines</li>
                  <li>• Rich aromatic profile for an exotic experience</li>
                  <li>• 100% natural ingredients</li>
                </ul>
              </div>
            )}

            {activeTab === 'guidance' && (
              <div className="tab-panel">
                <div className="guidance-content">
                  <div className="guidance-item">
                    <span className="guidance-bullet">•</span>
                    <span>Start with the lower amount for a mild, smooth flavor.</span>
                  </div>
                  <div className="guidance-item">
                    <span className="guidance-bullet">•</span>
                    <div>
                      <p>Increase based on:</p>
                      <div className="sub-items">
                        <div className="sub-item">✓ personal taste</div>
                        <div className="sub-item">✓ desired aroma strength</div>
                        <div className="sub-item">✓ mood (calming → lower dose | stimulating → higher dose)</div>
                      </div>
                    </div>
                  </div>
                  <div className="guidance-item">
                    <span className="guidance-bullet">•</span>
                    <span>Mix thoroughly for best flavor release.</span>
                  </div>
                  <div className="guidance-item">
                    <span className="guidance-bullet">•</span>
                    <span>Works equally well in hot or cold beverages.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="tab-panel">
                <div className="info-list">
                  <div className="info-row">
                    <strong>Weight</strong>
                    <span>100g | 3.4oz</span>
                  </div>
                  <div className="info-row">
                    <strong>Origin</strong>
                    <span>Sri Lanka</span>
                  </div>
                  <div className="info-row">
                    <strong>Storage</strong>
                    <span>Store in a cool, dry place</span>
                  </div>
                  <div className="info-row">
                    <strong>Shelf Life</strong>
                    <span>12 months from date of manufacture</span>
                  </div>
                  <div className="info-row">
                    <strong>Product Type</strong>
                    <span>Masala Brew / Spice Blend</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'return-policy' && (
              <div className="tab-panel">
                <div className="return-policy-content">
                  <h3 className="policy-title">Return & Refund Policy</h3>
                  <p className="policy-text">
                    At Waikkala Grinding Mills, we are committed to ensuring your complete satisfaction with every purchase. 
                    We understand that sometimes products may not meet your expectations, and we're here to help make things right.
                  </p>
                  <p className="policy-text">
                    Our return and refund policy is designed to be fair and transparent. If you're not completely satisfied with 
                    your Ceylon Raga Reserve purchase, you may be eligible for a return or exchange within the specified timeframe, 
                    subject to our terms and conditions.
                  </p>
                  <button 
                    className="btn-view-policy"
                    onClick={() => navigate('/refund-policy')}
                  >
                    View Full Return & Refund Policy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default ProductDetail;
