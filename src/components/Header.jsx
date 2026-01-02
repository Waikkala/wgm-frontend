import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logo1 from '../assets/Logo.png';

const Header = ({ title, subtitle, showCart = false, cartCount = 0, isLanding = false }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
                <button className="shop-now-btn" onClick={() => navigate('/product-detail')}>
                  Shop Now 🛒
                </button>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
            <div className="header-nav-bar">
              {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
              <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link" onClick={closeMenu}>HOME</Link>
                <Link to="/products" className="nav-link" onClick={closeMenu}>PRODUCTS</Link>
                <Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT US</Link>
                <Link to="/blog" className="nav-link" onClick={closeMenu}>BLOG</Link>
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
