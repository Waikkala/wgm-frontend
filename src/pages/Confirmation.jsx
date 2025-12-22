import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SimpleHeader from "../components/SimpleHeader";
import SimpleFooter from "../components/SimpleFooter";
import "./Confirmation.css";
import logo from "../assets/Logo.png";
import img1 from "/1.png";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData } = location.state || {};
  const currentStep = 3;

  useEffect(() => {
    // If no order data, redirect to home
    if (!orderData) {
      navigate("/");
    }
  }, [orderData, navigate]);

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleDownloadDetails = () => {
    // Implement download functionality
    alert("Download functionality will be implemented");
  };

  const handleEmailDetails = () => {
    // Implement email functionality
    alert("Email functionality will be implemented");
  };

  return (
    <div className="page-container">
      <SimpleHeader />

      {/* White Space Wrapper */}
      <div className="confirmation-page-wrapper">
        {/* Confirmation Banner Card */}
        <section className="confirmation-banner-card">
          <div className="confirmation-banner-content">
            <h1 className="confirmation-banner-title">
              Complete Your Raga Reserve Order
            </h1>
          </div>
        </section>

        <main className="confirmation-page">
          <div className="confirmation-main-card">
            <div className="checkout-steps">
              <div className={`step ${currentStep >= 1 ? "completed" : ""}`}>
                <div className="step-number">1</div>
                <div className="step-label">Billing Info</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 2 ? "completed" : ""}`}>
                <div className="step-number">2</div>
                <div className="step-label">Payment</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                <div className="step-number">3</div>
                <div className="step-label">Confirmation</div>
              </div>
            </div>

            <div className="confirmation-container">
              <div className="confirmation-card">
                {/* Card content with image background */}
                <div className="confirmation-visual">
                  {/* Top section with logo */}
                  <div className="confirmation-top">
                    <img
                      src={logo}
                      alt="WGM Logo"
                      className="confirmation-logo-top"
                    />
                    <p className="imperial-text">IMPERIAL HARVEST</p>
                  </div>

                  {/* Main deer character image */}
                  <div className="deer-character-section">
                    <img
                      src={img1}
                      alt="Success Character"
                      className="deer-character"
                    />
                  </div>

                  {/* Success badge with checkmark */}
                  <div className="success-badge">
                    <svg viewBox="0 0 100 100" width="90" height="90">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="#1a4d3a"
                        stroke="#FFD700"
                        strokeWidth="4"
                      />
                      <path
                        d="M30 50 L45 65 L70 35"
                        stroke="#FFD700"
                        strokeWidth="7"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Success title */}
                  <h2 className="success-title">PAYMENT SUCCESSFUL !</h2>

                  {/* Three dots */}
                  <div className="dots-indicator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>

                  {/* Action buttons */}
                  <div className="confirmation-buttons">
                    <button
                      className="btn-download"
                      onClick={handleDownloadDetails}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      DOWNLOAD DETAILS
                    </button>
                    <button className="btn-email" onClick={handleEmailDetails}>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      EMAIL DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-back-home" onClick={handleContinueShopping}>
              Back to Home
            </button>
          </div>
        </main>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default Confirmation;
