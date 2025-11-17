import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ title, subtitle, showCart = false, cartCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-background"></div>
      <div className="header-content">
          <div className="logo">
              <img src="/wgm-frontend/logo.png" alt="WGM Logo" className="logo-icon" />
              <span className="logo-text">WGM</span>
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
      </div>
    </header>
  );
};

export default Header;
