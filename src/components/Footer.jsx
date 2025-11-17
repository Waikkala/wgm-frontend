import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo-icon">🦌</div>
          <span className="logo-text">WGM</span>
        </div>
        <h3 className="footer-title">WAIKKALA GRINDING MILLS</h3>
        <p className="footer-description">
          At Waikkala Grinding Mills (WGM), we take pride in being one of Sri Lanka's most trusted names in premium spices, grains, and herbal products.
        </p>
        <p className="footer-tagline">
          Waikkala Grinding Mills - Where Tradition Meets Global Standards.
        </p>
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Facebook">f</a>
          <a href="#" className="social-icon" aria-label="Instagram">📷</a>
          <a href="#" className="social-icon" aria-label="YouTube">▶</a>
          <a href="#" className="social-icon" aria-label="Phone">📞</a>
        </div>
        <p className="footer-copyright">
          Copyright 2025 © Waikkala Grinding Mills. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
