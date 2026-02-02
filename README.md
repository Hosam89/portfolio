# Portfolio Website

A modern, animated portfolio website with bilingual support (English/German) and dark/light theme toggle.

## Features

- 🌐 **Bilingual Support**: Toggle between English and German
- 🌓 **Dark/Light Theme**: Switch between dark and light modes
- ✨ **Smooth Animations**: Multiple engaging animations throughout
- 📱 **Fully Responsive**: Works on all devices
- 🎨 **Modern Design**: Clean and professional interface
- 🌟 **Interactive Elements**: Hover effects, scroll animations, and more
- 💾 **Persistent Settings**: Your theme and language preferences are saved

## Animations Included

1. **Theme Switcher**
   - Smooth color transitions between themes
   - Rotating icon animation on toggle
   - Ripple effect on click
   - Persistent theme preference

2. **Language Switcher**
   - Slide-in animation on page load
   - Ripple effect on click
   - Pulse animation for active language
   - Smooth translation transitions

3. **Header Animations**
   - Typing effect on name
   - Floating avatar with bounce-in effect
   - Glowing background animation
   - Parallax scrolling effect
   - Shimmer effect on name text

4. **Content Animations**
   - Scroll reveal for sections
   - Staggered fade-in for content
   - Hover lift effects on cards
   - Gradient underline animation on titles
   - Floating particles in header

5. **Interactive Elements**
   - Contact link shimmer effects
   - Skill category scale animations
   - Project card hover effects
   - Timeline item animations

## How to Use

1. Open `index.html` in your web browser
2. **Theme Toggle**: Click the sun/moon button (☀️/🌙) in the top-left corner to switch between light and dark themes
3. **Language Toggle**: Click the language switcher (🇬🇧 EN / 🇩🇪 DE) in the top-right corner to switch languages
4. Your preferences (theme and language) are saved automatically in localStorage

## Files

- `index.html` - Main HTML structure with bilingual data attributes
- `style.css` - All styles, animations, and theme variables
- `script.js` - Theme toggle, language switching logic, and interactive animations

## Browser Support

Works in all modern browsers that support:

- CSS animations
- CSS Grid
- Flexbox
- CSS Variables (Custom Properties)
- localStorage
- IntersectionObserver API

## Customization

### Changing Colors

The portfolio uses CSS variables for easy theming. Edit the `:root` and `.dark-theme` variables in `style.css`:

**Light Theme:**

- `--color-primary`: `#0d3b8a` (Primary blue)
- `--color-accent`: `#5ee7df` (Accent cyan)
- `--color-accent-alt`: `#4fc3e4` (Secondary accent)
- `--bg-primary`: `#f7f9fc` (Background)
- `--text-primary`: `#1f2a44` (Text color)

**Dark Theme:**

- `--color-primary`: `#5ee7df` (Primary cyan)
- `--color-accent`: `#5ee7df` (Accent cyan)
- `--color-accent-alt`: `#ff6b6b` (Coral accent)
- `--bg-primary`: Dark gradient
- `--text-primary`: `#e0e0e0` (Light text)

### Creating a Custom Theme

1. Add your theme colors in the CSS variables section
2. Create a new theme class like `.custom-theme`
3. Update the JavaScript to toggle your custom theme

### Adding More Languages

1. Add data attributes to HTML elements (e.g., `data-fr="French text"`)
2. Add new language button in the language switcher
3. Update the JavaScript in `script.js` to handle the new language

### Modifying Animations

All animations are defined in `style.css`. Look for `@keyframes` definitions to customize:

- Duration: Change the time value (e.g., `3s` to `5s`)
- Effect: Modify the animation properties
- Delay: Adjust `animation-delay` values

## Credits

Created by Hosam Othman
