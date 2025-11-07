// Code examples database
const examples = {
    'grid-bash': `Terminal width: 80 columns
================================================================================`,

    'grid-js': `Terminal: 80 cols × 24 rows
────────────────────────────────────────────────────────────────────────────────
Every character takes one cell
────────────────────────────────────────────────────────────────────────────────`,

    'grid-python': `Terminal: 80 cols × 24 rows
────────────────────────────────────────────────────────────────────────────────
                     Each character occupies one cell
────────────────────────────────────────────────────────────────────────────────`,

    'tree-bash': `project
├── src
│   ├── index.js
│   └── utils.js
└── package.json`,

    'tree-js': `└── src
└──   index.js
└──   utils.js
└── package.json`,

    'tree-python': `Root Item
  ├─ Child 1
  │  └─ Grandchild
  └─ Child 2

Next Section
  └─ New item`,

    'styles-bash': `<span style="font-weight: bold">Bold text</span>
<span style="opacity: 0.6">Dim text</span>
<span style="text-decoration: underline">Underlined</span>
<span style="background: #fff; color: #000">Inverse</span>
<span style="text-decoration: line-through">Strikethrough</span>`,

    'styles-js': `<span style="font-weight: bold">Bold text</span>
<span style="opacity: 0.6">Dim text</span>
<span style="text-decoration: underline">Underlined</span>`,

    'colors-bash': `<span style="color: #000">Black</span> (30) / <span style="color: #808080">Bright Black</span> (90)
<span style="color: #c00">Red</span> (31) / <span style="color: #f00">Bright Red</span> (91)
<span style="color: #0c0">Green</span> (32) / <span style="color: #0f0">Bright Green</span> (92)
<span style="color: #c80">Yellow</span> (33) / <span style="color: #ff0">Bright Yellow</span> (93)
<span style="color: #00c">Blue</span> (34) / <span style="color: #00f">Bright Blue</span> (94)
<span style="color: #c0c">Magenta</span> (35) / <span style="color: #f0f">Bright Magenta</span> (95)
<span style="color: #0cc">Cyan</span> (36) / <span style="color: #0ff">Bright Cyan</span> (96)
<span style="color: #ccc">White</span> (37) / <span style="color: #fff">Bright White</span> (97)`,

    'colors-js': `<span style="color: #0f0">✓ Success</span>
<span style="color: #f00">✗ Error</span>
<span style="color: #ff0">⚠ Warning</span>`,

    'symbols-bash': `Status & Completion:
  ✓ Success  ✗ Failed  ⚠ Warning  ℹ Info

Tree Structure:
  ├── src
  │   └── index.js
  └── package.json

Progress:
  ● ○ ○ ○ ○  [20%]
  ■ ■ ■ □ □  [60%]

Arrows & Navigation:
  → Next  ← Back  ↑ Up  ↓ Down`,

    'progress-bash': `[█    ] 20%
[██   ] 40%
[███  ] 60%
[████ ] 80%
[█████] 100%`,

    'interactive-bash': `? Select environment: dev
You selected: dev`
};

// Copy language button functionality
document.querySelectorAll('.copy-lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        const code = this.dataset.code;
        const originalText = this.textContent;

        navigator.clipboard.writeText(code).then(() => {
            this.classList.add('copied');
            this.textContent = 'Copied!';

            setTimeout(() => {
                this.classList.remove('copied');
                this.textContent = originalText;
            }, 2000);
        });
    });
});

// Execute button functionality
document.querySelectorAll('.execute-btn').forEach(button => {
    button.addEventListener('click', function() {
        const exampleKey = this.dataset.example;
        const outputId = `output-${exampleKey}`;
        const outputElement = document.getElementById(outputId);

        if (outputElement) {
            // Special handling for progress/temporal animations
            if (exampleKey === 'progress') {
                animateProgress(outputElement);
            } else if (examples[`${exampleKey}-bash`]) {
                outputElement.innerHTML = examples[`${exampleKey}-bash`];
            }
        }
    });
});

// Animate progress indicators
function animateProgress(element) {
    const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const progressBlocks = ['▏', '▎', '▍', '▌', '▋', '▊', '▉', '█'];
    const circleFrames = ['◐', '◓', '◑', '◒'];
    const dotFrames = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];

    let frame = 0;
    let progress = 0;

    const interval = setInterval(() => {
        const spinner = spinnerFrames[frame % spinnerFrames.length];
        const circle = circleFrames[frame % circleFrames.length];
        const dots = dotFrames[frame % dotFrames.length];

        const bar = '█'.repeat(Math.floor(progress / 10)) + ' '.repeat(10 - Math.floor(progress / 10));
        const blocks = progressBlocks[Math.min(7, Math.floor((progress % 10) * 0.8))];

        element.innerHTML = `Spinner: ${spinner} Loading...
Circle:  ${circle} Processing...
Dots:    ${dots} Working...

Progress Bar: [${bar}] ${progress}%
Block Style:  ${blocks}${blocks}${blocks}${blocks}${blocks}`;

        frame++;
        progress += 2;

        if (progress > 100) {
            clearInterval(interval);
            element.innerHTML = `Spinner: ✓ Complete!
Circle:  ✓ Complete!
Dots:    ✓ Complete!

Progress Bar: [${'█'.repeat(10)}] 100%
Block Style:  ████████`;
        }
    }, 100);
}

// Tab navigation for sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });

            // Remove active from all nav links
            document.querySelectorAll('nav a').forEach(a => {
                a.classList.remove('active');
            });

            // Show target section
            target.classList.add('active');

            // Activate nav link
            this.classList.add('active');
        }
    });
});

// Show first section by default
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = document.querySelector('section');
    const firstNavLink = document.querySelector('nav a');

    if (firstSection) {
        firstSection.classList.add('active');
    }
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
});

console.log('CLI Material Palette loaded');
