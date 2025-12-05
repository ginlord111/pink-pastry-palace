# Design Guidelines: Pink-Themed Pastry Ordering System

## Design Approach
**Reference-Based E-commerce**: Drawing inspiration from modern food e-commerce platforms (Shopify stores, Etsy, specialty bakery sites) with a distinctly feminine, warm aesthetic. The pink theme creates an inviting, indulgent atmosphere perfect for artisan pastries.

## Typography System
- **Primary Font**: Plus Jakarta Sans (Google Fonts) - modern, friendly, approachable
- **Accent Font**: Playfair Display for elegant headings and pastry names
- **Hierarchy**:
  - Hero Headlines: 3xl-5xl, Playfair Display, semi-bold
  - Section Headers: 2xl-3xl, Plus Jakarta Sans, bold
  - Product Names: lg-xl, Plus Jakarta Sans, semi-bold
  - Body Text: base, Plus Jakarta Sans, regular
  - Prices: lg-xl, Plus Jakarta Sans, bold

## Layout System
**Spacing Units**: Consistent use of Tailwind units 4, 6, 8, 12, 16, 20
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-20
- Card gaps: gap-6 to gap-8
- Maximum container width: max-w-7xl

## Core Components

### Navigation Header
- Sticky navigation with logo (left), category links (center), cart icon with item count badge (right)
- Search bar integrated into header on desktop
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
- Full-width hero (80vh) with large hero image of artisan pastries
- Centered headline: "Artisan Pastries, Baked Fresh Daily"
- Primary CTA button with blurred background
- Subtle rotating featured items carousel

### Product Grid
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Product cards with: large square product image, pastry name, short description, price, "Add to Cart" button
- Hover state: subtle lift shadow effect, image slight zoom
- Quick view option on hover

### Shopping Cart (Sidebar Drawer)
- Slides in from right, overlays content with backdrop
- Cart items list: thumbnail image, name, quantity selector (- / + buttons), price, remove icon
- Subtotal display, "Continue Shopping" and "Checkout" CTAs at bottom
- Empty cart state with illustration and browse suggestions

### Category Filters
- Horizontal pill-style filters: All, Breads, Croissants, Cakes, Cookies, Seasonal
- Active state with filled background
- Positioned below hero, sticky on scroll

### Checkout Page
- Two-column layout: Order summary (right sticky sidebar), checkout form (left)
- Form sections: Contact info, Delivery details, Payment (placeholder)
- Order summary shows cart items, subtotal, delivery fee, total
- Progress indicator: Cart → Details → Payment → Confirmation

### Product Detail Page
- Large image gallery (left 60%), product info (right 40%)
- Image gallery with thumbnails, zoom on click
- Product description, ingredients, allergen info in expandable sections
- Quantity selector and prominent "Add to Cart" button
- Related products carousel below

## Animations
- Cart slide-in/out transition (300ms ease)
- Product card hover lift (200ms ease)
- Add to cart: Brief scale pulse on cart icon
- Page transitions: Subtle fade (150ms)

## Images
**Hero Section**: 
- Large, high-quality hero image showing a bakery display case filled with colorful pastries, croissants, and breads. Warm, inviting lighting with slight depth of field. Image should convey artisan quality and freshness.

**Product Images**:
- Square (1:1 ratio) product photos on white or light pink background
- Consistent lighting and styling across all products
- Close-up detail shots showing texture and layers

**Category Headers**:
- Lifestyle images of bread/pastry categories in use (e.g., breakfast table setting)

**Empty States**:
- Whimsical illustration of pastry ingredients or baking tools for empty cart

## Responsive Behavior
- Desktop (1024px+): Full multi-column layouts, sidebar cart
- Tablet (768px-1023px): 2-column grids, condensed navigation
- Mobile (<768px): Single column, bottom sheet cart, simplified navigation

## Key UX Patterns
- Persistent cart count badge visibility
- One-click add to cart from product grid
- Inline quantity editing in cart
- Clear pricing breakdown throughout
- Breadcrumb navigation on product/checkout pages
- Toast notifications for cart actions ("Added to cart", "Item removed")