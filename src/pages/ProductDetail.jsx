import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SimpleFooter from '../components/SimpleFooter';
import './ProductDetail.css';

const ProductDetail = ({ addToCart, cartCount = 0 }) => {
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
    const item = {
      name: 'Ceylon Raga Reserve',
      subtitle: 'Masala Brew',
      weight: selectedWeight,
      quantity: quantity,
      price: 1500
    };
    addToCart(item);
    // Reset quantity after adding
    setQuantity(1);
  };

  const handlePlaceOrder = () => {
    navigate('/cart');
  };

  return (
    <div className="page-container">
      <div className="top-banner">
        ⭐ Free Shipping on EVERY ORDER! | Premium Quality Guaranteed
      </div>
      
      <div className="nav-bar">
        <button className="nav-btn">Contacts</button>
        <button className="nav-btn">Order Tracking</button>
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
              <img src="/wgm-frontend/product.png" alt="Ceylon Raga Reserve - Masala Brew" />
            </div>
            <div className="thumbnail-images">
              <div className="thumbnail active">
                <img src="/wgm-frontend/product.png" alt="Product view 1" />
              </div>
              <div className="thumbnail">
                <img src="/wgm-frontend/product.png" alt="Package view" />
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
                    <div className="weight-package-image">
                      <img src="/wgm-frontend/package.png" alt={`Package ${weight.label}`} />
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

            {activeTab === 'additional' && (
              <div className="tab-panel">
                <p className="description-text">
                  Our Ceylon Raga Reserve - Masala Brew is crafted with meticulous attention to detail, ensuring the highest quality standards 
                  in every package. Below you'll find comprehensive product specifications and important information about storage, certifications, 
                  and packaging to help you make an informed purchase decision.
                </p>
                <h3 className="features-title">Product Specifications</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>Product Type:</strong>
                    <span>Premium Spice Blend</span>
                  </div>
                  <div className="info-item">
                    <strong>Origin:</strong>
                    <span>Sri Lanka & Kerala, India</span>
                  </div>
                  <div className="info-item">
                    <strong>Shelf Life:</strong>
                    <span>24 months from manufacturing date</span>
                  </div>
                  <div className="info-item">
                    <strong>Storage:</strong>
                    <span>Store in a cool, dry place away from direct sunlight</span>
                  </div>
                  <div className="info-item">
                    <strong>Packaging:</strong>
                    <span>Food-grade sealed pouch</span>
                  </div>
                  <div className="info-item">
                    <strong>Certifications:</strong>
                    <span>ISO 22000, HACCP Certified</span>
                  </div>
                  <div className="info-item">
                    <strong>Net Weight Options:</strong>
                    <span>100g, 250g, 500g, 1000g</span>
                  </div>
                  <div className="info-item">
                    <strong>Allergen Information:</strong>
                    <span>May contain traces of nuts</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="tab-panel">
                <p className="description-text">
                  Our Ceylon Raga Reserve - Masala Brew is crafted from the finest hand-selected spices, carefully sourced from certified organic farms 
                  across Sri Lanka and Kerala. Each ingredient is chosen for its superior quality and aromatic properties, creating a harmonious blend 
                  that delivers an exceptional sensory experience with every use.
                </p>
                <p className="description-text">
                  We work directly with local farmers who practice sustainable agriculture, ensuring that every spice in our blend meets our rigorous 
                  quality standards. The result is a premium product that honors traditional spice-making techniques while delivering modern excellence.
                </p>
                <h3 className="features-title">Premium Ingredients</h3>
                
                <div className="ingredients-grid">
                  <div className="ingredient-item">
                    <strong>Ceylon Cinnamon</strong>
                    <p>True cinnamon from Sri Lanka, known for its delicate sweetness and warm aroma</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Cardamom</strong>
                    <p>Premium green cardamom pods with intense, sweet-spicy flavor</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Black Pepper</strong>
                    <p>Freshly ground Kerala black pepper for a subtle heat</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Cloves</strong>
                    <p>Aromatic cloves adding depth and warmth to the blend</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Ginger</strong>
                    <p>Dried ginger root providing a zesty, warming kick</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Nutmeg</strong>
                    <p>Freshly ground nutmeg for a sweet, nutty undertone</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Star Anise</strong>
                    <p>Adds a subtle licorice-like sweetness</p>
                  </div>
                  <div className="ingredient-item">
                    <strong>Fennel Seeds</strong>
                    <p>Sweet and aromatic, balancing the spice blend</p>
                  </div>
                </div>
                
                <p className="description-text" style={{ marginTop: '1.5rem' }}>
                  <strong>Note:</strong> All ingredients are 100% natural with no artificial colors, flavors, or preservatives. 
                  Our spices are ethically sourced and support sustainable farming practices.
                </p>
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="tab-panel">
                <p className="description-text">
                  Ceylon Raga Reserve - Masala Brew is incredibly versatile and can be enjoyed in numerous ways. Whether you prefer traditional 
                  hot beverages, refreshing cold drinks, or creative cocktails, our premium spice blend adapts beautifully to your preferences. 
                  Follow these simple preparation methods to unlock the full potential of this exquisite blend.
                </p>
                <p className="description-text">
                  Each preparation method has been carefully tested to ensure optimal flavor extraction and aroma. Feel free to experiment with 
                  quantities and steeping times to discover your perfect cup. The beauty of Masala Brew lies in its adaptability to your personal taste.
                </p>
                <h3 className="features-title">How to Use Ceylon Raga Reserve</h3>
                
                <div className="instruction-section">
                  <h4 className="instruction-subtitle">For Hot Beverages (Tea/Coffee)</h4>
                  <ol className="instruction-list">
                    <li>Add 1-2 teaspoons of Masala Brew to your cup</li>
                    <li>Pour hot water, tea, or coffee over the blend</li>
                    <li>Stir well and let steep for 3-5 minutes</li>
                    <li>Add milk and sweetener to taste (optional)</li>
                    <li>Strain and enjoy your aromatic beverage</li>
                  </ol>
                </div>

                <div className="instruction-section">
                  <h4 className="instruction-subtitle">For Milk Infusion (Masala Chai)</h4>
                  <ol className="instruction-list">
                    <li>Boil 1 cup of milk with 1 cup of water</li>
                    <li>Add 2 teaspoons of Masala Brew</li>
                    <li>Add 1 teaspoon of black tea leaves (optional)</li>
                    <li>Simmer for 5-7 minutes on low heat</li>
                    <li>Strain into cups and sweeten to taste</li>
                  </ol>
                </div>

                <div className="instruction-section">
                  <h4 className="instruction-subtitle">For Spirits & Cocktails</h4>
                  <ol className="instruction-list">
                    <li>Add 1 teaspoon of Masala Brew to your favorite spirit</li>
                    <li>Let it infuse for 2-3 hours or overnight for stronger flavor</li>
                    <li>Strain through a fine mesh or coffee filter</li>
                    <li>Use in cocktails or enjoy neat/on the rocks</li>
                    <li>Pairs excellently with whiskey, rum, or wine</li>
                  </ol>
                </div>

                <div className="instruction-section">
                  <h4 className="instruction-subtitle">Cold Brew Method</h4>
                  <ol className="instruction-list">
                    <li>Add 3 tablespoons of Masala Brew to 1 liter of cold water</li>
                    <li>Refrigerate for 8-12 hours</li>
                    <li>Strain and serve over ice</li>
                    <li>Add honey or agave syrup to taste</li>
                    <li>Garnish with fresh mint or citrus</li>
                  </ol>
                </div>

                <p className="description-text" style={{ marginTop: '1.5rem' }}>
                  <strong>Pro Tip:</strong> Start with smaller amounts and adjust to your taste preference. 
                  The blend is concentrated, so a little goes a long way!
                </p>
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
