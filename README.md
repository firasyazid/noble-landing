# NobleMind Landing Page

A professional landing page for NobleMind — a Saudi-based enterprise healthcare AI company building PDPL-compliant clinical intelligence solutions.

## Overview

NobleMind transforms healthcare delivery by providing advanced AI solutions like Novera.MD, ARWA, and Novera Workspace. This landing page showcases the company's products, vision, and commitment to data sovereignty through a modern, responsive design with smooth animations and internationalization support.

## Technology Stack

- **Next.js 16** — App Router with TypeScript for type safety and performance
- **Tailwind CSS v4** — Utility-first styling with custom design system
- **React Context API** — Global state management for internationalization
- **Custom Animations** — Smooth fade-up effects and floating elements
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices

## Features

### Core Functionality
- **Bilingual Support** — Full English and Arabic translations with RTL layout support
- **Smooth Navigation** — Scroll-based navigation with active section highlighting
- **Interactive Components** — Animated hero section, feature tabs, and request demo form
- **Professional Design** — Modern UI with purple accent colors and glass morphism effects

### Key Sections
- **Hero Section** — Compelling healthcare AI messaging with interactive aurora background
- **Products** — Showcase of core solutions (Novera.MD, ARWA, Novera Workspace, Noble Retrieval)
- **Vision & Mission** — Company direction and the healthcare challenges we solve
- **Why Us** — Key differentiators including medical core and data integrity
- **Contact** — Lead capture form for healthcare organizations
- **Footer** — Contact information and social links

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd board-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx          # Root layout with I18n provider
│   └── page.tsx           # Home page component
├── components/             # React components
│   ├── hero-section.tsx    # Hero with animated mockup
│   ├── our-solution.tsx    # Product introduction
│   ├── how-it-works.tsx    # Interactive workflow demo
│   ├── features-section.tsx # Feature showcase
│   ├── quote-banner.tsx    # Testimonial banner
│   ├── request-demo.tsx    # Contact form
│   ├── footer.tsx          # Site footer
│   └── navbar.tsx          # Navigation with language toggle
├── context/                # React contexts
│   └── i18n-context.tsx    # Internationalization state
├── hooks/                  # Custom React hooks
│   └── use-fade-up.tsx     # Scroll-triggered animations
└── lib/                    # Utility functions
    └── cn.ts               # Tailwind class helper
```

## Internationalization

The application supports full bilingual functionality:

### Language Toggle
- Located in the navigation bar
- Switches between English (EN) and Arabic (AR)
- Automatically updates text content and layout direction

### RTL Support
- Arabic text renders with appropriate font fallbacks
- Layout direction switches from LTR to RTL
- All UI components adapt to text direction changes

### Adding Translations
Translations are managed in `src/context/i18n-context.tsx`:

```typescript
export const translations = {
  EN: {
    section: {
      title: "Title in English",
      description: "Description in English"
    }
  },
  AR: {
    section: {
      title: "العنوان بالعربية",
      description: "الوصف بالعربية"
    }
  }
};
```

## Customization

### Design System
The project uses a consistent design system with:
- **Primary Colors**: Purple gradient palette (#8874df, #a594f0, #c6b8ee)
- **Typography**: Manrope for body text, Playfair Display for headlines
- **Animations**: Custom keyframes for floating, drifting, and sweep effects

### Component Styling
All components use Tailwind CSS utility classes with custom CSS variables defined in `globals.css`. The design emphasizes:
- Glass morphism effects with backdrop blur
- Smooth transitions and micro-interactions
- Responsive breakpoints for all screen sizes

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## Performance Optimizations

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Next.js font optimization with preload
- **CSS Purging**: Tailwind CSS purges unused styles in production

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Contact

For inquiries about NobleMind, please visit our website or use the contact form in the application.