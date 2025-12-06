import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const ragaReserveImg = '/wgm-frontend/product1.png';

function Home({ cartCount }) {
  const [activeTab, setActiveTab] = useState('private');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/wgm-frontend/bg_land.png',
    '/wgm-frontend/bg_land1.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home">
      <Header cartCount={cartCount} isLanding={true} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Where Tradition Meets Technology</h1>
          <h2 className="hero-subtitle">WAIKKALA GRINDING MILLS</h2>
          <p className="hero-description">
            Born in Waikkala, Sri Lanka, we blend tradition with technology to deliver food you can trust.
            Our products are crafted from handpicked local ingredients — processed under stringent
            quality controls to preserve freshness, aroma, and authenticity.
          </p>
        </div>
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase-wrapper">
        <div className="product-showcase">
          <Link to="/products" className="btn-buy-now-corner">BUY NOW</Link>
          <div className="showcase-container">
            <div className="showcase-image-wrapper">
              <img src={ragaReserveImg} alt="Ceylon Raga Reserve Product" className="showcase-product-image" />
            </div>
            <div className="showcase-content">
              <h2 className="showcase-title">Ceylon Raga Reserve</h2>
              <p className="showcase-tagline">Masala Brew - Anytime Energy. Everyday Luxury.</p>
            </div>
          </div>
        </div>
        <div className="showcase-explore-section">
          <Link to="/products" className="btn-explore">EXPLORE RAGA RESERVE</Link>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="innovation-section">
        <h2 className="section-title">Innovation Drives Everything We Do</h2>
        <p className="section-description">
          From product development to customer experience, through AI, smart
          packaging, and global-standard facilities, WGM ensures every product meets
          the expectations of modern lifestyles.
        </p>
        <div className="innovation-cards">
          <div className="innovation-card">
            <div className="card-image-placeholder">
              <img src="/wgm-frontend/src/assets/hansdpicked.png" alt="Handpicked Quality" />
            </div>
            <div className="card-icon">🌱</div>
            <h3>Handpicked Quality</h3>
            <p>
              Every ingredient is carefully selected from local farms, ensuring the highest standards of
              authenticity and freshness.
            </p>
          </div>
          <div className="innovation-card">
            <div className="card-image-placeholder">
              <img src="/wgm-frontend/src/assets/advanced process.png" alt="Advanced Processing" />
            </div>
            <div className="card-icon">🔬</div>
            <h3>Advanced Processing</h3>
            <p>
              State-of-the-art facilities with stringent quality controls preserve the natural aroma
              and nutritional value.
            </p>
          </div>
          <div className="innovation-card">
            <div className="card-image-placeholder">
              <img src="/wgm-frontend/src/assets/Gloabal standard.png" alt="Global Standards" />
            </div>
            <div className="card-icon">🌍</div>
            <h3>Global Standards</h3>
            <p>
              GMP-Compliant facilities with ISO and HACCP certification underway, ensuring
              world-class hygiene and safety.
            </p>
          </div>
        </div>
      </section>

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
              <li>🌾 Supporting Sri Lankan local farmers.</li>
              <li>💼 Fostering female entrepreneurship.</li>
            </ul>
            <Link to="/products" className="btn-buy-now">BUY NOW</Link>
          </div>
          <div className="raga-detail-image">
            <img src="/wgm-frontend/product1.png" alt="Raga Reserve Package" />
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="pillars-section">
        <h2 className="section-title">Our Four Pillars</h2>
        <p className="section-description">
          The foundation of everything we do at Waikkala Grinding Mills
        </p>
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-image-placeholder">
              {/* Placeholder for Quality badge */}
            </div>
            <div className="pillar-icon">⚖️</div>
            <h3>Quality</h3>
          </div>
          <div className="pillar-card">
            <div className="pillar-image-placeholder">
              {/* Placeholder for Sustainability badge */}
            </div>
            <div className="pillar-icon">🌿</div>
            <h3>Sustainability</h3>
          </div>
          <div className="pillar-card">
            <div className="pillar-image-placeholder">
              {/* Placeholder for Accountability badge */}
            </div>
            <div className="pillar-icon">📋</div>
            <h3>Accountability</h3>
          </div>
          <div className="pillar-card">
            <div className="pillar-image-placeholder">
              {/* Placeholder for Trust badge */}
            </div>
            <div className="pillar-icon">🤝</div>
            <h3>Trust</h3>
          </div>
        </div>
      </section>

      {/* Reserve Inquiry Desk Section */}
      <section className="inquiry-section">
        <div className="inquiry-container">
          <h2 className="inquiry-title">Reserve Inquiry Desk</h2>
          <div className="inquiry-tabs">
            <button
              className={`tab-btn ${activeTab === 'private' ? 'active' : ''}`}
              onClick={() => setActiveTab('private')}
            >
              PRIVATE INQUIRY
            </button>
            <button
              className={`tab-btn ${activeTab === 'wholesale' ? 'active' : ''}`}
              onClick={() => setActiveTab('wholesale')}
            >
              APPLY WHOLESALE
            </button>
          </div>
          <form className="inquiry-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+94 77 123 4567" />
            </div>

            {activeTab === 'wholesale' && (
              <>
                <div className="form-group">
                  <label>Shop/Company Name</label>
                  <input type="text" placeholder="Udawatta Tea Shop" />
                </div>
                <div className="form-group">
                  <label>Expected Monthly Volume (Kg)</label>
                  <input type="number" placeholder="100" />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Please type your message here" rows="4"></textarea>
              <div className="faq-section">
                <p className="faq-title">Frequently Asked Questions:</p>
                {activeTab === 'private' ? (
                  <>
                    <p className="faq-item">✓ Where are your Reserve teas sourced?</p>
                    <p className="faq-item">✓ What is the best way to brew my Raga Reserve tea?</p>
                    <p className="faq-item">✓ Do you ship Raga Reserve internationally?</p>
                  </>
                ) : (
                  <>
                    <p className="faq-item">✓ What are the minimum volume requirements for an initial wholesale order?</p>
                    <p className="faq-item">✓ Do you offer exclusive distribution territories or regions?</p>
                    <p className="faq-item">✓ What is the typical lead time for a large-scale Reserve shipment?</p>
                  </>
                )}
              </div>
            </div>
            <button type="submit" className="btn-submit">SUBMIT</button>
            <div className="whatsapp-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="24" />
              <span>Need an immediate answer? Chat with us on Whatsapp</span>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
