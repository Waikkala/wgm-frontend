import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter, FaLinkedin, FaPinterest, FaThreads } from 'react-icons/fa6';
import logo from '../assets/Logo.png';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="WGM Logo" className="logo-icon" />
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
              <Link to="/products" className="footer-link">Products</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="contact-info">
              <p>Waikkala, Sri Lanka</p>
              <p className="contact-email">info@wgm.lk</p>
              <p className="contact-phone">+94 76 182 6066</p>
            </div>
          </div>

          <div className="footer-social">
            <h3 className="footer-heading">Follow us on</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaXTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaPinterest />
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaThreads />
              </a>
            </div>
            <div className="boc-payment-badge">
              <p className="boc-badge-title">Official Payment Gateway Partner</p>
              <div className="boc-badge-logos">
                <img src="/Bank_of_Ceylon.png" alt="Bank of Ceylon" className="boc-logo-img" />
                <div className="boc-ipg-logo">
                  <span className="boc-text">BOC</span>
                  <span className="ipg-text">iPG</span>
                  <span className="tagline">Enabling you</span>
                </div>
                <img src={f1} alt="Payment Method" className="payment-method-icon" />
                <img src={f2} alt="Payment Method" className="payment-method-icon" />
                <img src={f3} alt="Payment Method" className="payment-method-icon" />
                <img src={f4} alt="Payment Method" className="payment-method-icon" />
              </div>
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
