import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './PaymentSuccess.css';

const PaymentFailure = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get failure reason directly from URL parameters
  const reason = searchParams.get('reason') || 'Payment was not completed';
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    console.log('=== PAYMENT FAILURE ===');
    console.log('Order ID:', orderId);
    console.log('Reason:', reason);
  }, [orderId, reason]);

  return (
    <div className="page-container">
      <SimpleHeader />
      <div className="payment-status-wrapper payment-failure-wrapper">
        <div className="payment-status-card failure">
          <div className="status-icon failure-icon">✕</div>
          <h2>Payment Failed</h2>
          <p className="failure-message">
            {reason}
          </p>

          <div className="failure-info">
            <h3>What happened?</h3>
            <ul>
              <li>Your payment could not be processed</li>
              <li>No charges have been made to your account</li>
              <li>Your order is still pending</li>
            </ul>
          </div>

          <button className="btn-home" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default PaymentFailure;
