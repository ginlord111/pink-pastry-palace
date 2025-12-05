# Sweet Delights Bakery - Pastry Ordering System

## Overview
A beautiful pink-themed pastry ordering system with shopping cart functionality and checkout. Built with React + TypeScript frontend and Express backend.

## Project Architecture

### Frontend (`client/src/`)
- **App.tsx**: Main application component with routing
- **pages/**: Page components (Home, Checkout)
- **components/**: Reusable UI components
  - Navigation.tsx: Header with cart icon and mobile menu
  - Hero.tsx: Hero section with bakery image
  - ProductCard.tsx: Individual product display
  - ProductGrid.tsx: Product listing with category filters
  - CategoryFilter.tsx: Category pill buttons
  - CartDrawer.tsx: Sliding cart panel
  - Footer.tsx: Site footer
  - ThemeToggle.tsx: Dark/light mode toggle
- **context/**: React context providers
  - CartContext.tsx: Shopping cart state management
  - ThemeContext.tsx: Theme state management

### Backend (`server/`)
- **routes.ts**: API endpoints
- **storage.ts**: In-memory data storage with products and orders

### Shared (`shared/`)
- **schema.ts**: TypeScript types and Zod schemas for products, cart items, and orders

## API Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `GET /api/images/:name` - Serve product images

## Features
- Browse pastries with category filtering (All, Breads, Croissants, Cakes, Pastries)
- Add items to cart with quantity management
- Cart drawer with real-time updates
- Checkout form with validation
- Dark/light mode support
- Responsive design for all screen sizes
- Free delivery on orders over $50

## Design
- Pink-themed color scheme
- Plus Jakarta Sans (body) and Playfair Display (headings) fonts
- Modern card-based product grid
- Smooth animations and transitions

## Recent Changes
- December 5, 2024: Initial implementation of pastry ordering system
