import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/wgm-frontend/logo1.png" alt="WGM Logo" className="logo-icon" />
            </div>
            <p className="footer-description">
              Waikkala Grinding Mills Pvt Ltd - Delivering safe, high-quality, 
              and affordable food rooted in Sri Lankan heritage, elevated to 
              international standards since 2025.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/product" className="footer-link">Products</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="contact-info">
              <p>Waikkala, Sri Lanka</p>
              <p>info@wgm.lk</p>
              <p>+94 76 182 6066</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Waikkala Grinding Mills Pvt Ltd. All rights reserved. Blending heritage with innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
