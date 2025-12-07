import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logo1 from '/logo1.png';
import headerBarImg from '../assets/Headr_Bar (1440 x 60).png';

const Header = ({ title, subtitle, showCart = false, cartCount = 0, isLanding = false }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${isLanding ? 'header-landing' : ''}`}>
      <div className="header-background"></div>
      <div className="header-content">
        {isLanding ? (
          <>
            <div className="header-top">
              <div className="logo" onClick={() => navigate('/')}>
                <img src={logo1} alt="WGM Logo" className="logo-icon" />
              </div>
              <div className="header-actions">
                <button className="shop-now-btn" onClick={() => navigate('/products')}>
                  Shop Now 🛒
                </button>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
            <div 
              className="header-nav-bar" 
              style={{ 
                backgroundImage: `url(${headerBarImg}), url(/header-bar.png)` 
              }}
            >
              <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/products" className="nav-link">PRODUCTS</Link>
                <Link to="/about" className="nav-link">ABOUT US</Link>
                <Link to="/blog" className="nav-link">BLOG</Link>
              </nav>
            </div>
          </>
        ) : (
          <>
            <div className="logo" onClick={() => navigate('/')}>
              <img src={logo1} alt="WGM Logo" className="logo-icon" />
            </div>
            <div className="header-text">
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </div>
            {showCart && (
              <button className="cart-icon" onClick={() => navigate('/cart')}>
                🛒
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
