# Manar.ai Design System Specification
*For recreating the design in Figma*

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#FF5722` (Orange/Red)
- **Primary Foreground**: `#FFFFFF`

### Base Colors (Light Theme)
- **Background**: `#FFFFFF`
- **Foreground**: `#1A1A1A`
- **Card**: `#FFFFFF`
- **Secondary**: `#FDF8F6` (Light cream)
- **Muted**: `#F8F9FA`
- **Muted Foreground**: `#6B7280`
- **Accent**: `#F1F5F9`
- **Border**: `#E5E7EB`

### Dark Theme Colors
- **Background**: `#0F0F0F`
- **Foreground**: `#FAFAFA`
- **Card**: `#1A1A1A`
- **Secondary**: `#1A1A1A`
- **Muted**: `#262626`
- **Border**: `#404040`

### Service Colors (3D Icons)
- **Blue**: `#3B82F6` to `#1D4ED8`
- **Green**: `#10B981` to `#047857`
- **Purple**: `#8B5CF6` to `#7C3AED`
- **Yellow**: `#F59E0B` to `#D97706`
- **Red**: `#EF4444` to `#DC2626`
- **Indigo**: `#6366F1` to `#4F46E5`

## 📐 Typography

### Font Family
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

### Font Sizes (Base: 14px)
- **H1**: 48px (3.43em) - Hero titles
- **H2**: 36px (2.57em) - Section headers
- **H3**: 24px (1.71em) - Card titles
- **H4**: 18px (1.29em) - Subsections
- **Base**: 14px (1em) - Body text
- **Small**: 12px (0.86em) - Labels, captions

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Bold**: 700

### Line Heights
- **Tight**: 1.1 (Headlines)
- **Normal**: 1.4 (UI elements)
- **Relaxed**: 1.6 (Body text)

## 📏 Spacing System

### Base Unit: 4px
- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **5**: 20px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px
- **24**: 96px
- **32**: 128px

### Container Padding
- **Mobile**: 16px (px-4)
- **Tablet**: 24px (px-6)
- **Desktop**: 32px (px-8)

## 🏗️ Layout Grid

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Container Max-widths
- **Mobile**: 100%
- **Tablet**: 768px
- **Desktop**: 1280px

### Bento Grid (Services Section)
- **Base**: 1 column (mobile)
- **Medium**: 4 columns (tablet)
- **Large**: 6 columns (desktop)
- **Row Height**: 200px
- **Gap**: 24px

## 🎯 Component Specifications

### 3D Icons
- **Container Sizes**:
  - Featured: 80px × 80px
  - Standard: 64px × 64px
- **Border Radius**: 16px (featured), 12px (standard)
- **Shadow**: 
  - Drop shadow: 0 10px 25px rgba(color, 0.3)
  - Inner highlight: Linear gradient from white/40% to transparent
- **Hover Effects**: Scale 1.1, enhanced glow

### Hexagonal Manar AI Center
- **Size**: 128px × 128px
- **Shape**: CSS clip-path polygon for cut corners
- **Colors**: Gradient from Primary → Orange → Red
- **Animation**: 8s rotation on energy sweep
- **Position**: Absolute center of bento grid

### Cards
- **Background**: Card color with backdrop blur
- **Border**: 1px solid border color
- **Border Radius**: 12px
- **Padding**: 32px (large), 24px (standard)
- **Hover**: Border changes to service color with 30% opacity

### Buttons
- **Primary**: Gradient background (Primary → Orange → Red)
- **Secondary**: Border with transparent background
- **Padding**: 12px 24px
- **Border Radius**: 8px
- **Font Weight**: Medium (500)

## 🚀 Animation Specifications

### Transitions
- **Duration**: 200ms (fast), 500ms (standard)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Properties**: background-color, border-color, transform, opacity

### Hover Effects
- **Icons**: transform: scale(1.1)
- **Cards**: border-color transition
- **Buttons**: background opacity, scale(1.05)

### Loading States
- **Energy Sweep**: 8s linear rotation
- **Status Indicators**: Solid green dot (no blinking)

## 📱 Responsive Behavior

### Hero Section
- **Mobile**: Single column, smaller typography
- **Tablet**: Single column with larger spacing
- **Desktop**: Two columns (content + image)

### Services Bento Grid
- **Mobile**: 1 column stack
- **Tablet**: 2×2 grid adaptation
- **Desktop**: Full 6-column bento layout

### Industry Tabs
- **Mobile**: Horizontal scroll
- **Tablet**: Wrapped layout
- **Desktop**: Single row with padding lines

## 🎨 Design Tokens for Figma

### Color Styles
Create these as Figma color styles:
```
Primary/500: #FF5722
Gray/50: #F8F9FA
Gray/100: #F1F5F9
Gray/200: #E5E7EB
Gray/300: #6B7280
Gray/800: #1A1A1A
Gray/900: #0F0F0F
Blue/500: #3B82F6
Green/500: #10B981
Purple/500: #8B5CF6
Yellow/500: #F59E0B
Red/500: #EF4444
Indigo/500: #6366F1
```

### Text Styles
Create these as Figma text styles:
```
Hero/H1: 48px, Bold, -2.5% letter spacing
Section/H2: 36px, Bold, -2.5% letter spacing
Card/H3: 24px, Bold
Body/Large: 18px, Normal, 1.6 line height
Body/Base: 14px, Normal, 1.6 line height
Body/Small: 12px, Normal
Label/Medium: 14px, Medium
```

### Effect Styles
Create these as Figma effects:
```
Shadow/Card: 0 1px 3px rgba(0,0,0,0.1)
Shadow/Icon/Blue: 0 10px 25px rgba(59,130,246,0.3)
Shadow/Icon/Green: 0 10px 25px rgba(16,185,129,0.3)
Shadow/Icon/Purple: 0 10px 25px rgba(139,92,246,0.3)
Glow/Primary: 0 0 20px rgba(255,87,34,0.4)
```

## 📋 Recreation Checklist

### 1. Setup Figma File
- [ ] Create new Figma file
- [ ] Set up color styles from tokens above
- [ ] Create text styles from specifications
- [ ] Set up effect styles for shadows/glows

### 2. Create Components
- [ ] Header with theme switcher
- [ ] 3D icon component (master component with variants)
- [ ] Card component (with variants for different sizes)
- [ ] Button components (primary, secondary)
- [ ] Hexagonal center element
- [ ] Industry tab component

### 3. Build Layouts
- [ ] Hero section (responsive variants)
- [ ] Services bento grid (mobile, tablet, desktop)
- [ ] Industry tabs with sticky image
- [ ] Portfolio cards
- [ ] Footer structure

### 4. Apply Auto-layout
- [ ] Use Figma auto-layout for responsive behavior
- [ ] Set proper constraints for different screen sizes
- [ ] Create component variants for different states

### 5. Add Interactions
- [ ] Hover states for icons and cards
- [ ] Tab switching prototypes
- [ ] Theme switching demonstration

## 🔗 Export Settings

When exporting from Figma:
- **Images**: 2x PNG for retina displays
- **Icons**: SVG for scalability
- **Spacing**: Use 8px grid system
- **Colors**: Export as CSS custom properties

---

*This specification provides everything needed to recreate the Manar.ai design system in Figma. Each component has been designed to be modular and reusable.*