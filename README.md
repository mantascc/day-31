# CLI Material Palette - Interactive Browser Guide

An interactive, browser-based guide for learning CLI design patterns with embedded terminal simulators and runnable code examples.

## Features

✨ **Interactive Terminals** - Real terminal simulators using xterm.js
🎨 **Syntax Highlighting** - Beautiful code examples with highlight.js
🔄 **Multi-Language Support** - Examples in Bash, JavaScript, and Python
▶️ **Run Examples** - Execute code examples directly in browser terminals
📋 **Copy to Clipboard** - One-click code copying
🎯 **Smooth Navigation** - Auto-highlighting sidebar navigation
📱 **Responsive Design** - Works on desktop, tablet, and mobile

## Getting Started

### Option 1: Simple Local Server

```bash
# Navigate to the directory
cd "/Users/mantas/Desktop/hello world/cli"

# Start a simple HTTP server (Python 3)
python3 -m http.server 8000

# Or with Python 2
python -m SimpleHTTPServer 8000

# Or with Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open your browser to: `http://localhost:8000`

### Option 2: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Opening

Simply double-click `index.html` (some features may be limited due to CORS)

## Project Structure

```
cli/
├── index.html          # Main HTML structure
├── style.css           # Styling and theme
├── app.js              # Terminal logic and interactions
├── starter.md          # Original markdown guide
└── README.md           # This file
```

## Technology Stack

- **xterm.js** - Terminal emulator for the browser
- **highlight.js** - Syntax highlighting for code blocks
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid/Flexbox** - Modern responsive layout

## Customization

### Adding New Examples

Edit `app.js` and add to the `examples` object:

```javascript
const examples = {
    'my-example-bash': `echo "Hello World"`,
    'my-example-js': `console.log("Hello World")`,
    // ... more examples
};
```

### Changing Theme Colors

Edit CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0d1117;
    --accent: #58a6ff;
    --success: #3fb950;
    /* ... customize more */
}
```

### Adding More Sections

Follow the pattern in `index.html`:

```html
<section id="new-section" class="section">
    <h2>New Section</h2>
    <article class="subsection">
        <!-- Your content -->
    </article>
</section>
```

## Features Explained

### Interactive Terminals

Each example has an embedded terminal that simulates real CLI output:
- **Typing animation** when running examples
- **ANSI color support** for realistic output
- **Responsive sizing** adapts to viewport

### Language Tabs

Switch between Bash, JavaScript, and Python examples:
- Preserves code for each language
- Syntax highlighting per language
- Run button executes the active tab's code

### Navigation

- Smooth scroll to sections
- Auto-highlighting active section
- Responsive sidebar on mobile

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ IE11 (limited support)

## Extending the Guide

To add more content from `starter.md`:

1. Copy a section from the markdown
2. Convert to HTML structure following existing patterns
3. Add code examples to the `examples` object in `app.js`
4. Create a terminal element with unique ID
5. Add navigation link in sidebar

## Performance

The guide is optimized for performance:
- Lazy terminal initialization
- Syntax highlighting on demand
- Minimal dependencies (only CDN scripts)
- CSS animations for smooth UX

## Contributing

Ideas for enhancements:
- [ ] Add more sections from starter.md
- [ ] Real code execution (sandboxed)
- [ ] Export examples as files
- [ ] Dark/light theme toggle
- [ ] Search functionality
- [ ] Bookmark favorite examples

## License

This guide is based on the CLI Material Palette reference document.

## Credits

- **xterm.js** - Terminal emulation
- **highlight.js** - Code syntax highlighting
- **Design inspiration** - GitHub, Vercel, and modern CLI tools

---

**Enjoy exploring CLI design!** 🚀
