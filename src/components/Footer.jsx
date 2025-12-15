import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter, FaLinkedin, FaPinterest, FaThreads } from 'react-icons/fa6';
import logo from '../assets/Logo.png';

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
            <h3 className="footer-heading">Contact us</h3>
            <div className="contact-info">
              <p>Waikkala Grinding Mills Pvt Ltd,</p>
              <p>Seetha Villa, Waikkala,</p>
              <p>Sri Lanka.</p>
              <p className="contact-phone">+ 94 76 182 6066</p>
              <p className="contact-phone">+ 94 76 409 3287</p>
              <p className="contact-email">Info@wgm.lk</p>
              <p className="contact-email">Marketing@wgm.lk</p>
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
