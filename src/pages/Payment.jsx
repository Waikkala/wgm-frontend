import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData } = location.state || {};
  const currentStep = 2;

  const [cardData, setCardData] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.replace(/\s/g, '').length > 16) return;
    }

    // Format expiry date as MM/YY
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      }
      if (formattedValue.length > 5) return;
    }

    // Limit CVV to 3 digits
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setCardData({
      ...cardData,
      [name]: formattedValue
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!cardData.nameOnCard.trim()) {
      newErrors.nameOnCard = 'Name on card is required';
    }

    const cardNumberClean = cardData.cardNumber.replace(/\s/g, '');
    if (!cardNumberClean) {
      newErrors.cardNumber = 'Card number is required';
    } else if (cardNumberClean.length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!cardData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (cardData.cvv.length !== 3) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    if (!cardData.expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (cardData.expiryDate.length !== 5) {
      newErrors.expiryDate = 'Invalid expiry date';
    } else {
      const [month, year] = cardData.expiryDate.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      if (parseInt(month) < 1 || parseInt(month) > 12) {
        newErrors.expiryDate = 'Invalid month';
      } else if (parseInt(year) < currentYear || 
                (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        newErrors.expiryDate = 'Card has expired';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/confirmation', {
        state: {
          orderData: orderData,
          paymentData: cardData
        }
      });
    }, 2000);
  };

  const total = orderData?.total || 1700.00;

  return (
    <div className="page-container">
      <SimpleHeader />

      <main className="payment-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="checkout-steps">
          <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Billing Info</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Payment</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Confirmation</div>
          </div>
        </div>

        <div className="payment-container">
          <div className="payment-card">
            <div className="card-header">
              <img src="/wgm-frontend/2.png" alt="Card Background" className="card-bg" />
              <img src="/wgm-frontend/logo.png" alt="WGM Logo" className="card-logo" />
            </div>

            <div className="card-form">
              <div className="card-type-header">
                <span className="back-arrow">←</span>
                <span className="card-type-title">CREDIT/DEBIT CARD</span>
              </div>

              <form onSubmit={handlePayment}>
                <div className="form-group">
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on Card"
                    value={cardData.nameOnCard}
                    onChange={handleInputChange}
                    className={errors.nameOnCard ? 'error' : ''}
                  />
                  {errors.nameOnCard && <span className="error-message">{errors.nameOnCard}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Credit Card Number"
                    value={cardData.cardNumber}
                    onChange={handleInputChange}
                    className={errors.cardNumber ? 'error' : ''}
                  />
                  {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group cvv-group">
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={cardData.cvv}
                      onChange={handleInputChange}
                      className={errors.cvv ? 'error' : ''}
                    />
                    <span className="cvv-icon">?</span>
                    {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Expiry MM/YY"
                      value={cardData.expiryDate}
                      onChange={handleInputChange}
                      className={errors.expiryDate ? 'error' : ''}
                    />
                    {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-pay"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'PROCESSING...' : `Pay LKR ${total.toFixed(2)}`}
                </button>
              </form>

              <div className="payment-footer">
                <div className="secured-by">
                  <span className="lock-icon">🔒</span>
                  <span>Secured by</span>
                </div>
                <div className="payhere-logo-container">
                  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="40" rx="4" fill="#FF6B00"/>
                    <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">PayHere</text>
                  </svg>
                </div>
                <p className="payment-disclaimer">
                  Central Bank approved Secure Payment Gateway Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default Payment;
