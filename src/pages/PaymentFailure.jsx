import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './PaymentSuccess.css';

const PaymentFailure = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [failureReason, setFailureReason] = useState('');

  useEffect(() => {
    // Get failure reason from URL parameters
    const reason = searchParams.get('reason') || 'Payment was not completed';
    const orderId = searchParams.get('orderId');
    
    setFailureReason(reason);

    console.log('=== PAYMENT FAILURE ===');
    console.log('Order ID:', orderId);
    console.log('Reason:', reason);
  }, [searchParams]);

  return (
    <div className="page-container">
      <SimpleHeader />
      <div className="payment-status-wrapper">
        <div className="payment-status-card failure">
          <div className="status-icon failure-icon">✕</div>
          <h2>Payment Failed</h2>
          <p className="failure-message">
            {failureReason}
          </p>

          <div className="failure-info">
            <h3>What happened?</h3>
            <ul>
              <li>Your payment could not be processed</li>
              <li>No charges have been made to your account</li>
              <li>Your order is still pending</li>
            </ul>
          </div>

          <div className="failure-actions">
            <button className="btn-primary" onClick={() => navigate('/checkout')}>
              Try Again
            </button>
            <button className="btn-secondary" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>

          <div className="help-section">
            <p className="help-text">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@ceylonragareserve.com">support@ceylonragareserve.com</a>
            </p>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default PaymentFailure;
