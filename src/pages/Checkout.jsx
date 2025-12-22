import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import SimpleHeader from '../components/SimpleHeader';
import SimpleFooter from '../components/SimpleFooter';
import './Checkout.css';
import PackImage from '../assets/Pack.png';

const API_BASE_URL = 'https://rnt8sqh49g.execute-api.us-east-1.amazonaws.com';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems = [], subtotal: cartSubtotal = 0 } = location.state || {};
  const currentStep = 1; // Current step indicator
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    district: '',
    districtId: '',
    city: '',
    province: '',
    postalCode: '',
    orderNotes: '',
    couponCode: ''
  });

  const [errors, setErrors] = useState({});
  const [couponStatus, setCouponStatus] = useState({
    isValidating: false,
    isValid: false,
    isApplied: false,
    discountPercent: 0,
    message: '',
    description: ''
  });

  // State for districts and cities data
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // State for order submission
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // State for payment
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // State for reCAPTCHA
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Accepts formats like: +94771234567, 0771234567, 077-123-4567, etc.
    const phoneRegex = /^(\+94|0)?[0-9]{9,10}$/;
    const cleanPhone = phone.replace(/[\s-]/g, '');
    return phoneRegex.test(cleanPhone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If district changes, clear city selection and cities list
    if (name === 'district') {
      const selectedDistrict = districts.find(d => d.district_name === value);
      setFormData({
        ...formData,
        district: value,
        districtId: selectedDistrict ? selectedDistrict.district_id : '',
        city: '' // Clear city when district changes
      });
      setCities([]); // Clear cities list

      // Fetch cities for the selected district
      if (selectedDistrict) {
        fetchCities(selectedDistrict.district_id);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }

    // Reset coupon status when user modifies the coupon code
    if (name === 'couponCode' && couponStatus.isApplied) {
      setCouponStatus({
        isValidating: false,
        isValid: false,
        isApplied: false,
        discountPercent: 0,
        message: '',
        description: ''
      });
    }
  };

  const handleApplyCoupon = async () => {
    const code = formData.couponCode.trim();

    if (!code) {
      setCouponStatus({
        isValidating: false,
        isValid: false,
        isApplied: false,
        discountPercent: 0,
        message: 'Please enter a coupon code',
        description: ''
      });
      return;
    }

    setCouponStatus(prev => ({ ...prev, isValidating: true, message: '' }));

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/promos/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        setCouponStatus({
          isValidating: false,
          isValid: true,
          isApplied: true,
          discountPercent: data.discountPercent || 0,
          message: data.message || 'Coupon applied successfully!',
          description: data.description || ''
        });
      } else {
        setCouponStatus({
          isValidating: false,
          isValid: false,
          isApplied: false,
          discountPercent: 0,
          message: data.message || 'Invalid coupon code',
          description: ''
        });
      }
    } catch (error) {
      setCouponStatus({
        isValidating: false,
        isValid: false,
        isApplied: false,
        discountPercent: 0,
        message: 'Failed to validate coupon. Please try again.',
        description: ''
      });
      console.error('Coupon validation error:', error);
    }
  };

  // Fetch districts from API
  const fetchDistricts = async () => {
    if (districts.length > 0) return; // Already loaded

    setLoadingDistricts(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/delivery/districts`);
      const data = await response.json();

      if (response.ok && Array.isArray(data)) {
        setDistricts(data);
      } else {
        console.error('Failed to fetch districts:', data);
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
    } finally {
      setLoadingDistricts(false);
    }
  };

  // Fetch cities from API based on selected district
  const fetchCities = async (districtId) => {
    if (!districtId) return;

    setLoadingCities(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/delivery/cities?districtId=${districtId}`);
      const data = await response.json();

      if (response.ok && Array.isArray(data)) {
        setCities(data);
      } else {
        console.error('Failed to fetch cities:', data);
        setCities([]);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
      setCities([]);
    } finally {
      setLoadingCities(false);
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required';
    }
    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.province) {
      newErrors.province = 'Province is required';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmittingOrder(true);

    try {
      // Check if cart has items
      if (!cartItems || cartItems.length === 0) {
        alert('Your cart is empty. Please add items before checkout.');
        setIsSubmittingOrder(false);
        return;
      }

      // Prepare order items - map cart items to API format
      const orderItems = cartItems.map(item => ({
        productId: item.productId || 5, // Default to 5 if productId not available
        quantity: item.quantity
      }));

      // Get city ID from the selected city
      const selectedCity = cities.find(c => c.city_name === formData.city);
      const cityId = selectedCity ? String(selectedCity.city_id) : '';

      // Prepare request body
      const orderData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        customerPhone: formData.phone,
        customerAddress: formData.streetAddress,
        city: String(cityId),
        district: String(formData.districtId),
        postalCode: formData.postalCode,
        notes: formData.orderNotes || '',
        paymentMethod: 'COD',
        paymentStatus: 'PENDING',
        promoCode: couponStatus.isApplied ? formData.couponCode : '',
        deliveryTown: formData.district,
        items: orderItems
      };

      // Debug: Log the request body
      console.log('=== ORDER SUBMISSION DEBUG ===');
      console.log('Request Body:', JSON.stringify(orderData, null, 2));
      console.log('Cart Items:', cartItems);
      console.log('Order Items:', orderItems);
      console.log('============================');

      // Make API call
      const response = await fetch(`${API_BASE_URL}/api/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      // Debug: Log the response status
      console.log('=== API RESPONSE ===');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);

      // Check if response has content before parsing
      const contentType = response.headers.get('content-type');
      let data = null;

      if (contentType && contentType.includes('application/json')) {
        const text = await response.text();
        console.log('Response Text:', text);
        if (text) {
          try {
            data = JSON.parse(text);
            console.log('Parsed Response Data:', data);
          } catch (e) {
            console.error('Failed to parse JSON:', e);
            data = { message: 'Invalid JSON response from server' };
          }
        } else {
          console.warn('Empty response body');
          data = { message: 'Server returned empty response' };
        }
      } else {
        console.warn('Response is not JSON');
        const text = await response.text();
        console.log('Non-JSON Response:', text);
        data = { message: text || 'Server returned non-JSON response' };
      }
      console.log('===================');

      if (response.ok) {
        // Order created successfully
        setOrderResponse(data);
        setOrderSubmitted(true);
        setShowToast(true);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else {
        // Handle error response
        const errorMessage = data?.message || `Server error: ${response.status} ${response.statusText}`;
        console.error('Order creation failed. Status:', response.status);
        console.error('Error data:', data);
        alert(`Order Error (${response.status}): ${errorMessage}\n\nPlease check the console for details.`);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('An error occurred while placing your order. Please try again.');
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  // Use cart data from navigation state or calculate from cart items
  const subtotal = cartSubtotal || (cartItems && cartItems.length > 0 
    ? cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) 
    : 2100.00);
  // Note: Delivery charges and tax already included in product price

  // Calculate discount based on coupon
  const discount = couponStatus.isApplied
    ? (subtotal * couponStatus.discountPercent / 100)
    : 0;

  const total = subtotal - discount;

  const handlePayment = async () => {
    if (!orderResponse || !orderResponse.orderUid) {
      alert('Order ID not found. Please try again.');
      return;
    }

    setIsProcessingPayment(true);

    try {
      const paymentData = {
        orderId: orderResponse.orderUid
      };

      console.log('=== PAYMENT INITIATION DEBUG ===');
      console.log('Request Body:', JSON.stringify(paymentData, null, 2));

      const response = await fetch(`${API_BASE_URL}/api/v1/payment/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });

      console.log('Payment Response Status:', response.status);

      const contentType = response.headers.get('content-type');
      let data = null;

      if (contentType && contentType.includes('application/json')) {
        const text = await response.text();
        console.log('Payment Response Text:', text);
        if (text) {
          try {
            data = JSON.parse(text);
            console.log('Parsed Payment Response:', data);
          } catch (e) {
            console.error('Failed to parse payment JSON:', e);
            alert('Invalid response from payment gateway');
            setIsProcessingPayment(false);
            return;
          }
        }
      }

      if (response.ok && data && data.success) {
        console.log('Payment Session ID:', data.sessionId);
        console.log('Payment Amount:', data.amount);
        
        // TODO: Implement BOC payment gateway with sessionId
        alert(`Payment session created successfully!\nSession ID: ${data.sessionId}\nAmount: LKR ${data.amount}\n\nPayment gateway integration will be implemented next.`);
        
        // Store session data for next step
        // You can navigate to payment page or open payment modal here
      } else {
        const errorMessage = data?.message || 'Failed to initiate payment';
        alert(`Payment Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred while initiating payment. Please try again.');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="page-container">
      {showToast && (
        <div className="toast-notification">
          ✓ Order submitted successfully!
        </div>
      )}
      <SimpleHeader />

      {/* White Space Wrapper */}
      <div className="checkout-page-wrapper">
        {/* Checkout Banner Card */}
        <section className="checkout-banner-card">
          <div className="checkout-banner-content">
            <h1 className="checkout-banner-title">Place Your Raga Reserve Order</h1>
            <p className="checkout-banner-subtitle">Complete Your Order for Ceylon Raga Reserve</p>
          </div>
        </section>

        <main className="checkout-page">
          <div className="checkout-main-card">
            <button className="back-btn-checkout" onClick={() => navigate(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l-4 4 4 4M16 12H8" />
              </svg>
            </button>

            <div className="checkout-steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''} `}>
                <div className="step-number">1</div>
                <div className="step-label">Billing Info</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''} `}>
                <div className="step-number">2</div>
                <div className="step-label">Payment</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''} `}>
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
                        className={errors.firstName ? 'error' : ''}
                      />
                      {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={errors.lastName ? 'error' : ''}
                      />
                      {errors.lastName && <span className="error-message">{errors.lastName}</span>}
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
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label>Street Address *</label>
                    <input
                      type="text"
                      name="streetAddress"
                      placeholder="House number and street name"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className={errors.streetAddress ? 'error' : ''}
                    />
                    {errors.streetAddress && <span className="error-message">{errors.streetAddress}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>District *</label>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        onFocus={fetchDistricts}
                        className={errors.district ? 'error' : ''}
                        disabled={loadingDistricts}
                      >
                        <option value="">
                          {loadingDistricts ? 'Loading districts...' : 'Select District'}
                        </option>
                        {districts.map((district) => (
                          <option key={district.district_id} value={district.district_name}>
                            {district.district_name}
                          </option>
                        ))}
                      </select>
                      {errors.district && <span className="error-message">{errors.district}</span>}
                    </div>
                    <div className="form-group">
                      <label>City *</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={errors.city ? 'error' : ''}
                        disabled={!formData.district || loadingCities}
                      >
                        <option value="">
                          {!formData.district
                            ? 'Select district first'
                            : loadingCities
                              ? 'Loading cities...'
                              : 'Select City'}
                        </option>
                        {cities.map((city) => (
                          <option key={city.city_id} value={city.city_name}>
                            {city.city_name}
                          </option>
                        ))}
                      </select>
                      {errors.city && <span className="error-message">{errors.city}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Province *</label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className={errors.province ? 'error' : ''}
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
                      {errors.province && <span className="error-message">{errors.province}</span>}
                    </div>
                    <div className="form-group">
                      <label>Postal Code *</label>
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="10100"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={errors.postalCode ? 'error' : ''}
                      />
                      {formData.postalCode && !errors.postalCode && (
                        <span className="input-check">✓</span>
                      )}
                      {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
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

                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div key={index} className="summary-product">
                      <div className="product-image-small">
                        <img src={PackImage} alt={item.name || 'Product'} />
                      </div>
                      <div className="product-info-small">
                        <h4>{item.name || 'Ceylon Raga Reserve'}</h4>
                        <p className="product-subtitle-small">{item.subtitle || 'Masala Brew'}</p>
                        <p className="product-meta-small">Quantity: {item.quantity} • {item.weight}</p>
                      </div>
                      <div className="product-price-small">
                        LKR {(item.price * item.quantity).toLocaleString('en-LK', { minimumFractionDigits: 0 })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="summary-product">
                    <div className="product-image-small">
                      <img src={PackImage} alt="Ceylon Raga Reserve" />
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
                )}

                <div className="coupon-section">
                  <h3>Coupon Code</h3>
                  <div className="coupon-input-group">
                    <input
                      type="text"
                      name="couponCode"
                      placeholder="Enter Coupon code"
                      value={formData.couponCode}
                      onChange={handleInputChange}
                      disabled={couponStatus.isValidating}
                      className={couponStatus.isApplied ? 'coupon-applied' : ''}
                    />
                    <button
                      type="button"
                      className="btn-apply-coupon"
                      onClick={handleApplyCoupon}
                      disabled={couponStatus.isValidating || !formData.couponCode.trim()}
                    >
                      {couponStatus.isValidating ? 'VALIDATING...' : 'APPLY COUPON'}
                    </button>
                  </div>
                  {couponStatus.message && (
                    <div className={`coupon - message ${couponStatus.isValid ? 'success' : 'error'} `}>
                      {couponStatus.message}
                      {couponStatus.description && (
                        <span className="coupon-description"> - {couponStatus.description}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="summary-breakdown">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>LKR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-note">
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>* Delivery charges included in price</span>
                  </div>
                  {discount > 0 && (
                    <div className="summary-row discount">
                      <span>Discount ({couponStatus.discountPercent}%)</span>
                      <span>- LKR {discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="summary-total-checkout">
                  <span>Total</span>
                  <span className="total-amount">LKR {total.toFixed(2)}</span>
                </div>

                <div className="recaptcha-container">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptchaChange}
                    theme="light"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-checkout"
                  onClick={handleSubmit}
                  disabled={isSubmittingOrder || !recaptchaToken || orderSubmitted}
                >
                  {isSubmittingOrder ? 'PLACING ORDER...' : orderSubmitted ? 'ORDER SUBMITTED ✓' : 'CHECKOUT'}
                </button>

                {orderSubmitted && (
                  <button
                    type="button"
                    className="btn-pay"
                    onClick={handlePayment}
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? 'PROCESSING...' : 'PAY NOW'}
                  </button>
                )}

                <p className="refund-policy">
                  By placing your order, you agree to our <Link to="/refund-policy">Refund & Return Policy</Link>
                </p>

                <div className="payment-methods">
                  🔒 Secure SSL Encrypted Payment
                  <div className="payment-icons">
                    <span className="payment-icon">💳</span>
                    <span className="payment-icon">🏦</span>
                    <span className="payment-icon">💰</span>
                    <span className="payment-icon">💵</span>
                    <span className="payment-icon">📱</span>
                    <span className="payment-icon">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default Checkout;
