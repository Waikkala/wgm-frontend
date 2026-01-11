import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './PaymentSuccess.css';

const API_BASE_URL = 'https://rnt8sqh49g.execute-api.us-east-1.amazonaws.com';

const PaymentSuccess = ({ clearCart }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Clear the cart when payment success page loads
    if (clearCart) {
      clearCart();
    }
    
    const loadOrderDetails = async () => {
      try {
        // Log all URL parameters for debugging
        console.log('=== PAYMENT SUCCESS PAGE LOADED ===');
        const allParams = {};
        for (const [key, value] of searchParams.entries()) {
          allParams[key] = value;
          console.log(`${key}:`, value);
        }
        console.log('========================');

        // Try to get order details from URL parameters
        const orderId = searchParams.get('orderId') || searchParams.get('orderid') || searchParams.get('order_id');
        const sessionId = searchParams.get('sessionId') || searchParams.get('session') || searchParams.get('session_id');
        const resultIndicator = searchParams.get('resultIndicator') || searchParams.get('result');

        // Try to get from sessionStorage
        const storedOrderId = sessionStorage.getItem('lastOrderId');
        const storedAmount = sessionStorage.getItem('lastOrderAmount');

        // If we have URL parameters, try to verify with backend
        if (orderId && sessionId) {
          console.log('=== ATTEMPTING BACKEND VERIFICATION ===');
          console.log('Order ID:', orderId);
          console.log('Session ID:', sessionId);
          
          try {
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
              setIsLoading(false);
              return;
            }
          } catch (err) {
            console.log('Backend verification failed, using stored data:', err);
          }
        }

        // Fallback: Use stored data or URL parameters
        const finalOrderId = orderId || storedOrderId;
        const finalAmount = storedAmount ? parseFloat(storedAmount) : null;

        if (finalOrderId) {
          console.log('Using order data - ID:', finalOrderId, 'Amount:', finalAmount);
          setOrderDetails({
            orderId: finalOrderId,
            amount: finalAmount,
            transactionId: null,
            paymentStatus: 'SUCCESS'
          });
        } else {
          console.log('No order details found, showing generic success');
          // Even without order details, show success
          setOrderDetails({
            orderId: 'N/A',
            amount: null,
            transactionId: null,
            paymentStatus: 'SUCCESS'
          });
        }
      } catch (err) {
        console.error('Error loading order details:', err);
        // Still show success even if there's an error
        setOrderDetails({
          orderId: 'N/A',
          amount: null,
          transactionId: null,
          paymentStatus: 'SUCCESS'
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadOrderDetails();
  }, [searchParams, clearCart]);

  if (isLoading) {
    return (
      <div className="page-container">
        <SimpleHeader />
        <div className="payment-status-wrapper">
          <div className="payment-status-card">
            <div className="loading-spinner"></div>
            <h2>Loading...</h2>
            <p>Please wait a moment.</p>
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
        <div className="payment-success-card">
          <div className="success-card-inner">
            <div className="success-header">
              <div className="brand-logo">
                <div className="antler-icon">🦌</div>
                <div className="brand-text">WGM</div>
                <div className="brand-subtitle">IMPERIAL HARVEST</div>
              </div>
            </div>

            <div className="success-content">
              <div className="deer-illustration">
                <div className="deer-character">🦌</div>
              </div>
              
              <h1 className="success-title">PAYMENT SUCCESSFUL!</h1>
              
              {orderDetails && orderDetails.orderId !== 'N/A' && (
                <div className="order-info-compact">
                  <p>Order #{orderDetails.orderId}</p>
                  {orderDetails.amount && (
                    <p>Amount: LKR {orderDetails.amount?.toLocaleString('en-LK')}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          <button className="btn-home" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default PaymentSuccess;
