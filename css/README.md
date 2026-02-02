# CSS Architecture Documentation

## Overview

The CSS codebase follows a modular architecture with clear separation of concerns. Each module is responsible for a specific aspect of the styling, making the code easier to maintain, test, and extend.

## Module Structure

```
css/
├── main.css           # Main import file (entry point)
├── variables.css      # CSS custom properties and theme definitions
├── base.css          # Reset and foundational styles
├── components.css    # UI components (toggle, switcher)
├── header.css        # Header section styles
├── layout.css        # Main content layout and sections
├── animations.css    # All keyframe definitions
└── responsive.css    # Media queries and utilities
```

## Import Order

The modules are imported in a specific order in `main.css` to ensure proper cascading and dependency resolution:

1. **variables.css** - Must be first as it defines CSS custom properties used by all other modules
2. **base.css** - Establishes foundational styles and resets
3. **components.css** - UI components that may be used in other sections
4. **header.css** - Header-specific styles
5. **layout.css** - Main content and section layouts
6. **animations.css** - Animation definitions (can be loaded any time after variables)
7. **responsive.css** - Should be last to override styles at different breakpoints

## Module Details

### 1. variables.css

**Purpose:** Defines all CSS custom properties for theming and reusability

**Key Features:**

- Light theme colors (default :root)
- Dark theme colors (.dark-theme class)
- Spacing and sizing variables
- Animation timing constants
- Color palette for both themes

**Dependencies:** None

**Usage:**

```css
/* In any other module */
background-color: var(--bg-primary);
color: var(--text-primary);
padding: var(--spacing-lg);
```

### 2. base.css

**Purpose:** CSS reset and foundational styles

**Key Features:**

- Universal box-sizing reset
- Body base styles
- Container utilities
- Smooth scrolling
- Base font settings

**Dependencies:** variables.css

**Usage:**

```html
<div class="container">
  <!-- Content automatically gets max-width and centering -->
</div>
```

### 3. components.css

**Purpose:** Reusable UI component styles

**Components:**

- `.theme-toggle` - Theme switcher button with icon animations
- `.language-switcher` - Language selection buttons
- Button states (hover, active, focus)
- Icon transitions

**Dependencies:** variables.css, animations.css (for pulse animation)

**Usage:**

```html
<button class="theme-toggle">
  <span class="sun-icon">☀️</span>
  <span class="moon-icon">🌙</span>
</button>
```

### 4. header.css

**Purpose:** Header section including hero, avatar, and contact info

**Key Features:**

- `.header` - Main hero section with gradient and glow
- `.avatar-wrapper` - Animated profile image with hover effects
- `.glitch-text` - Name with glitch animation
- `.contact-info` - Contact link grid
- Status badge and animations

**Dependencies:** variables.css, animations.css

**Usage:**

```html
<header class="header">
  <div class="avatar-wrapper">
    <img src="avatar.jpg" alt="Avatar" class="avatar" />
  </div>
</header>
```

### 5. layout.css

**Purpose:** Main content structure and section layouts

**Key Features:**

- `.content` - Main content grid
- `.section` - Section containers with animations
- `.skills-grid` - Skills display grid
- `.timeline` - Experience timeline
- `.card` - Generic card component
- `.footer` - Footer styles

**Dependencies:** variables.css

**Usage:**

```html
<main class="content">
  <section class="section">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <!-- Skill items -->
    </div>
  </section>
</main>
```

### 6. animations.css

**Purpose:** All CSS animation keyframe definitions

**Animations:**

- `slideInLeft` - Slide from left with fade
- `slideInRight` - Slide from right with fade
- `fadeInUp` - Fade in with upward movement
- `pulse` - Pulsing scale effect
- `shimmer` - Shimmer/shine effect
- `bounceIn` - Bounce entrance
- `float` - Floating motion
- `glow` - Glowing effect
- `rotate` - Continuous rotation
- `slideDown` - Slide down with fade
- `glitch` - Glitch text effect

**Dependencies:** None (pure animations)

**Usage:**

```css
.my-element {
  animation: fadeInUp 0.6s ease-out;
}
```

### 7. responsive.css

**Purpose:** Responsive design and utility styles

**Key Features:**

- Mobile breakpoint (@media max-width: 600px)
- Tablet breakpoint (@media max-width: 960px)
- Custom scrollbar styling
- Text selection colors
- Print styles
- Utility classes

**Dependencies:** variables.css

**Breakpoints:**

- Desktop: > 960px (default styles)
- Tablet: 600px - 960px
- Mobile: < 600px

## Theme System

The portfolio supports light and dark themes using CSS custom properties:

### Theme Toggle

JavaScript adds/removes the `.dark-theme` class on `<body>`:

```javascript
document.body.classList.toggle("dark-theme");
```

### Theme Variables

