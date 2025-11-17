# Waikkala Grinding Mills - Tea Shop

![CI/CD Pipeline](https://github.com/Waikkala/wgm-frontend/workflows/CI/CD%20Pipeline/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16-brightgreen.svg)

A modern, responsive React e-commerce application for Ceylon tea products.

## Features

- **Product Detail Page**: Complete product information with image gallery, package weight selection, quantity controls, and detailed descriptions
- **Shopping Cart**: Clean cart interface with order summary and secure checkout flow
- **Checkout Page**: Multi-step checkout process with billing details form and order summary
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Modern UI**: Clean, professional design with smooth transitions and interactions

## Tech Stack

- React 18
- React Router DOM for navigation
- Vite for fast development and building
- CSS3 with CSS Variables for theming
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git (for deployment)

### Installation

1. Navigate to the project directory:
```bash
cd waikkala-wgm
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🚀 Deployment

### Quick Deploy to GitHub

```bash
npm run deploy
```

This will push your code to GitHub and trigger automatic deployment via GitHub Actions.

**Live Site**: `https://waikkala.github.io/wgm-frontend/`

For detailed deployment instructions, see:
- **Quick Start**: `QUICK_START.md`
- **Full Guide**: `DEPLOYMENT.md`

## Project Structure

```
waikkala-wgm/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Reusable header component
│   │   ├── Header.css
│   │   ├── Footer.jsx          # Reusable footer component
│   │   └── Footer.css
│   ├── pages/
│   │   ├── ProductDetail.jsx   # Product detail page
│   │   ├── ProductDetail.css
│   │   ├── Cart.jsx            # Shopping cart page
│   │   ├── Cart.css
│   │   ├── Checkout.jsx        # Checkout page
│   │   └── Checkout.css
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── public/                     # Static assets
└── package.json
```

## Pages

### 1. Product Detail Page (`/`)
- Product image gallery with thumbnails
- Product information (name, price, stock status)
- Package weight selection (100g, 250g, 500g, 1000g)
- Quantity controls
- Add to cart and place order buttons
- Delivery information
- Product description tabs
- Top banner with promotional message
- Navigation buttons (Contacts, Order Tracking)

### 2. Shopping Cart Page (`/cart`)
- Cart items list with product details
- Order summary sidebar
- Price breakdown (subtotal, shipping, tax)
- Secure checkout button
- Responsive layout

### 3. Checkout Page (`/checkout`)
- Multi-step progress indicator
- Billing details form with validation
- Province dropdown for Sri Lankan provinces
- Order notes textarea
- Coupon code input
- Order summary with discount
- Delivery information banner
- Secure payment indicator

## Customization

### Adding Product Images

Replace the placeholder elements in the components with actual images:

1. Add your images to the `public` folder
2. Update the image placeholders in:
   - `ProductDetail.jsx` - main product images
   - `Cart.jsx` - cart item images
   - `Checkout.jsx` - checkout summary images

Example:
```jsx
// Replace this:
<div className="image-placeholder">
  <span>Product Image</span>
</div>

// With this:
<img src="/path-to-your-image.jpg" alt="Product" />
```

### Updating Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-green: #1a4d3a;
  --secondary-green: #2d6a4f;
  --accent-orange: #d4956c;
  /* ... other colors */
}
```

### Adding More Products

1. Create a products data file or connect to an API
2. Update the components to use dynamic data
3. Add product listing page if needed

## Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## Best Practices Implemented

- ✅ Component-based architecture
- ✅ Semantic HTML
- ✅ CSS custom properties for theming
- ✅ Mobile-first responsive design
- ✅ Accessible form inputs with labels
- ✅ Clean, maintainable code structure
- ✅ Smooth transitions and hover effects
- ✅ Consistent spacing and typography
- ✅ Form validation
- ✅ User-friendly navigation

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add state management (Redux/Context API)
- Connect to backend API
- Add payment gateway integration
- Implement user authentication
- Add product search and filtering
- Add wishlist functionality
- Add product reviews and ratings
- Implement order tracking
- Add email notifications

## License

MIT License
