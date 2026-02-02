# JavaScript Modules Documentation

This folder contains the modularized JavaScript code for the portfolio, following ES6 module standards and separation of concerns principles.

## File Structure

```
js/
├── main.js              # Main entry point
├── theme-toggle.js      # Theme switching functionality
├── language-switcher.js # Language translation functionality
├── animations.js        # All visual animations
└── utils.js            # Reusable utility functions
```

## Module Descriptions

### `main.js`

**Purpose:** Application entry point that initializes all modules.

**Responsibilities:**

- Waits for DOM ready
- Initializes theme toggle
- Initializes language switcher
- Initializes animations
- Error handling

**Exports:** None (entry point)

---

### `theme-toggle.js`

**Purpose:** Handles dark/light theme switching with localStorage persistence.

**Responsibilities:**

- Apply saved theme on load
- Toggle between light and dark themes
- Save theme preference to localStorage
- Apply animations to theme button

**Exports:**

- `initThemeToggle()` - Initializes theme functionality
- `getCurrentTheme()` - Returns current theme ('light' or 'dark')

**Dependencies:**

- `utils.js` (createThemeRipple, getStorageItem, setStorageItem)

---

### `language-switcher.js`

**Purpose:** Manages bilingual support (English/German) with persistence.

**Responsibilities:**

- Load saved language preference
- Switch between English and German
- Animate text transitions
- Update all translated elements
- Manage button active states

**Exports:**

- `initLanguageSwitcher()` - Initializes language functionality
- `getCurrentLanguage()` - Returns current language code

**Dependencies:**

- `utils.js` (createRipple, getStorageItem, setStorageItem)

---

### `animations.js`

**Purpose:** Handles all visual effects and animations.

**Responsibilities:**

- Smooth scroll for anchor links
- Scroll reveal animations (Intersection Observer)
- Floating particles in header
- Typing animation for name
- Parallax scrolling effect
- Card click animations
- Section title staggered animations

**Exports:**

- `initAnimations()` - Initializes all animations
- `fadeAnimation(element, callback)` - Reusable fade effect

**Dependencies:** None

---

### `utils.js`

**Purpose:** Reusable utility functions used across modules.

**Responsibilities:**

- Ripple effect creation
- Theme ripple effect
- localStorage getter/setter wrappers

**Exports:**

- `createRipple(button, event)` - Creates ripple effect on button
- `createThemeRipple(button)` - Creates themed ripple for theme button
- `getStorageItem(key, defaultValue)` - Get from localStorage with fallback
- `setStorageItem(key, value)` - Save to localStorage

**Dependencies:** None

---

## Design Principles Applied

### 1. **Separation of Concerns**

Each module has a single, well-defined responsibility:

- Theme management is isolated
- Language management is isolated
- Animations are separate from business logic
- Utilities are reusable

### 2. **Single Responsibility Principle**

Each function does one thing:

- `initThemeToggle()` only initializes theme
- `switchLanguage()` only switches language
- Helper functions are small and focused

### 3. **DRY (Don't Repeat Yourself)**

Common functionality is extracted to utils:

- Ripple effects reused by multiple modules
- localStorage operations centralized
- Animation logic consolidated

### 4. **Encapsulation**

Private functions are not exported:

- Internal helper functions remain module-private
- Only public API is exposed via exports

### 5. **Dependency Injection**

Modules import only what they need:

- Clear dependency tree
- Easy to test and maintain

## Usage

### Import in HTML

```html
<script type="module" src="js/main.js"></script>
```

### Import in Other Modules

```javascript
import { initThemeToggle } from "./theme-toggle.js";
import { createRipple } from "./utils.js";
```

## Browser Compatibility

Requires browsers that support:

- ES6 Modules (type="module")
- Modern JavaScript features (const, let, arrow functions)
- All modern browsers (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)

## Benefits of This Architecture

1. **Maintainability**: Each module can be updated independently
2. **Testability**: Functions can be tested in isolation
3. **Readability**: Clear structure and purpose for each file
4. **Scalability**: Easy to add new features in new modules
5. **Reusability**: Utils can be reused across the project
6. **Debugging**: Easier to locate and fix issues
7. **Performance**: Browser can load modules in parallel
8. **Code Organization**: Logical grouping of related functionality

## Adding New Functionality

To add a new feature:

1. Create a new module file (e.g., `js/new-feature.js`)
2. Export initialization function
3. Import and call in `main.js`
4. Add dependencies from `utils.js` if needed

Example:

```javascript
// js/new-feature.js
export function initNewFeature() {
  // Your code here
}

// js/main.js
import { initNewFeature } from "./new-feature.js";

document.addEventListener("DOMContentLoaded", function () {
  initNewFeature();
});
```
