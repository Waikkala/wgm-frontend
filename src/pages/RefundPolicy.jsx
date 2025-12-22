import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './RefundPolicy.css';
import logo from '../assets/Logo.png';
import headerBar from '../assets/Headr_Bar (1440 x 60).png';

const RefundPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="refund-policy-wrapper">
            <div className="refund-policy-page">
                <div className="refund-header">
                    <img src={headerBar} alt="Header Bar" className="header-bar-bg" />
                    <div className="refund-header-content">
                        <div className="refund-logo-box" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <img src={logo} alt="WGM Logo" className="refund-logo" />
                        </div>
                        <h1 className="refund-title">Refund & Return Policy of Waikkala Grinding Mills Pvt Ltd</h1>
                        <button className="btn-return-home" onClick={() => navigate('/')}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Return to Home
                        </button>
                    </div>
                </div>

                <div className="refund-content">
                    <div className="refund-container">
                        <h2 className="refund-subtitle">Waikkala Grinding Mill - Spice Boutique</h2>

                        <p className="refund-intro">
                            At Waikkala Grinding Mill, we take pride in the quality and freshness of our products.
                            Every spice, blend, and herbal product is carefully prepared and packed to ensure you
                            receive only the best. However, if you are not completely satisfied with your purchase,
                            we're here to help.
                        </p>

                        <section className="policy-section">
                            <h3>1. Eligibility for Returns & Refunds</h3>
                            <p>We accept returns or refund requests under the following conditions:</p>
                            <ul>
                                <li>The product is damaged, defective, or incorrect upon delivery.</li>
                                <li>The product is unopened, unused, and in its original packaging.</li>
                                <li>The request is made within 7 days of delivery.</li>
                            </ul>
                            <p className="note">
                                Please note that due to the perishable nature of food and spice products, we cannot accept
                                returns or exchanges once the packaging has been opened.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h3>2. Non-Returnable Items</h3>
                            <p>We do not accept returns or issue refunds for:</p>
                            <ul>
                                <li>Products that have been opened or partially used.</li>
                                <li>Products damaged due to improper handling or storage by the customer.</li>
                                <li>International or promotional item (unless defective).</li>
                            </ul>
                        </section>

                        <section className="policy-section">
                            <h3>3. Refund Process</h3>
                            <p>If your refund request is approved:</p>
                            <ul>
                                <li>You will receive a replacement product or a full refund to your original payment method within 7-10 business days.</li>
                                <li>Refunds will be processed only after we receive and inspect the returned item (if applicable).</li>
                            </ul>
                        </section>

                        <section className="policy-section">
                            <h3>4. How to Request a Refund</h3>
                            <p>Please contact us through any of the following:</p>
                            <div className="policy-contact-info">
                                <p><strong>Email:</strong> admin@wgm.lk</p>
                                <p><strong>Phone:</strong> +94762409287</p>
                                <p><strong>Address:</strong> Waikkala Grinding Mill - Spice Boutique, Sitha Villa, Waikkala, Sri Lanka, 61110</p>
                            </div>
                            <p className="contact-note">When contacting us, please provide:</p>
                            <ol>
                                <li>Your order number</li>
                                <li>A brief description of the issue</li>
                                <li>Photographs of the damaged or incorrect item (if applicable)</li>
                            </ol>
                        </section>

                        <section className="policy-section">
                            <h3>5. Shipping Costs</h3>
                            <p>
                                If the return is due to our error (wrong or damaged item), we will cover the return
                                shipping costs.
                            </p>
                            <p>
                                For other reasons, the customer will be responsible for shipping fees.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h3>6. International Orders</h3>
                            <p>
                                For international customers, refund and return eligibility may vary depending on customs
                                regulations and shipping conditions. Please contact us for assistance before returning any
                                products.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h3>7. Contact Us</h3>
                            <p>If you have any questions about our refund or return policy, please reach out to:</p>
                            <div className="policy-contact-info-final">
                                <p className="contact-item">
                                    <span className="icon">📧</span> admin@wgm.lk
                                </p>
                                <p className="contact-item">
                                    <span className="icon">📞</span> +94 76 240 9287
                                </p>
                                <p className="contact-item">
                                    <span className="icon">📍</span> Waikkala Grinding Mill - Spice Boutique, Sitha Villa, Waikkala, Sri Lanka, 61110
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RefundPolicy;
