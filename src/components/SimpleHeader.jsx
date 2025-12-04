import { useNavigate } from 'react-router-dom';
import './SimpleHeader.css';

const SimpleHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="simple-header">
      <div className="simple-header-background"></div>
      <div className="simple-header-content">
        <div className="simple-logo" onClick={() => navigate('/')}>
          <img src="/wgm-frontend/logo1.png" alt="WGM Logo" className="simple-logo-icon" />
        </div>
        <div className="simple-header-text">
          <p>⭐ Premium Quality Guaranteed</p>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
