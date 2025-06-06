## Project Overview & Tech Stack Setup

You are building a professional real estate photography business website for **MF Property Studios**. This is a premium visual business requiring excellent image handling, fast loading, and easy content management.

### Required Tech Stack
- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **CMS**: Sanity Studio
- **Image Optimization**: Cloudinary integration
- **Hosting**: Vercel (configured for static generation where possible)
- **TypeScript**: For type safety

### Initial Setup Commands
```bash
npx create-next-app@latest mf-property-studios --typescript --tailwind --eslint --app
cd mf-property-studios
npm install @sanity/client @sanity/image-url next-sanity
npm install cloudinary
npm install framer-motion lucide-react
```

## Design System & Visual Identity

### Color Palette
- **Primary**: Deep charcoal (#2D3748) for text and headers
- **Secondary**: Warm gold (#D69E2E) for accents and CTAs
- **Background**: Pure white (#FFFFFF) with subtle gray sections (#F7FAFC)
- **Text**: Dark gray (#4A5568) for body text
- **Accent**: Light blue (#3182CE) for links and interactive elements

### Typography
- **Headers**: Inter or Poppins (bold, clean, modern)
- **Body**: Inter (regular, excellent readability)
- **Sizes**: h1: 4xl, h2: 3xl, h3: 2xl, body: lg, small: sm

### Layout Principles
- **Container max-width**: 1200px
- **Grid system**: 12-column responsive grid
- **Spacing**: Generous white space, minimum 24px between sections
- **Images**: High-quality, optimized, with proper aspect ratios
- **Mobile-first**: Responsive design priority

## Page Structure & Components

### 1. Homepage Layout (`/app/page.tsx`)

#### Hero Section
```tsx
// Full viewport height hero with video/image carousel
// Background: Stunning property video or rotating high-quality images
// Overlay: Semi-transparent dark gradient (opacity 40%)
// Content positioning: Centered vertically and horizontally
```

**Hero Content Structure**:
- **Headline**: "Transforming Properties into Irresistible Listings" (text-5xl, font-bold, text-white)
- **Subheadline**: "Professional real estate photography & videography that sells" (text-xl, text-gray-200)
- **CTA Buttons**: 
  - Primary: "View Our Work" (gold background, white text, px-8 py-4)
  - Secondary: "Get Quote" (transparent border, white text, px-8 py-4)
- **Services strip**: Horizontal scrolling icons with labels below hero

#### Social Proof Section
```tsx
// Background: Light gray (#F7FAFC)
// Content: Centered container with logos and testimonials
// Height: 200px minimum
```
- **Client logos**: 6-8 real estate agency logos in grayscale, hoverable color
- **Testimonial carousel**: Auto-rotating every 5 seconds
- **Format**: Quote + Client name + Result metric

#### Services Showcase Section
```tsx
// Background: White
// Layout: 3-column grid on desktop, 1-column on mobile
// Card design: Image + overlay text + hover effects
```

**Service Cards** (create 3 cards):
1. **Aerial Drone Imagery**
   - Background image: Stunning aerial property shot
   - Overlay: "Capture the Full Picture" + brief description
   - Hover effect: Slight zoom + shadow increase

2. **360° Virtual Tours**
   - Background image: 360° interior preview
   - Overlay: "Immersive Property Experiences" + brief description
   - Interactive element: Mini 360° preview on hover

3. **Interior Walkthrough Videos**
   - Background image: Professional interior shot
   - Overlay: "Cinematic Property Tours" + brief description
   - Play button overlay with video preview

#### Featured Portfolio Section
```tsx
// Background: White
// Layout: Masonry grid layout (Pinterest-style)
// Images: 6-9 best project thumbnails
```
- **Grid**: Responsive masonry (3-4 columns desktop, 2 mobile)
- **Image aspect ratios**: Mixed (some square, some landscape)
- **Hover effects**: Overlay with project type + "View Gallery" button
- **Loading**: Lazy loading with smooth fade-in animations

#### Call-to-Action Section
```tsx
// Background: Dark charcoal (#2D3748)
// Layout: Split layout - content left, contact form right
```
- **Left side**: Bold headline + value propositions + phone number
- **Right side**: Simple contact form (Name, Email, Property Type, Message)
- **Form styling**: White inputs with subtle shadows

### 2. Portfolio Page (`/app/portfolio/page.tsx`)

#### Filter Navigation
```tsx
// Sticky navigation bar below header
// Background: White with subtle shadow
```
- **Filter buttons**: All, Residential, Commercial, Vacation Rental
- **Active state**: Gold underline + bold text
- **Smooth transitions**: Fade in/out filtered items

#### Portfolio Grid
```tsx
// Layout: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
// Grid gap: 32px
```

**Project Card Design**:
- **Image**: 16:9 aspect ratio, optimized for fast loading
- **Overlay on hover**: Project name + property type + "View Gallery"
- **Animation**: Smooth scale and opacity transitions
- **Click action**: Navigate to individual project page

### 3. Individual Project Pages (`/app/portfolio/[slug]/page.tsx`)

#### Project Hero
```tsx
// Full-width hero image with project title overlay
// Height: 60vh
```
- **Background**: Main project image with subtle overlay
- **Title positioning**: Bottom-left with padding
- **Breadcrumb**: Home > Portfolio > Project Name

#### Project Gallery
```tsx
// Layout: Main large image + thumbnail strip below
// Lightbox: Full-screen gallery with navigation
```

**Gallery Features**:
- **Main image**: 16:9 aspect ratio, centered
- **Thumbnail strip**: Horizontal scrolling, 5 visible thumbnails
- **Lightbox**: Click main image opens full-screen gallery
- **Navigation**: Arrow keys + touch gestures support
- **Image optimization**: Multiple sizes for responsive loading

#### Project Details Sidebar
```tsx
// Layout: Right sidebar on desktop, below gallery on mobile
// Background: Light gray card with rounded corners
```

**Content Structure**:
- Property type badge
- Square footage
- Project completion date
- Services provided checklist
- Contact form for similar projects

### 4. Services Page (`/app/services/page.tsx`)

#### Services Hero
```tsx
// Background: Gradient from charcoal to gray
// Content: Centered with service overview
```

#### Detailed Service Sections
Each service gets a dedicated section with:
```tsx
// Layout: Alternating left-right image/content sections
// Background: Alternating white and light gray
```

**Section Structure**:
- **Large feature image**: Shows service in action
- **Content area**: 
  - Service name (h2)
  - Detailed description
  - Benefits list with checkmark icons
  - Equipment used
  - Typical deliverables
  - Starting price range
- **CTA**: "Get Quote for This Service" button

### 5. Contact Page (`/app/contact/page.tsx`)

#### Contact Hero
```tsx
// Background: Professional behind-the-scenes photo
// Overlay: Contact headline and quick info
```

#### Contact Methods
```tsx
// Layout: 3-column grid for contact methods
// Background: White cards with subtle shadows
```

**Contact Cards**:
1. **Phone**: Large phone icon + number + "Call Now" button
2. **Email**: Email icon + address + "Send Email" button  
3. **Booking**: Calendar icon + "Schedule Consultation" button

#### Detailed Contact Form
```tsx
// Layout: 2-column form with project details
// Styling: Clean inputs with proper spacing
```

**Form Fields**:
- Name, Email, Phone (required)
- Property Type (dropdown)
- Property Address
- Services Needed (checkboxes)
- Project Timeline
- Additional Details (textarea)
- File upload for reference images

## Component Development Guidelines

### 1. Header Component (`/components/Header.tsx`)
```tsx
// Fixed header with transparent background on homepage, white on other pages
// Logo: Left side, navigation: center, contact button: right
```

**Navigation Structure**:
- Logo (linked to home)
- Nav items: Home, Portfolio, Services, Contact
- CTA button: "Get Quote" (gold background)
- Mobile: Hamburger menu with slide-out navigation

### 2. Footer Component (`/components/Footer.tsx`)
```tsx
// Background: Dark charcoal
// Layout: 4-column grid with company info, services, quick links, contact
```

### 3. Image Gallery Component (`/components/ImageGallery.tsx`)
```tsx
// Reusable gallery component with lightbox functionality
// Props: images array, autoplay option, navigation controls
```

**Features Required**:
- Lazy loading
- Touch/swipe support for mobile
- Keyboard navigation
- Image preloading for smooth transitions
- Loading states with skeleton screens

### 4. Contact Form Component (`/components/ContactForm.tsx`)
```tsx
// Reusable form with validation and submission handling
// Integration with email service (EmailJS or similar)
```

**Form Features**:
- Real-time validation
- Error messaging
- Success confirmation
- Spam protection
- File upload capability for project references

### 5. Project Card Component (`/components/ProjectCard.tsx`)
```tsx
// Reusable card for portfolio display
// Props: project data, display size variant
```

## Sanity CMS Integration

### Schema Definitions (`/sanity/schemas/`)

#### Project Schema (`project.ts`)
```typescript
// Define project content type with all necessary fields
// Fields: title, slug, description, images, propertyType, featured, etc.
```

#### Service Schema (`service.ts`)
```typescript
// Service content type for dynamic service pages
// Fields: name, description, features, pricing, images
```

### Sanity Configuration
```typescript
// Configure Sanity client with proper CORS settings
// Set up image URL builder for Cloudinary integration
// Configure preview mode for draft content
```

## Image Optimization Strategy

### Cloudinary Integration
```typescript
// Set up Cloudinary transformations for different use cases
// Responsive images with multiple breakpoints
// Automatic format optimization (WebP, AVIF)
// Lazy loading implementation
```

**Image Variants Needed**:
- Thumbnail: 400x300
- Medium: 800x600  
- Large: 1200x900
- Hero: 1920x1080
- Mobile optimized versions for each

### Performance Optimization
```typescript
// Implement Next.js Image component everywhere
// Set up proper caching headers
// Configure ISR (Incremental Static Regeneration) for portfolio
// Optimize Core Web Vitals
```

## Responsive Design Specifications

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Mobile-Specific Considerations
```css
// Ensure touch targets are minimum 44px
// Optimize image loading for mobile data
// Simplify navigation for mobile use
// Stack layouts vertically with proper spacing
```

## Animation & Interaction Guidelines

### Page Transitions
```typescript
// Implement smooth page transitions using Framer Motion
// Stagger animations for gallery items
// Smooth scroll behavior for anchor links
```

### Micro-Interactions
- Hover effects on buttons and cards
- Loading animations for image galleries
- Smooth accordion behavior for FAQ sections
- Parallax scrolling effects (subtle, performance-conscious)

## SEO & Performance Requirements

### Technical SEO
```typescript
// Implement proper meta tags for each page
// Generate XML sitemap
// Set up structured data for business information
// Optimize for local search keywords
```

### Performance Targets
- **Lighthouse Score**: 90+ for all metrics
- **First Contentful Paint**: Under 2 seconds
- **Largest Contentful Paint**: Under 3 seconds
- **Cumulative Layout Shift**: Under 0.1

## Development Phases

### Phase 1: Foundation
1. Set up Next.js project with all dependencies
2. Configure Sanity CMS and create schemas
3. Set up Cloudinary integration
4. Create basic page structure and routing

### Phase 2: Core Components
1. Develop Header and Footer components
2. Create reusable UI components (buttons, forms, cards)
3. Implement image gallery with lightbox
4. Build contact form with validation

### Phase 3: Page Development
1. Build homepage with all sections
2. Create portfolio page with filtering
3. Develop individual project pages
4. Build services and contact pages

### Phase 4: CMS Integration
1. Connect all components to Sanity
2. Implement dynamic routing for projects
3. Set up preview mode for content editing
4. Test content management workflow

### Phase 5: Optimization
1. Implement image optimization
2. Add animations and micro-interactions
3. Optimize for performance and SEO
4. Mobile testing and refinement

### Phase 6: Final Testing
1. Cross-browser testing
2. Performance optimization
3. SEO implementation
4. Accessibility testing

## Content Management Instructions

### For Non-Technical Content Updates
```markdown
// Provide clear documentation for:
// - Adding new projects to portfolio
// - Updating service information
// - Managing featured content on homepage
// - Uploading and organizing images
```

## Deployment Configuration

### Vercel Deployment
```bash
// Configure environment variables
// Set up automatic deployments from Git
// Configure custom domain
// Set up analytics and monitoring
```

Remember: This is a visual business where image quality and loading speed are crucial. Every design decision should prioritize showcasing the photography work beautifully while maintaining excellent performance.