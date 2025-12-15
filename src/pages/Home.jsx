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

const API_BASE_URL = 'http://54.226.87.105:8080';

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

      {/* Decorative Separator Bar */}
      <div className="decorative-separator"></div>

      {/* Product Showcase Section */}
      <section className="product-showcase-wrapper">
        {/* Decorative Separator Bar */}
        <div className="decorative-separator"></div>
        
        <div className="product-showcase">
          <div className="showcase-container">
            <div className="showcase-image-wrapper">
              <img src={ragaReserveImg} alt="Ceylon Raga Reserve Product" className="showcase-product-image" />
            </div>
            <div className="showcase-content">
              <div className="showcase-title-row">
                <h2 className="showcase-title">Ceylon Raga Reserve</h2>
                <Link to="/product-detail" className="btn-buy-now-corner">BUY NOW</Link>
              </div>
              <p className="showcase-tagline">Masala Brew - Anytime Energy. Everyday Luxury.</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Separator Bar */}
        <div className="decorative-separator"></div>
        
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
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22V12M12 12C12 9 10 7 8 5M12 12C12 9 14 7 16 5" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 5C8 5 6 6 6 8C6 10 8 11 10 12" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 5C16 5 18 6 18 8C18 10 16 11 14 12" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11H22M2 11L4 9M22 11L20 9M2 11L4 13M22 11L20 13" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7" cy="11" r="1.5" fill="#d4a574"/>
              <circle cx="12" cy="11" r="1.5" fill="#d4a574"/>
              <circle cx="17" cy="11" r="1.5" fill="#d4a574"/>
              <path d="M19 5L17 7H7L5 5H19Z" stroke="#d4a574" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="17" r="3.5" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
              <path d="M20 15V19M18 17H22" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
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
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
              <path d="M3 12H21M12 3C14.5 5.5 16 8.5 16 12C16 15.5 14.5 18.5 12 21M12 3C9.5 5.5 8 8.5 8 12C8 15.5 9.5 18.5 12 21" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
              <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
            </svg>
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
                <li>👩🏽‍🌾 Empowering women.</li>
              <li>💼 Fostering female entrepreneurship.</li>
            </ul>
            <Link to="/product-detail" className="btn-buy-now">BUY NOW</Link>
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
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="9" r="6" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
                <path d="M12 5L13 7.5L15.5 8L13 10L13.5 12.5L12 11L10.5 12.5L11 10L8.5 8L11 7.5L12 5Z" fill="#d4a574"/>
                <path d="M8 13L7 22L12 19L17 22L16 13" stroke="#d4a574" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Quality</h3>
            </div>
          </div>
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={sustainabilityImg} alt="Sustainability" />
            </div>
            <div className="pillar-label">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" fill="#d4a574"/>
              </svg>
              <h3>Sustainability</h3>
            </div>
          </div>
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={accountabilityImg} alt="Accountability" />
            </div>
            <div className="pillar-label">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#d4a574"/>
              </svg>
              <h3>Accountability</h3>
            </div>
          </div>
          <div className="pillar-card">
            <div className="pillar-image">
              <img src={trustImg} alt="Trust" />
            </div>
            <div className="pillar-label">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="#d4a574"/>
              </svg>
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
          <a href="https://wa.me/94761826066" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <div className="whatsapp-text">
              <span className="whatsapp-main">Need an immediate answer?</span>
              <span className="whatsapp-sub">Chat with us on Whatsapp</span>
              <span className="whatsapp-number">+94 76 182 6066</span>
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
