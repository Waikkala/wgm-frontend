# Image Integration Guide

## How to Add Your Product Images

### Step 1: Prepare Your Images

Place your images in the `public` folder:

```
waikkala-wgm/
└── public/
    ├── logo.png
    ├── product-main.jpg
    ├── product-thumb-1.jpg
    ├── product-thumb-2.jpg
    └── product-package.jpg
```

### Step 2: Update Components

#### Product Detail Page (`src/pages/ProductDetail.jsx`)

Replace the placeholder in the main image section:

```jsx
// Find this section (around line 60):
<div className="main-image">
  <div className="image-placeholder">
    <span>Product Image</span>
  </div>
</div>

// Replace with:
<div className="main-image">
  <img src="/product-main.jpg" alt="Ceylon Raga Reserve" />
</div>
```

For thumbnails:

```jsx
// Find this section (around line 65):
<div className="thumbnail active">
  <div className="thumb-placeholder"></div>
</div>

// Replace with:
<div className="thumbnail active">
  <img src="/product-thumb-1.jpg" alt="Product view 1" />
</div>
```

#### Cart Page (`src/pages/Cart.jsx`)

```jsx
// Find this section (around line 35):
<div className="item-image">
  <div className="image-placeholder">
    <span>🦌</span>
  </div>
</div>

// Replace with:
<div className="item-image">
  <img src="/product-package.jpg" alt="Ceylon Raga Reserve" />
</div>
```

#### Checkout Page (`src/pages/Checkout.jsx`)

```jsx
// Find this section (around line 180):
<div className="product-image-small">
  <div className="image-placeholder-small">
    <span>🦌</span>
  </div>
</div>

// Replace with:
<div className="product-image-small">
  <img src="/product-package.jpg" alt="Ceylon Raga Reserve" />
</div>
```

#### Header Logo (`src/components/Header.jsx`)

```jsx
// Find this section (around line 10):
<div className="logo">
  <div className="logo-icon">🦌</div>
  <span className="logo-text">WGM</span>
</div>

// Replace with:
<div className="logo">
  <img src="/logo.png" alt="WGM Logo" className="logo-icon" />
  <span className="logo-text">WGM</span>
</div>
```

### Step 3: Add CSS for Images

Add these styles to ensure images display correctly:

#### For Product Detail (`src/pages/ProductDetail.css`)

```css
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

#### For Cart (`src/pages/Cart.css`)

```css
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.summary-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

#### For Checkout (`src/pages/Checkout.css`)

```css
.product-image-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

#### For Header (`src/components/Header.css`)

```css
.logo-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
```

### Image Recommendations

- **Product Main Image**: 800x800px or larger, square aspect ratio
- **Thumbnails**: 300x300px, square aspect ratio
- **Logo**: 100x100px, transparent background (PNG)
- **Format**: JPG for photos, PNG for logos with transparency
- **Optimization**: Compress images to reduce file size (use tools like TinyPNG)

### Alternative: Using Image URLs

If you want to use external image URLs:

```jsx
<img src="https://example.com/your-image.jpg" alt="Product" />
```

### Dynamic Images with State

For a more dynamic approach:

```jsx
const [selectedImage, setSelectedImage] = useState('/product-main.jpg');

const images = [
  '/product-main.jpg',
  '/product-thumb-1.jpg',
  '/product-thumb-2.jpg'
];

// In your JSX:
<div className="main-image">
  <img src={selectedImage} alt="Product" />
</div>

<div className="thumbnail-images">
  {images.map((img, index) => (
    <div 
      key={index}
      className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
      onClick={() => setSelectedImage(img)}
    >
      <img src={img} alt={`View ${index + 1}`} />
    </div>
  ))}
</div>
```

## Background Pattern Images

For the decorative patterns in header/footer, you can use SVG patterns or background images:

```css
.header-pattern {
  background-image: url('/pattern-leaves.svg');
  background-size: 100px;
  background-repeat: repeat;
}
```

## Testing

After adding images:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check all three pages
3. Test on mobile view
4. Verify images load correctly
