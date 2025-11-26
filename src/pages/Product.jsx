import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Product.css';

const Product = ({ cartCount }) => {
  return (
    <div className="product-page">
      <Header cartCount={cartCount} isLanding={true} />
      
      {/* Hero Section */}
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">Ceylon Raga Reserve</h1>
            <p className="product-hero-subtitle">Masala Brew - Anytime Energy. Everyday Luxury.</p>
            <p className="product-hero-description">
              An exclusive creation by Waikkala Grinding Mills, reimagining Sri Lankan spice
              heritage for the modern world. Where Sri Lanka's finest spices meet Kerala's
              timeless traditions.
            </p>
            <div className="spice-tags-hero">
              <span className="spice-tag-hero">Clove</span>
              <span className="spice-tag-hero">Cardamom</span>
              <span className="spice-tag-hero">Cinnamon</span>
              <span className="spice-tag-hero">Ginger</span>
              <span className="spice-tag-hero">Nutmeg</span>
              <span className="spice-tag-hero">Star Anise</span>
            </div>
            <ul className="product-hero-features">
              <li>✨ No preservatives. No artificial ingredients.</li>
              <li>☀️ Solar-powered production.</li>
              <li>🌾 Supporting Sri Lankan rural farmers.</li>
              <li>💼 Fostering female entrepreneurship.</li>
            </ul>
            <Link to="/product" className="btn-buy-now-hero">BUY NOW</Link>
          </div>
          <div className="product-hero-image">
            <img src="/wgm-frontend/product1.png" alt="Ceylon Raga Reserve" />
          </div>
        </div>
      </section>

      {/* Art of the Brew Section */}
      <section className="brew-section">
        <h2 className="brew-title">The Art of the Brew: Versatile Inspirations</h2>
        <div className="brew-tabs">
          <button className="brew-tab active">☕ HOT BEVERAGES</button>
          <button className="brew-tab">❄️ COLD BEVERAGES</button>
          <button className="brew-tab">🍷 ALCOHOLIC BEVERAGES</button>
        </div>
        <div className="brew-content">
          <div className="brew-recipes">
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
          </div>
          <div className="brew-image">
            <img src="/wgm-frontend/product1.png" alt="Raga Reserve Brew" />
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
              <img src="/wgm-frontend/1.png" alt="Digestive Health" />
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
              <img src="/wgm-frontend/2.png" alt="Antioxidant Protection" />
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
              <img src="/wgm-frontend/3.png" alt="Mental Clarity" />
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
              <img src="/wgm-frontend/1.png" alt="Mood Balance" />
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
