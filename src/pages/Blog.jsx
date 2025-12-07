import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blog.css';
import blogSA1 from '../assets/blogSA1.jpg';
import blogSA1Png from '../assets/blogSA (1).png';
import blogSA2 from '../assets/blogSA (2).png';
import blogSA3 from '../assets/blogSA (3).png';
import blogSA4 from '../assets/blogSA (4).png';
import blogSA5 from '../assets/blogSA (5).png';
import blogSA6 from '../assets/blogSA (6).png';
import blogSA7 from '../assets/blogSA (7).png';

const Blog = ({ cartCount = 0 }) => {
  const navigate = useNavigate();
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Different person icons for different authors
  const getAuthorIcon = (authorName) => {
    const icons = {
      'Treeny Wilson': (
        <svg viewBox="0 0 32 32" fill="currentColor">
          <circle cx="16" cy="10" r="5"/>
          <path d="M16 17c-5.5 0-10 3-10 6.5V26h20v-2.5c0-3.5-4.5-6.5-10-6.5z"/>
          <path d="M12 9c0-1 .5-2 1.5-2.5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      ),
      'Jason Francisco': (
        <svg viewBox="0 0 32 32" fill="currentColor">
          <circle cx="16" cy="10" r="5"/>
          <path d="M16 17c-5.5 0-10 3-10 6.5V26h20v-2.5c0-3.5-4.5-6.5-10-6.5z"/>
          <rect x="13" y="8" width="6" height="1" rx="0.5"/>
        </svg>
      ),
      'Elizabeth Sloan': (
        <svg viewBox="0 0 32 32" fill="currentColor">
          <circle cx="16" cy="10" r="5"/>
          <path d="M16 17c-5.5 0-10 3-10 6.5V26h20v-2.5c0-3.5-4.5-6.5-10-6.5z"/>
          <ellipse cx="16" cy="10" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      ),
      'Kate Smith': (
        <svg viewBox="0 0 32 32" fill="currentColor">
          <circle cx="16" cy="10" r="5"/>
          <path d="M16 17c-5.5 0-10 3-10 6.5V26h20v-2.5c0-3.5-4.5-6.5-10-6.5z"/>
          <path d="M11 10c0-2 2-4 5-4s5 2 5 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      )
    };
    return icons[authorName] || icons['Treeny Wilson'];
  };

  const featuredPost = {
    title: "Unveiling the Essence: The Raga Reserve Journey",
    description: "Discover the secrets behind our signature blend. A comforting guide to this soulful ritual.",
    image: blogSA3,
    category: "Featured"
  };

  const allBlogPosts = [
    {
      id: 1,
      title: "From Crop to Cup: Our Handpicked Quality",
      category: "New",
      author: "Treeny Wilson",
      date: "November 30, 2025",
      image: blogSA1Png
    },
    {
      id: 2,
      title: "Innovative Chai Affogato: A Dessert Delight",
      category: "New",
      author: "Jason Francisco",
      date: "September 30, 2025",
      image: blogSA2
    },
    {
      id: 3,
      title: "Ceylon's Chai Legacy: A Timeless Tradition",
      category: "New",
      author: "Elizabeth Sloan",
      date: "August 20, 2025",
      image: blogSA3
    },
    {
      id: 4,
      title: "The Soothing Ritual: Tea for Inner Harmony",
      category: "Earlier",
      author: "Treeny Wilson",
      date: "August 20, 2024",
      image: blogSA4
    },
    {
      id: 5,
      title: "Golden Elixirs: Crafting Tea-Infused Cocktails",
      category: "Earlier",
      author: "Kate Smith",
      date: "August 20, 2023",
      image: blogSA5
    },
    {
      id: 6,
      title: "Echoes of Ceylon: The Legendary Tea Trails",
      category: "Earlier",
      author: "Treeny Wilson",
      date: "August 20, 2022",
      image: blogSA6
    },
    {
      id: 7,
      title: "The Art of Tea Pairing: Elevating Your Culinary Experience",
      category: "Earlier",
      author: "Jason Francisco",
      date: "June 15, 2022",
      image: blogSA7
    },
    {
      id: 8,
      title: "Masala Brew Traditions: Stories from Ceylon",
      category: "Earlier",
      author: "Elizabeth Sloan",
      date: "April 10, 2022",
      image: blogSA1
    },
    {
      id: 9,
      title: "The Perfect Morning Ritual: Starting Your Day Right",
      category: "Earlier",
      author: "Kate Smith",
      date: "February 5, 2022",
      image: blogSA2
    }
  ];

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, allBlogPosts.length));
  };

  const displayedPosts = allBlogPosts.slice(0, visiblePosts);

  return (
    <div className="blog-page">
      <Header cartCount={cartCount} isLanding={true} />
      
      <main className="blog-main">
        {/* Featured Post */}
        <section className="featured-post">
          <div className="featured-content">
            <div className="featured-image">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="featured-text">
              <h1 className="featured-title">{featuredPost.title}</h1>
              <p className="featured-description">{featuredPost.description}</p>
              <button className="read-story-btn" onClick={() => navigate('/blog/featured')}>READ FULL STORY</button>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="blog-grid-section">
          <div className="blog-grid">
            {displayedPosts.map((post) => (
              <article 
                key={post.id} 
                className="blog-card"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="blog-card-image">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <div className="blog-meta">
                    <div className="blog-author">
                      <div className={`author-avatar avatar-${post.author.split(' ')[0].toLowerCase()}`}>
                        {getAuthorIcon(post.author)}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {visiblePosts < allBlogPosts.length && (
            <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
