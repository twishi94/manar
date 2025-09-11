# Detailed Component Specifications

## 🏠 Hero Section

### Layout Structure
```
Container (1280px max-width)
├── Content Grid (2 columns on desktop)
│   ├── Left Column (content)
│   │   ├── CTA Buttons Row
│   │   ├── Decorative Figure
│   │   ├── Main Content
│   │   │   ├── Badge + Text
│   │   │   ├── H1 Title
│   │   │   └── Description
│   │   ├── Stats Grid (3 columns)
│   │   └── Fine Print
│   └── Right Column (image)
│       ├── Main Image Container
│       ├── Floating Card (top-left)
│       └── Floating Card (bottom-right)
└── Industry Tabs Section
    ├── Vertical Guide Lines (padding edges)
    ├── Tab Container
    └── Sticky Image (hexagonal)
```

### Measurements
- **Section Padding**: 48px top/bottom (mobile), 80px (desktop)
- **Grid Gap**: 48px (mobile), 64px (desktop)
- **Stats Grid**: 3 equal columns with 24px gap
- **Image Aspect Ratio**: 4:3
- **Floating Cards**: 48px padding, 12px border radius

## 🎯 Services Bento Grid

### Grid Configuration
```
Desktop (6 columns):
┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Predict │ Predict │   IoT   │   IoT   │ Energy  │ Energy  │
│  Maint  │  Maint  │Security │Security │  Mgmt   │  Mgmt   │
├─────────┼─────────┼─────────┴─────────┼─────────┴─────────┤
│ Predict │ Predict │   Observability   │      SLA Guar     │
│  Maint  │  Maint  │                   │                   │
├─────────┴─────────┴─────────┬─────────┴─────────┬─────────┤
│     System Integration      │     System Int    │ Sys Int │
└─────────────────────────────┴───────────────────┴─────────┘
```

### Card Sizes
- **Large (2×2)**: Predictive Maintenance - 2 columns, 2 rows
- **Medium (2×1)**: IoT Security, Observability - 2 columns, 1 row  
- **Small (2×1)**: Energy, SLA - 2 columns, 1 row
- **Wide (6×1)**: System Integration - 6 columns, 1 row

### 3D Icon Specifications
```
Icon Container:
├── Gradient Background (service-specific colors)
├── Highlight Layer (white 40% → transparent)
├── Shadow Layer (black 30% → transparent)
├── Side Depth (black 20% gradient)
├── Icon (Lucide React, white)
└── Hover Glow (service color, blur effect)

Base Shadow:
├── Offset: 2px down, 1px right
├── Blur: 16px
├── Color: Service color at 20% opacity
```

## 🏭 Industry Tabs

### Tab Structure
```
Tab Container:
├── Background: theme-aware card color
├── Border: 1px solid border color
├── Tabs Row
│   ├── Tab Button (repeated)
│   │   ├── Icon (16px)
│   │   ├── Label Text
│   │   ├── Hover State (accent background)
│   │   └── Active Indicator (orange bottom border)
│   └── Badge Overlay (first tab when active)
└── Sticky Image (256×256px square)
```

### Tab Dimensions
- **Tab Padding**: 24px horizontal, 16px vertical
- **Icon Size**: 16×16px
- **Font**: 14px medium weight
- **Active Border**: 4px orange bottom border
- **Badge**: Absolute positioned, -8px top/right

## 🎨 Hexagonal Manar AI Center

### Shape Definition
```css
clip-path: polygon(
  25% 0%,    /* Top-left cut */
  75% 0%,    /* Top-right start */
  100% 25%,  /* Top-right cut */
  100% 75%,  /* Bottom-right start */
  75% 100%, /* Bottom-right cut */
  25% 100%, /* Bottom-left start */
  0% 75%,   /* Bottom-left cut */
  0% 25%    /* Top-left start */
)
```

### Layer Stack
```
Hexagon Container (128×128px):
├── Shadow Layer (offset 4px down)
├── Main Shape
│   ├── Gradient Background (Primary → Orange → Red)
│   ├── Inner Highlight (inset 8px)
│   ├── Energy Sweep (conic gradient, 8s rotation)
│   └── Text Content
│       ├── "Manar" (14px bold)
│       └── "AI" (12px normal)
└── Orbital Ring (160×160px, border only)
```

## 📱 Responsive Adaptations

### Mobile (< 768px)
- **Bento Grid**: Single column stack
- **Hero**: Single column layout
- **Icon Sizes**: Reduce by 25%
- **Padding**: 16px containers
- **Typography**: Reduce heading sizes by 25%

### Tablet (768px - 1024px)
- **Bento Grid**: 4-column base, adaptive card spans
- **Hero**: Single column with larger spacing
- **Tabs**: Horizontal scroll if needed
- **Padding**: 24px containers

### Desktop (> 1024px)
- **Bento Grid**: Full 6-column layout
- **Hero**: Two-column layout
- **Tabs**: Single row with vertical guide lines
- **Central Element**: Visible hexagonal Manar AI
- **Padding**: 32px containers

## 🎭 Theme Variations

### Light Theme Specifics
- **Background**: Pure white (#FFFFFF)
- **Cards**: White with subtle shadows
- **Text**: Dark gray (#1A1A1A)
- **Borders**: Light gray (#E5E7EB)

### Dark Theme Specifics  
- **Background**: Near black (#0F0F0F)
- **Cards**: Dark gray (#1A1A1A) with backdrop blur
- **Text**: Off-white (#FAFAFA)
- **Borders**: Medium gray (#404040)

## 🔧 Implementation Notes

### CSS Variables Used
- All components use CSS custom properties
- Theme switching through `.dark` class
- Consistent transition timing (200ms/500ms)

### Accessibility Considerations
- High contrast ratios maintained
- Focus states for all interactive elements
- Reduced motion preferences supported
- Screen reader friendly structure

### Performance Optimizations
- CSS-only animations where possible
- Transform-based animations for performance
- Backdrop-filter for modern browsers
- Fallback styles for older browsers