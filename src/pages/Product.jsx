import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Product.css';
import blogSA4 from '../assets/blogSA (4).png';
import product1 from '/product1.png';
import img1 from '/1.png';
import img2 from '/2.png';
import img3 from '/3.png';
import hotBeverageImg from '../assets/hotbeverage.png';
import alcoholicImg from '../assets/alcoholic.png';
import coldImg from '../assets/cold (2).png';

const Product = ({ cartCount }) => {
  const [activeBrewTab, setActiveBrewTab] = useState('hot');

  return (
    <div className="product-page">
      <Header cartCount={cartCount} isLanding={true} />
      
      {/* Ceylon Raga Reserve Detail Section */}
      <section className="raga-detail-section">
        <div className="raga-detail-container">
          <div className="raga-detail-content">
            <h2 className="raga-detail-title">Ceylon Raga Reserve</h2>
            <p className="raga-detail-subtitle">Masala Brew - Anytime Energy. Everyday Luxury.</p>
            <p className="raga-detail-description">
              An exclusive creation by Waikkala Grinding Mills, reimagining Sri Lankan spice
              heritage for the modern world. Where Sri Lanka's finest spices meet Kerala's
              timeless traditions.
            </p>
            <div className="spice-tags">
              <span className="spice-tag">Clove</span>
              <span className="spice-tag">Cardamom</span>
              <span className="spice-tag">Cinnamon</span>
              <span className="spice-tag">Ginger</span>
              <span className="spice-tag">Nutmeg</span>
              <span className="spice-tag">Star Anise</span>
            </div>
            <ul className="raga-features">
              <li>✨ No preservatives. No artificial ingredients.</li>
              <li>☀️ Solar-powered production.</li>
              <li>🌾 Supporting Sri Lankan rural farmers.</li>
              <li>💼 Fostering female entrepreneurship.</li>
            </ul>
            <Link to="/product" className="btn-buy-now">BUY NOW</Link>
          </div>
          <div className="raga-detail-image">
            <img src={blogSA4} alt="Raga Reserve Package" />
          </div>
        </div>
      </section>

      {/* Art of the Brew Section */}
      <section className="brew-section">
        <h2 className="brew-title">The Art of the Brew: Versatile Inspirations</h2>
        <div className="brew-tabs">
          <button 
            className={`brew-tab ${activeBrewTab === 'hot' ? 'active' : ''}`}
            onClick={() => setActiveBrewTab('hot')}
          >
            ☕ HOT BEVERAGES
          </button>
          <button 
            className={`brew-tab ${activeBrewTab === 'cold' ? 'active' : ''}`}
            onClick={() => setActiveBrewTab('cold')}
          >
            ❄️ COLD BEVERAGES
          </button>
          <button 
            className={`brew-tab ${activeBrewTab === 'alcoholic' ? 'active' : ''}`}
            onClick={() => setActiveBrewTab('alcoholic')}
          >
            🍷 ALCOHOLIC BEVERAGES
          </button>
        </div>
        <div className="brew-content">
          <div className="brew-recipes">
            {activeBrewTab === 'hot' && (
              <>
                <div className="recipe-item">
                  <span className="recipe-icon">☕</span>
                  <div className="recipe-details">
                    <h4>Milk Tea – 250 ml cup</h4>
                    <p className="recipe-amount">Use 1/4 to 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Adjust according to taste & individual mood.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">☕</span>
                  <div className="recipe-details">
                    <h4>Plain Tea (Black Tea) – 250 ml cup</h4>
                    <p className="recipe-amount">Use 1/4 to 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Ideal for a warm, aromatic, mildly stimulating effect.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">☕</span>
                  <div className="recipe-details">
                    <h4>Coffee – 200-250 ml mug</h4>
                    <p className="recipe-amount">Use 1/4 to 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Helps balance the bitterness of coffee and enhances focus.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">☕</span>
                  <div className="recipe-details">
                    <h4>Milk Coffee – 250 ml cup</h4>
                    <p className="recipe-amount">Use 1/4 to 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Creates a creamy, aromatic masala profile.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">🥛</span>
                  <div className="recipe-details">
                    <h4>Fresh Milk – 250 ml glass</h4>
                    <p className="recipe-amount">Use 1/4 to 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Perfect for a calming, comforting drink.</p>
                  </div>
                </div>
              </>
            )}

            {activeBrewTab === 'cold' && (
              <>
                <div className="recipe-item">
                  <span className="recipe-icon">🥤</span>
                  <div className="recipe-details">
                    <h4>Fruit Juice – 300 ml glass</h4>
                    <p className="recipe-amount">Use 1 to 1 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Adjust depending on sweetness, fruit acidity & mood.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">🥤</span>
                  <div className="recipe-details">
                    <h4>Smoothies – 300-350 ml cup</h4>
                    <p className="recipe-amount">Use 1 to 1 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Ideal for thicker drinks, enhances warmth, aroma & metabolic benefits.</p>
                  </div>
                </div>
              </>
            )}

            {activeBrewTab === 'alcoholic' && (
              <>
                <div className="recipe-item">
                  <span className="recipe-icon">🥃</span>
                  <div className="recipe-details">
                    <h4>Whiskey – 45-60 ml serving (standard shot)</h4>
                    <p className="recipe-amount">Use 1/2 teaspoons</p>
                    <p className="recipe-note">✨ Enhances spice warmth and aroma.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">🥃</span>
                  <div className="recipe-details">
                    <h4>Brandy – 45-60 ml serving</h4>
                    <p className="recipe-amount">Use 1/2 to 3/4 teaspoons</p>
                    <p className="recipe-note">✨ Adds depth and smoothness to the drink.</p>
                  </div>
                </div>
                <div className="recipe-item">
                  <span className="recipe-icon">🍷</span>
                  <div className="recipe-details">
                    <h4>Wine – 150 ml glass</h4>
                    <p className="recipe-amount">Use 1/2 to 3/4 teaspoons</p>
                    <p className="recipe-note">✨ Balances sweetness and boosts the aromatic profile.</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="brew-image">
            <img 
              src={
                activeBrewTab === 'hot' ? hotBeverageImg :
                activeBrewTab === 'cold' ? coldImg :
                alcoholicImg
              } 
              alt={`${activeBrewTab} beverages`} 
            />
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="wellness-section">
        <h2 className="wellness-title">Wellness Within: The Science of Raga Reserve</h2>
        <div className="wellness-container">
          <div className="wellness-grid-layout">
            {/* Row 1: O1 (left) - Image (center) - O2 (right) */}
            <div className="wellness-card wellness-card-left">
              <h3>O1: Powerful Anti-Inflammatory Support</h3>
              <p className="wellness-description">
                Clove, ginger, cinnamon, cumin, and black pepper contain bioactive compounds
                (eugenol, gingerols, cinnamaldehyde, piperine) that help lower inflammation
                throughout the body.
              </p>
              <p className="wellness-benefit">
                Supports: Joint comfort, reduced swelling, long-term inflammatory balance.
              </p>
            </div>

            <div className="wellness-image-center">
              <img src={img1} alt="Digestive Health" />
            </div>

            <div className="wellness-card wellness-card-right">
              <h3>O2: Enhanced Digestion & Gut Comfort</h3>
              <p className="wellness-description">
                Fennel, cumin, cardamom, ginger, and pepper work together to improve:
              </p>
              <ul className="wellness-list">
                <li>• Digestion</li>
                <li>• Enzyme activity</li>
                <li>• Nutrient absorption</li>
                <li>• Reduction of gas and bloating</li>
              </ul>
              <p className="wellness-benefit">
                Supports: A calm, comfortable digestive system.
              </p>
            </div>

            {/* Row 2: Image (left) - O3 (center) - Image (right) */}
            <div className="wellness-image-side">
              <img src={img2} alt="Antioxidant Protection" />
            </div>

            <div className="wellness-card wellness-card-center">
              <h3>O3: Strong Antioxidant Protection</h3>
              <p className="wellness-description">
                Clove, cinnamon, nutmeg, cardamom, and ginger provide very high antioxidant
                activity, helping to:
              </p>
              <ul className="wellness-list">
                <li>• Neutralize free radicals</li>
                <li>• Protect cells</li>
                <li>• Reduce oxidative stress</li>
              </ul>
              <p className="wellness-benefit">
                Supports: Overall wellness, healthy aging, improved cellular resilience.
              </p>
            </div>

            <div className="wellness-image-side">
              <img src={img3} alt="Mental Clarity" />
            </div>

            {/* Row 3: O4 (left) - Image (center) - O5 (right) */}
            <div className="wellness-card wellness-card-left">
              <h3>O4: Mood Balance, Calmness & Focused Mental Clarity</h3>
              <p className="wellness-description">
                The synergistic aroma and compounds in nutmeg, cinnamon, cardamom, clove, and
                ginger naturally promote:
              </p>
              <ul className="wellness-list">
                <li>• A calm, settled mind</li>
                <li>• Emotional balance</li>
                <li>• Gentle mental stimulation</li>
                <li>• Clarity + focus</li>
              </ul>
              <p className="wellness-benefit">
                Supports: A stable, motivated, mentally clear state with tea, coffee or herbal drinks.
              </p>
            </div>

            <div className="wellness-image-center">
              <img src={img1} alt="Mood Balance" />
            </div>

            <div className="wellness-card wellness-card-right">
              <h3>O5: Metabolism Boost & Natural Weight-Supporting Effect</h3>
              <p className="wellness-description">
                Black pepper, ginger, cumin and cinnamon increase thermogenesis and
                metabolic activity while supporting blood sugar control.
              </p>
              <p className="wellness-benefit">
                Supports: Energy balance, appetite control, natural weight management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
