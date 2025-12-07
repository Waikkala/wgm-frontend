import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BlogView.css';
import blogSA1 from '../assets/blogSA1.jpg';
import blogSA1Png from '../assets/blogSA (1).png';
import blogSA2 from '../assets/blogSA (2).png';
import blogSA3 from '../assets/blogSA (3).png';
import blogSA4 from '../assets/blogSA (4).png';
import blogSA5 from '../assets/blogSA (5).png';
import blogSA6 from '../assets/blogSA (6).png';

const BlogView = ({ cartCount = 0 }) => {
  const { id } = useParams();

  // Blog posts data
  const blogPosts = {
    'featured': {
      id: 'featured',
      title: "Unveiling the Essence: The Raga Reserve Journey",
      author: "Treeny Wilson",
      date: "December 7, 2025",
      image: blogSA3,
      content: [
        "At Raga Reserve, the journey of our exquisite Masala Brew begins long before the first aromatic steam rises from your cup. It starts in the verdant, sun-drenched estates of Ceylon, where the very soil whispers tales of rich heritage and meticulous cultivation. Our philosophy centers on \"Handpicked Quality,\" a commitment that translates into an unwavering dedication to traditional methods.",
        "Discover the secrets behind our signature blend. A comforting guide to this soulful ritual that has been passed down through generations. Each cup tells a story of tradition, quality, and the perfect harmony of spices that make Raga Reserve truly exceptional."
      ]
    },
    '1': {
      id: '1',
      title: "From Crop to Cup: Our Handpicked Quality",
      author: "Treeny Wilson",
      date: "November 30, 2025",
      image: blogSA1,
      content: [
        "At Raga Reserve, the journey of our exquisite Masala Brew begins long before the first aromatic steam rises from your cup. It starts in the verdant, sun-drenched estates of Ceylon, where the very soil whispers tales of rich heritage and meticulous cultivation. Our philosophy centers on \"Handpicked Quality,\" a commitment that translates into an unwavering dedication to traditional methods. Unlike mass-produced alternatives, every single tea leaf destined for a Raga Reserve blend is carefully selected by skilled hands, preserving the delicate integrity and nuanced flavors that machine harvesting simply cannot achieve. This intimate connection to the land and its bounty ensures that only the finest, most tender leaves make it into our distinguished blends.",
        "This dedication to handpicking is more than just a technique; it is a promise of unparalleled quality, a foundational pillar that defines the Raga Reserve experience. Each leaf, once expertly gathered, embarks on a precise journey through our advanced processing facilities, where modern innovation perfectly complements age-old wisdom. Here, under stringent global standards, the raw essence of Ceylon's finest teas and spices is transformed into the refined Masala Brew you cherish. From the careful selection at origin to the final packaging, every step is infused with a passion for excellence, culminating in a product that not only delights the senses but also embodies our profound respect for nature, tradition, and uncompromising quality."
      ]
    },
    '2': {
      id: '2',
      title: "Innovative Chai Affogato: A Dessert Delight",
      author: "Jason Francisco",
      date: "September 30, 2025",
      image: blogSA2,
      content: [
        "Imagine the rich, aromatic warmth of Raga Reserve's Masala Brew cascading over a scoop of creamy vanilla ice cream. This is the Chai Affogato—a dessert that marries tradition with innovation, creating an experience that tantalizes the taste buds and warms the soul. The concept is simple yet revolutionary: take the beloved Italian affogato and infuse it with the bold, spiced character of Ceylon's finest chai.",
        "The result is a harmonious blend where the heat of the chai gently melts the ice cream, creating a velvety, spiced elixir that's both comforting and exciting. Each spoonful offers a dance of flavors—the sweetness of vanilla, the warmth of cinnamon and cardamom, and the robust depth of premium black tea. It's a dessert that speaks to the adventurous spirit, inviting you to explore new culinary horizons while honoring the timeless traditions of tea culture."
      ]
    },
    '3': {
      id: '3',
      title: "Ceylon's Chai Legacy: A Timeless Tradition",
      author: "Elizabeth Sloan",
      date: "August 20, 2025",
      image: blogSA1Png,
      content: [
        "Ceylon, now known as Sri Lanka, has been synonymous with exceptional tea for centuries. The island's unique climate, elevation, and soil create the perfect conditions for cultivating tea leaves of unparalleled quality. But beyond the tea itself lies a rich cultural legacy—a tradition of chai that has been passed down through generations, evolving yet remaining true to its roots.",
        "At Raga Reserve, we honor this legacy by sourcing our tea from the finest estates in Ceylon, where skilled artisans continue to practice time-honored methods of cultivation and processing. Our Masala Brew is a tribute to this heritage, blending the finest Ceylon black tea with a carefully curated selection of spices. Each cup is a journey through time, connecting you to the generations of tea makers who have perfected their craft, ensuring that every sip is a celebration of Ceylon's enduring chai legacy."
      ]
    },
    '4': {
      id: '4',
      title: "The Soothing Ritual: Tea for Inner Harmony",
      author: "Treeny Wilson",
      date: "August 20, 2024",
      image: blogSA4,
      content: [
        "In our fast-paced world, finding moments of peace and tranquility can feel like a luxury. Yet, the simple act of brewing and savoring a cup of tea offers a powerful antidote to the chaos of daily life. At Raga Reserve, we believe that tea is more than a beverage—it's a ritual, a moment of mindfulness that allows you to reconnect with yourself and find inner harmony.",
        "The process of preparing Masala Brew is itself a meditative practice. As you measure the tea, heat the water, and watch the spices infuse, you're engaging in a centuries-old tradition that encourages presence and awareness. The aromatic steam rising from your cup carries with it the promise of comfort and calm. With each sip, you're not just tasting tea; you're embracing a moment of stillness, allowing the warmth and flavor to ground you, soothe your mind, and restore your spirit."
      ]
    },
    '5': {
      id: '5',
      title: "Golden Elixirs: Crafting Tea-Infused Cocktails",
      author: "Kate Smith",
      date: "August 20, 2023",
      image: blogSA5,
      content: [
        "Tea and cocktails might seem like an unlikely pairing, but when done right, they create a symphony of flavors that elevate both elements. Raga Reserve's Masala Brew, with its complex blend of spices and robust tea base, is the perfect foundation for crafting innovative, tea-infused cocktails that are as sophisticated as they are delicious.",
        "Imagine a Masala Brew Old Fashioned, where the spiced notes of our chai complement the richness of bourbon, or a Chai Martini that brings together the elegance of vodka with the warmth of cardamom and cinnamon. These golden elixirs are more than just drinks—they're experiences, inviting you to explore the versatility of tea in new and exciting ways. Whether you're hosting a gathering or simply unwinding after a long day, tea-infused cocktails offer a unique way to enjoy the timeless flavors of Raga Reserve."
      ]
    },
    '6': {
      id: '6',
      title: "Echoes of Ceylon: The Legendary Tea Trails",
      author: "Treeny Wilson",
      date: "August 20, 2022",
      image: blogSA6,
      content: [
        "The tea trails of Ceylon are legendary, winding through misty mountains and lush valleys where some of the world's finest tea is grown. These trails are more than just paths through plantations—they're journeys through history, culture, and the art of tea making. Walking these trails, you can almost hear the echoes of generations past, the voices of tea pluckers and estate managers who have dedicated their lives to perfecting their craft.",
        "At Raga Reserve, we draw inspiration from these legendary trails, sourcing our tea from estates that have been cultivating excellence for over a century. Each estate has its own story, its own unique terroir that imparts distinct characteristics to the tea. By honoring these traditions and working closely with our partners in Ceylon, we ensure that every cup of Raga Reserve Masala Brew carries with it the essence of these legendary tea trails—a taste of history, a celebration of craftsmanship, and a connection to the land that makes it all possible."
      ]
    }
  };

  const blogPost = blogPosts[id] || blogPosts['1'];

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
