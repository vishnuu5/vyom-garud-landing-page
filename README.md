# VyomGarud - Advanced UAV Landing Page

A modern, responsive landing page for VyomGarud, a military-grade UAV and autonomous systems company. Built with **Vite**, **React.js**, and **Tailwind CSS**.

---

## Project Overview

VyomGarud is a professional, dark-themed landing page showcasing:

- **Hero Section** - Compelling headline and CTA with visual hierarchy
- **About Section** - Company mission and key statistics
- **Capabilities Section** - 4 product cards highlighting core features
- **Highlights Section** - 3 key advantages with interactive elements
- **Contact Section** - Form and contact information
- **Footer** - Navigation links, social media, and company info

### Key Features

Fully responsive design (mobile, tablet, desktop)
Smooth scroll animations (Framer Motion)
Dark theme with orange (#ff7b00) accent color
Military-grade aesthetic with modern UI principles
Intersection observer for scroll-triggered animations
Custom Tailwind theme with semantic tokens
Performance optimized with lazy loading

---

## Tech Stack

| **Vite** | Fast build tool and dev server |
| **React 18** | UI component library |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Animation library |
| **PostCSS** | CSS processing |

---

## Installation & Setup

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## Deployment

[view project](https://vyom-garud-landing-page.vercel.app)

### Step 1: Clone the Repository

```bash
git clone https://github.com/vishnuu5/vyom-garud-landing-page.git
cd vyom-garud-landing
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Step 4: Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Step 5: Preview Production Build

```bash
npm run preview
```

## Design System

### Color Palette

```css
Primary:     #1a1a1a (charcoal dark)
Secondary:  #2d2d2d (dark gray)
Accent:     #ff7b00 (vibrant orange)
Light:      #ffffff (white)
Text Primary:       #ffffff (white)
Text Secondary:     #a0a0a0 (light gray)
Border Color:       #404040 (medium gray)
```

### Typography

- **Headings**: Montserrat (600, 700 weights)
- **Body**: Inter (400, 500 weights)
- **Accents**: Poppins (600 weight)

### Spacing Scale

- Base unit: 4px
- Used via Tailwind classes (p-4, m-8, gap-6, etc.)

### Border Radius

- Small: 0.5rem (rounded-lg)
- Medium: 0.75rem (rounded-xl)

---

## Key Features Explained

### 1. Hero Section

- Animated gradient text using Framer Motion
- CTA buttons with hover effects
- Floating stats cards
- Responsive grid background

### 2. Responsive Navigation

- Sticky header with scroll detection
- Mobile hamburger menu
- Smooth transitions and backdrop blur

### 3. Scroll Animations

Custom `useInView` hook triggers animations when elements enter viewport:

```jsx
const [ref, isInView] = useInView();
// Component animates when isInView becomes true
```

### 4. Capabilities Cards

- Hover effects with gradient backgrounds
- Feature lists with custom bullets
- Grid layout: 1 col (mobile) → 2 cols (tablet) → 4 cols (desktop)

### 5. Contact Form

- Validated form inputs
- Success state feedback
- Contact information cards with hover effects

### 6. Custom Tailwind Components

```css
.btn-primary    /* Orange CTA button */
/* Orange CTA button */
/* Orange CTA button */
/* Orange CTA button */
/* Orange CTA button */
/* Orange CTA button */
/* Orange CTA button */
/* Orange CTA button */
.btn-secondary  /* Outlined button */
.gradient-text  /* Orange gradient text effect */
.card-hover     /* Hover shadow effect */
.transition-smooth; /* Smooth transitions */
```

---

## Responsive Breakpoints

| Mobile | < 768px | Default + `sm:` |
| Tablet | 768px - 1024px | `md:` |
| Desktop | > 1024px | `lg:` |

All sections adapt gracefully across devices.

---

## Performance Optimizations

**Code Splitting**: Vite automatically handles this
**Image Optimization**: Uses SVG icons and placeholder images
**CSS Purging**: Tailwind removes unused styles in production
**Lazy Loading**: Animations trigger only on view
**Smooth Scrolling**: Native browser API with fallback

---

## Animation Details

### Framer Motion Variants

**Container Stagger**: Parent animates children with delay

```jsx
containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
```

**Scroll Triggered**: Elements animate on intersection

```jsx
initial={{ opacity: 0, y: 20 }}
animate={isInView ? { opacity: 1, y: 0 } : "..."}
```

**Hover Effects**: Interactive button scales

```jsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

---

### Update Company Info

1. **Navigation**: Edit `Navigation.jsx` logo and links
2. **Hero**: Modify title and tagline in `Hero.jsx`
3. **About**: Update mission in `About.jsx`
4. **Capabilities**: Edit cards array in `Capabilities.jsx`
5. **Contact**: Update email/phone in `Contact.jsx`
6. **Footer**: Modify links and social media in `Footer.jsx`

### Modify Animations

Adjust durations and delays in component variants:

```jsx
transition: {
  duration: 0.8;
} // Increase for slower animation
delay: i * 0.15; // Increase for larger stagger
```

---

## Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying

- Ensure Tailwind classes are spelled correctly
- Check that global `index.css` is imported in `main.jsx`
- Rebuild with `npm run dev`

### Animations not working

- Verify Framer Motion is installed: `npm list framer-motion`
- Check browser console for errors
- Test on Chrome/Firefox for compatibility

---

## Performance Metrics

Target metrics for production:

- **Lighthouse Performance**: > 90
- **Lighthouse Accessibility**: > 95
- **First Contentful Paint (FCP)**: < 2s
- **Largest Contentful Paint (LCP)**: < 3s

Run audit with Chrome DevTools → Lighthouse

---

## License

This project is open source and available under the MIT License.

---
