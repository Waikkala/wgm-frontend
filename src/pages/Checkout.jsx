import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const currentStep = 1; // Current step indicator
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    orderNotes: '',
    couponCode: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  const subtotal = 1500.00;
  const shipping = 250.00;
  const tax = 87.50;
  const discount = 25.0;
  const total = 1812.50;

  return (
    <div className="page-container">
      <Header 
        title="Billing & Dispatch Details" 
        subtitle="Complete Your Order for Ceylon Raga Reserve"
      />

      <main className="checkout-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="checkout-steps">
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
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

        <div className="checkout-container">
          <div className="billing-form">
            <h2>Billing Details</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+94 77 123 4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Street Address *</label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="House number and street name"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Colombo"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Province *</label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Province</option>
                    <option value="western">Western</option>
                    <option value="central">Central</option>
                    <option value="southern">Southern</option>
                    <option value="northern">Northern</option>
                    <option value="eastern">Eastern</option>
                    <option value="north-western">North Western</option>
                    <option value="north-central">North Central</option>
                    <option value="uva">Uva</option>
                    <option value="sabaragamuwa">Sabaragamuwa</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Postal Code *</label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="10100"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                  {formData.postalCode && (
                    <span className="input-check">✓</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Order Notes (Optional)</label>
                <textarea
                  name="orderNotes"
                  placeholder="Notes about your order, e.g. special delivery instructions"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

              <div className="delivery-banner">
                🚚 Island-wide Delivery
                <span>Delivery within 3-4 days</span>
              </div>
            </form>
          </div>

          <div className="order-summary-checkout">
            <h2>Order Summary</h2>
            
            <div className="summary-product">
              <div className="product-image-small">
                <div className="image-placeholder-small">
                  <span>🦌</span>
                </div>
              </div>
              <div className="product-info-small">
                <h4>Ceylon Raga Reserve</h4>
                <p className="product-subtitle-small">Masala Brew</p>
                <p className="product-meta-small">Quantity: 1 • 100g</p>
              </div>
              <div className="product-price-small">
                LKR 1,500
              </div>
            </div>

            <div className="coupon-section">
              <h3>Coupon Code</h3>
              <div className="coupon-input-group">
                <input
                  type="text"
                  name="couponCode"
                  placeholder="Enter Coupon code"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                />
                <button type="button" className="btn-apply-coupon">
                  APPLY COUPON
                </button>
              </div>
            </div>

            <div className="summary-breakdown">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>LKR {subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>LKR {shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (Estimated)</span>
                <span>LKR {tax.toFixed(2)}</span>
              </div>
              <div className="summary-row discount">
                <span>Discount</span>
                <span>- LKR {discount.toFixed(2)}</span>
              </div>
            </div>

            <div className="summary-total-checkout">
              <span>Total</span>
              <span className="total-amount">LKR {total.toFixed(2)}</span>
            </div>

            <button 
              type="submit" 
              className="btn-place-order-checkout"
              onClick={handleSubmit}
            >
              PLACE ORDER
            </button>

            <div className="secure-payment">
              🔒 Secure SSL Encrypted Payment
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
