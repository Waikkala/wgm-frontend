import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData } = location.state || {};
  const currentStep = 3;

  useEffect(() => {
    // If no order data, redirect to home
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      <Header 
        title="Complete Your Raga Order" 
        subtitle=""
      />

      <main className="confirmation-page">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>

        <div className="checkout-steps">
          <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Billing Info</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep >= 2 ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Payment</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Confirmation</div>
          </div>
        </div>

        <div className="confirmation-container">
          <div className="confirmation-card">
            <div className="confirmation-header">
              <img src="/wgm-frontend/2.png" alt="Background" className="confirmation-bg" />
              <img src="/wgm-frontend/logo.png" alt="WGM Logo" className="confirmation-logo" />
            </div>

            <div className="confirmation-content">
              <div className="success-image-container">
                <img src="/wgm-frontend/1.png" alt="Order Confirmed" className="success-image" />
                <div className="success-badge">
                  <img src="/wgm-frontend/3.png" alt="Success" className="checkmark" />
                </div>
              </div>

              <h2 className="success-title">PAYMENT SUCCESSFUL!</h2>

              <div className="order-details">
                <p className="order-message">
                  Your order has been confirmed and will be delivered within 3-4 business days.
                </p>
                <p className="order-number">
                  Order Number: <strong>#{Math.floor(Math.random() * 1000000)}</strong>
                </p>
                <p className="confirmation-email">
                  A confirmation email has been sent to your registered email address.
                </p>
              </div>

              <button 
                className="btn-continue-shopping"
                onClick={handleContinueShopping}
              >
                CONTINUE SHOPPING
              </button>

              <div className="thank-you-message">
                <p>Thank you for choosing</p>
                <p className="brand-name">WAIKKALA GRINDING MILLS</p>
                <p className="tagline">Imperial Harvest</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confirmation;