```css
/* Light theme (default) */
:root {
  --bg-primary: #f5f5f5;
  --text-primary: #1a1a1a;
}

/* Dark theme */
body.dark-theme {
  --bg-primary: #0f0f0f;
  --text-primary: #e0e0e0;
}
```

All colors reference these variables, so theme switching is instant.

## Animation System

### Scroll Animations

Sections use the `.reveal` class with Intersection Observer:

1. Elements with `.reveal` class are initially invisible
2. JavaScript observes when they enter viewport
3. `.reveal.active` class is added
4. CSS transitions trigger the animation

### Hover Animations

Components have hover states for interactive feedback:

- Cards scale up on hover
- Links show underline transitions
- Buttons change color and transform

### Performance

- Uses `transform` and `opacity` for smooth 60fps animations
- Hardware acceleration with `will-change` where appropriate
- Reduced motion support with `@media (prefers-reduced-motion)`

## Responsive Design

### Mobile-First Approach

Base styles are optimized for mobile, with progressive enhancement for larger screens.

### Breakpoint Strategy

```css
/* Mobile: base styles (< 600px) */

/* Tablet */
@media (max-width: 960px) {
  /* Adjust layouts for medium screens */
}

/* Mobile */
@media (max-width: 600px) {
  /* Simplify for small screens */
}
```

### Common Responsive Patterns

- Grid columns reduce on smaller screens
- Font sizes scale down proportionally
- Padding and margins adjust for space
- Hide non-essential elements on mobile

## Best Practices

### CSS Custom Properties

✅ **DO:**

- Use variables for colors, spacing, and timing
- Define all colors in variables.css
- Keep variable names semantic (--bg-primary, not --color-blue)

❌ **DON'T:**

- Hardcode color values in modules
- Use magic numbers without variables
- Create duplicate variables

### Selectors

✅ **DO:**

- Use class selectors for styling
- Keep specificity low
- Use meaningful, descriptive class names

❌ **DON'T:**

- Use ID selectors for styling
- Nest selectors too deeply (max 3 levels)
- Use overly generic class names

### Performance

✅ **DO:**

- Use `transform` for animations
- Enable hardware acceleration when needed
- Minimize repaints and reflows

❌ **DON'T:**

- Animate properties that trigger layout (width, height, top, left)
- Use too many box-shadows or filters
- Create excessive animation complexity

### Organization

✅ **DO:**

- Keep related styles together
- Comment complex selectors
- Follow the established module structure

❌ **DON'T:**

- Mix concerns across modules
- Create circular dependencies
- Add styles to wrong modules

## Adding New Styles

### When to Create a New Module

Consider creating a new CSS module when:

1. Adding a major new feature with 50+ lines of CSS
2. Styles are self-contained and don't fit existing modules
3. Multiple unrelated sections would use the styles

### When to Extend Existing Modules

Add to existing modules when:

1. Styles are directly related to module's purpose
2. Adding variations of existing components
3. Less than 30 lines of new code

### Example: Adding a New Section

```css
/* In layout.css */
.new-section {
  padding: var(--spacing-xl) 0;
  background: var(--bg-secondary);
}

.new-section-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}
```

Then add responsive styles in `responsive.css`:

```css
/* In responsive.css */
@media (max-width: 600px) {
  .new-section-content {
    grid-template-columns: 1fr;
  }
}
```

## Debugging Tips

### Theme Not Applying

1. Check if `.dark-theme` class is on `<body>`
2. Verify variable is defined in both :root and .dark-theme
3. Use browser DevTools to inspect computed values

### Animation Not Working

1. Verify keyframe name matches animation name
2. Check if element is visible (display: none prevents animations)
3. Ensure animation properties are correctly spelled

### Responsive Issues

1. Check viewport meta tag in HTML
2. Test at actual breakpoint widths (960px, 600px)
3. Verify media query syntax and order

### Style Conflicts

1. Check import order in main.css
2. Inspect specificity in browser DevTools
3. Look for duplicate selectors across modules

## Browser Support

The CSS is compatible with:

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Opera: Last 2 versions

### Progressive Enhancement

- CSS Grid with fallbacks
- Custom properties with fallback values
- Modern pseudo-selectors with alternatives

## Maintenance

### Regular Tasks

- Review and consolidate duplicate styles
- Update color variables for consistency
- Optimize animation performance
- Test responsive breakpoints

### When Updating Modules

1. Test in all supported browsers
2. Verify theme switching still works
3. Check responsive layouts at all breakpoints
4. Validate CSS with linter if available

## Related Documentation

- [JavaScript Modules Documentation](../js/README.md)
- [Migration Guide](../MIGRATION.md)
- [Project README](../README.md)

## Questions?

When working with the CSS modules, remember:

- **Variables first** - Always define colors and values as variables
- **Mobile first** - Base styles for mobile, enhance for desktop
- **Performance** - Use transform and opacity for animations
- **Consistency** - Follow existing patterns and naming conventions
