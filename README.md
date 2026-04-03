# PrivatePK---CombatCalc

A combat calculator application for Old School RuneScape pures, with a customizable header logo.

## Live Site

The combat calculator is hosted on GitHub Pages at:

**https://TaughtMeNothing.github.io/PrivatePK---CombatCalc/**

> **Note:** If you previously shared a link using an older GitHub username, that link will no longer work after a username change. Please update any bookmarks or shared links to use the URL above. The site is automatically deployed via GitHub Actions on every push to `main`.

## How to Replace the Logo

The logo is located in the header of the application. To replace it with your own image:

1. **Prepare your logo image:**
   - Recommended formats: PNG, SVG, or JPG
   - Recommended size: 200x200 pixels or similar aspect ratio
   - For best quality, use PNG with transparency or SVG

2. **Replace the logo file:**
   - Navigate to `assets/images/` directory
   - Replace `logo.svg` with your image file
   - If using a different format, update the file reference in `index.html`:
     - Open `index.html`
     - Find the line: `<img src="assets/images/logo.svg" alt="PrivatePK Logo" class="logo" id="logo">`
     - Change `logo.svg` to your filename (e.g., `logo.png`, `logo.jpg`)

3. **Run the application:**
   - Simply open `index.html` in a web browser
   - The logo will appear in the header

## Project Structure

```
PrivatePK---CombatCalc/
├── index.html          # Main HTML file with header containing the logo
├── styles.css          # CSS styling for header and logo
├── script.js           # JavaScript for application logic
├── assets/
│   └── images/
│       └── logo.svg    # Logo image (replace this with your own)
└── README.md           # This file
```

## Features

- **Responsive Header**: The header adapts to different screen sizes
- **Logo Integration**: Logo is prominently displayed in the header
- **Easy Customization**: Simply replace the image file to update the logo
- **Fallback Support**: If the logo fails to load, a fallback "PK" text is displayed

## Customization

### Adjusting Logo Size

To change the logo size, edit `styles.css`:

```css
.logo {
    height: 60px;  /* Change this value */
    width: auto;
}
```

### Changing Header Colors

To modify the header gradient colors, edit the `.header` class in `styles.css`:

```css
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```