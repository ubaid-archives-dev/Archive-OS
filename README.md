ARCHIVE-OS

A custom browser-based operating system featuring draggable windows, a live holographic background, and a built-in Decision Matrix app.

Screenshots
<img width="1920" height="1080" alt="Screenshot (75)" src="https://github.com/user-attachments/assets/31ad4e09-50e0-4ec2-be8e-57e9c171cedf" />

DEMO:
https://ubaid-archives-dev.github.io/Archive-OS/

WHAT IS INSIDE

MARKUP: (index.html) This sets up the basic desktop layout. It includes containers for the main desktop view, the persistent taskbar, the system notification window, and the custom decision matrix application.

Styling: (style.css) Hand-crafted CSS that defines the Solo Leveling neon theme. It uses Flexbox and Grid for the UI layouts, creates the hardware-accelerated hover effects, and layers the live .mp4 looping background.

Logic: (script.js) Vanilla JavaScript that powers the interactive elements. It handles the live taskbar clock, the coordinate math for dragging windows around the screen, and the algorithm that calculates pros and cons.

Run Locally

Clone the repository: git clone [https://github.com/ubaid-archives-dev/archive-os.git](https://github.com/ubaid-archives-dev/archive-os.git)

No dependencies or build tools required. Simply open the index.html file directly in any modern web browser to start the OS.

HOW IT WORKS

This was built as a Stardance mission to create my own lightweight WebOS experience. I wrote the CSS and JavaScript completely by hand instead of pulling in a framework. This kept the environment fast and gave me total control over the DOM manipulation. Instead of hardcoding math for a single window, I engineered a reusable drag-and-drop factory function to handle movement across the screen. For my custom app, I built a Decision Matrix utility that takes user input for pros and cons, calculates the mathematical difference, and generates a final system recommendation.
