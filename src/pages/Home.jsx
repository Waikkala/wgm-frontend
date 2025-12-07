import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

// Import all images
import ragaReserveImg from '/product1.png';
import bgLand from '/bg_land.png';
import bgLand1 from '/bg_land1.png';
import handpickedImg from '../assets/hansdpicked.png';
import advancedProcessImg from '../assets/advanced process.png';
import globalStandardImg from '../assets/Gloabal standard.png';
import blogSA4 from '../assets/blogSA (4).png';
import qualityImg from '../assets/quality.png';
import sustainabilityImg from '../assets/sustainability.png';
import accountabilityImg from '../assets/Accountability.png';
import trustImg from '../assets/trust.png';

const API_BASE_URL = 'https://wgm-backend.onrender.com';

function Home({ cartCount }) {
  const [activeTab, setActiveTab] = useState('private');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    expectedMonthlyVolume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const slides = [bgLand, bgLand1];

  const handleFaqClick = (question) => {
    setFormData(prev => ({ ...prev, message: question }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const endpoint = activeTab === 'private' 
        ? `${API_BASE_URL}/api/v1/inquiries/general`
        : `${API_BASE_URL}/api/v1/inquiries/wholesale`;

      const payload = activeTab === 'private'
        ? {
            name: formData.name,
            emailAddress: formData.emailAddress,
            phoneNumber: formData.phoneNumber,
            message: formData.message
          }
        : {
            name: formData.name,
            emailAddress: formData.emailAddress,
            phoneNumber: formData.phoneNumber,
            companyName: formData.companyName,
            expectedMonthlyVolume: parseInt(formData.expectedMonthlyVolume) || 0,
            message: formData.message
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your inquiry has been submitted successfully!' });
        // Reset form
        setFormData({
          name: '',
          emailAddress: '',
          phoneNumber: '',
          companyName: '',
          expectedMonthlyVolume: '',
          message: ''
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmitStatus({ 
          type: 'error', 
          message: errorData.message || 'Failed to submit inquiry. Please try again.' 
        });
        
        // Auto-hide error message after 7 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 7000);
      }
    } catch {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
      
      // Auto-hide error message after 7 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="showcase-container">
            <div className="showcase-image-wrapper">
              <img src={ragaReserveImg} alt="Ceylon Raga Reserve Product" className="showcase-product-image" />
            </div>
            <div className="showcase-content">
              <div className="showcase-title-row">
                <h2 className="showcase-title">Ceylon Raga Reserve</h2>
                <Link to="/products" className="btn-buy-now-corner">BUY NOW</Link>
              </div>
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
              <img src={handpickedImg} alt="Handpicked Quality" />
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
              <img src={advancedProcessImg} alt="Advanced Processing" />
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
              <img src={globalStandardImg} alt="Global Standards" />
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
              <li>🌾 Supporting Sri Lankan rural farmers.</li>
              <li>💼 Fostering female entrepreneurship.</li>
            </ul>
            <Link to="/products" className="btn-buy-now">BUY NOW</Link>
          </div>
          <div className="raga-detail-image">
            <img src={blogSA4} alt="Raga Reserve Package" />
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="pillars-section">
        <h2 className="pillars-title">Our Four Pillars</h2>
        <div className="pillars-divider"></div>
        <p className="pillars-description">
          The foundation of everything we do at Waikkala Grinding Mills
        </p>
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={qualityImg} alt="Quality" />
            </div>
            <div className="pillar-label">
              <span className="pillar-icon">👨‍🍳</span>
              <h3>Quality</h3>
            </div>
          </div>
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={sustainabilityImg} alt="Sustainability" />
            </div>
            <div className="pillar-label">
              <span className="pillar-icon">🌱</span>
              <h3>Sustainability</h3>
            </div>
          </div>
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={accountabilityImg} alt="Accountability" />
            </div>
            <div className="pillar-label">
              <span className="pillar-icon">👥</span>
              <h3>Accountability</h3>
            </div>
          </div>
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={trustImg} alt="Trust" />
            </div>
            <div className="pillar-label">
              <span className="pillar-icon">🛡️</span>
              <h3>Trust</h3>
            </div>
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
          <form className="inquiry-form" onSubmit={handleSubmit}>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="inquiry-form-group">
              <label className="inquiry-form-label">Name</label>
              <input 
                className="inquiry-form-input" 
                type="text" 
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inquiry-form-group">
              <label className="inquiry-form-label">Email Address</label>
              <input 
                className="inquiry-form-input" 
                type="email"
                name="emailAddress"
                placeholder="john.doe@example.com"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inquiry-form-group">
              <label className="inquiry-form-label">Phone Number</label>
              <input 
                className="inquiry-form-input" 
                type="tel"
                name="phoneNumber"
                placeholder="+94 77 123 4567"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {activeTab === 'wholesale' && (
              <>
                <div className="inquiry-form-group">
                  <label className="inquiry-form-label">Shop/Company Name</label>
                  <input 
                    className="inquiry-form-input" 
                    type="text"
                    name="companyName"
                    placeholder="Udawatta Tea Shop"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="inquiry-form-group">
                  <label className="inquiry-form-label">Expected Monthly Volume (Kg)</label>
                  <input 
                    className="inquiry-form-input" 
                    type="number"
                    name="expectedMonthlyVolume"
                    placeholder="100"
                    value={formData.expectedMonthlyVolume}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="inquiry-form-group">
              <label className="inquiry-form-label">Your Message *</label>
              <textarea 
                className="inquiry-form-textarea"
                name="message"
                placeholder="Please type your message here" 
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <div className="faq-section">
                <p className="faq-title">Frequently Asked Questions</p>
                {activeTab === 'private' ? (
                  <>
                    <button 
                      type="button"
                      className="faq-item"
                      onClick={() => handleFaqClick('Where are your Reserve teas sourced?')}
                    >
                      ✓ Where are your Reserve teas sourced?
                    </button>
                    <button 
                      type="button"
                      className="faq-item"
                      onClick={() => handleFaqClick('What is the best way to brew my Raga Reserve tea?')}
                    >
                      ✓ What is the best way to brew my Raga Reserve tea?
                    </button>
                    <button 
                      type="button"
                      className="faq-item"
                      onClick={() => handleFaqClick('What other products, beyond the Masala Brew, does WGM offer for export?')}
                    >
                      ✓ What other products, beyond the Masala Brew, does WGM offer for export?
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      type="button"
                      className="faq-item"
                      onClick={() => handleFaqClick('What are the minimum volume requirements for an initial wholesale order?')}
                    >
                      ✓ What are the minimum volume requirements for an initial wholesale order?
                    </button>
                    <button 
                      type="button"
                      className="faq-item"
                      onClick={() => handleFaqClick('Do you offer exclusive distribution territories or regions?')}
                    >
                      ✓ Do you offer exclusive distribution territories or regions?
                    </button>
                    <button 
                      type="button"
                      className="faq-item"
                      onClick={() => handleFaqClick('What is the typical lead time for a large-scale Reserve shipment?')}
                    >
                      ✓ What is the typical lead time for a large-scale Reserve shipment?
                    </button>
                  </>
                )}
              </div>
            </div>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </form>
          <a href="https://wa.me/94761926066" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <div className="whatsapp-text">
              <span className="whatsapp-main">Need an immediate answer?</span>
              <span className="whatsapp-sub">Chat with us on Whatsapp</span>
              <span className="whatsapp-number">+94 76 192 6066</span>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
