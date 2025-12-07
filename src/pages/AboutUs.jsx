import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutUs.css';
import founderImg from '../assets/man.png';

const AboutUs = ({ cartCount = 0 }) => {

  return (
    <div className="about-us-page">
      <Header cartCount={cartCount} isLanding={true} />
      
      <main className="about-us-main">
        <div className="about-us-container">
          <h1 className="about-us-title">Waikkala Grinding Mills (Pvt) Ltd</h1>
          <h2 className="about-us-subtitle">Company & Founder Profile</h2>
          
          <p className="about-us-intro">
            Waikkala Grinding Mills (Pvt) Ltd stands as a proudly Sri Lankan brand dedicated to producing high-quality, hygienically 
            processed spices and traditional blends. Built on a commitment to purity, authenticity, and craftsmanship, the company 
            has grown into a trusted name for premium Ceylon spices both locally and internationally.
          </p>

          <div className="founder-section">
            <div className="founder-card">
              <div className="founder-image-wrapper">
                <img 
                  src={founderImg} 
                  alt="Founder Mr. Kalpana Rodrigo" 
                  className="founder-image"
                />
              </div>
              
              <h3 className="founder-name">Founder: Mr. Kalpana Rodrigo</h3>
              
              <p className="founder-description">
                The company was founded by Kalpana Rodrigo, whose engineering, 
                management, and process excellence background shapes the 
                brand's high standards.
              </p>
              
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="founder-bio">
            <p>
              Kalpana is a BSc Engineering graduate from the University of Peradeniya, holds an MBA in Project Management from Cardiff Metropolitan University (UK), 
              completed executive education at the National University of Singapore, and is a Lean Six Sigma Black Belt. Schooled at Maris Stella College, Negombo, he later 
              held senior management roles at MAS Intimates, Hela Clothing, Brandix, Vogue.ex, and several other organizations.
            </p>
            
            <p>
              His spice recipes were inspired by experiences working in India and travelling across Sri Lanka, where he explored diverse regional flavours. Today, Waikkala 
              Grinding Mills reflects his passion for purity, quality, and authentic Sri Lankan taste.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
