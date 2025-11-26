import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BlogView.css';

const BlogView = ({ cartCount = 0 }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog data - in real app, fetch based on id
  const blogPost = {
    id: id,
    title: "From Crop to Cup: Our Handpicked Quality",
    author: "Treeny Wilson",
    date: "November 30, 2025",
    image: "/blog1.jpg",
    content: [
      "At Raga Reserve, the journey of our exquisite Masala Brew begins long before the first aromatic steam rises from your cup. It starts in the verdant, sun-drenched estates of Ceylon, where the very soil whispers tales of rich heritage and meticulous cultivation. Our philosophy centers on \"Handpicked Quality,\" a commitment that translates into an unwavering dedication to traditional methods. Unlike mass-produced alternatives, every single tea leaf destined for a Raga Reserve blend is carefully selected by skilled hands, preserving the delicate integrity and nuanced flavors that machine harvesting simply cannot achieve. This intimate connection to the land and its bounty ensures that only the finest, most tender leaves make it into our distinguished blends.",
      "This dedication to handpicking is more than just a technique; it is a promise of unparalleled quality, a foundational pillar that defines the Raga Reserve experience. Each leaf, once expertly gathered, embarks on a precise journey through our advanced processing facilities, where modern innovation perfectly complements age-old wisdom. Here, under stringent global standards, the raw essence of Ceylon's finest teas and spices is transformed into the refined Masala Brew you cherish. From the careful selection at origin to the final packaging, every step is infused with a passion for excellence, culminating in a product that not only delights the senses but also embodies our profound respect for nature, tradition, and uncompromising quality."
    ]
  };

  return (
    <div className="blog-view-page">
      <Header cartCount={cartCount} isLanding={true} />
      
      <main className="blog-view-main">
        <article className="blog-view-container">
          <h1 className="blog-view-title">{blogPost.title}</h1>
          
          <div className="blog-view-meta">
            <div className="blog-view-author">
              <div className="author-avatar-large"></div>
              <span>{blogPost.author}</span>
            </div>
            <span className="blog-view-date">{blogPost.date}</span>
          </div>

          <div className="blog-view-image">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="blog-view-content">
            {blogPost.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogView;
