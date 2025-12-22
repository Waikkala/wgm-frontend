import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './PaymentSuccess.css';

const API_BASE_URL = 'https://rnt8sqh49g.execute-api.us-east-1.amazonaws.com';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get parameters from URL
        const orderId = searchParams.get('orderId');
        const sessionId = searchParams.get('sessionId');
        const resultIndicator = searchParams.get('resultIndicator');

        if (!orderId || !sessionId) {
          setError('Invalid payment confirmation. Missing required parameters.');
          setIsVerifying(false);
          return;
        }

        console.log('=== PAYMENT VERIFICATION ===');
        console.log('Order ID:', orderId);
        console.log('Session ID:', sessionId);
        console.log('Result Indicator:', resultIndicator);

        // Verify payment with backend
        const response = await fetch(`${API_BASE_URL}/api/v1/payment/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId,
            sessionId,
            resultIndicator
          })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setOrderDetails({
            orderId: data.orderId,
            amount: data.amount,
            transactionId: data.transactionId,
            paymentStatus: data.paymentStatus
          });
        } else {
          setError(data.message || 'Payment verification failed');
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        setError('Failed to verify payment. Please contact support.');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (isVerifying) {
    return (
      <div className="page-container">
        <SimpleHeader />
        <div className="payment-status-wrapper">
          <div className="payment-status-card">
            <div className="loading-spinner"></div>
            <h2>Verifying Payment...</h2>
            <p>Please wait while we confirm your payment.</p>
          </div>
        </div>
        <SimpleFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <SimpleHeader />
        <div className="payment-status-wrapper">
          <div className="payment-status-card error">
            <div className="status-icon error-icon">✕</div>
            <h2>Payment Verification Failed</h2>
            <p>{error}</p>
            <button className="btn-primary" onClick={() => navigate('/checkout')}>
              Try Again
            </button>
          </div>
        </div>
        <SimpleFooter />
      </div>
    );
  }

  return (
    <div className="page-container">
      <SimpleHeader />
      <div className="payment-status-wrapper">
        <div className="payment-status-card success">
          <div className="status-icon success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p className="success-message">
            Thank you for your order. Your payment has been processed successfully.
          </p>

          {orderDetails && (
            <div className="order-details">
              <h3>Order Details</h3>
              <div className="detail-row">
                <span className="label">Order ID:</span>
                <span className="value">{orderDetails.orderId}</span>
              </div>
              <div className="detail-row">
                <span className="label">Amount Paid:</span>
                <span className="value">LKR {orderDetails.amount?.toLocaleString('en-LK')}</span>
              </div>
              {orderDetails.transactionId && (
                <div className="detail-row">
                  <span className="label">Transaction ID:</span>
                  <span className="value">{orderDetails.transactionId}</span>
                </div>
              )}
              <div className="detail-row">
                <span className="label">Status:</span>
                <span className="value status-badge">{orderDetails.paymentStatus}</span>
              </div>
            </div>
          )}

          <div className="success-actions">
            <button className="btn-primary" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
            <button className="btn-secondary" onClick={() => navigate('/orders')}>
              View Orders
            </button>
          </div>

          <p className="confirmation-note">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default PaymentSuccess;
