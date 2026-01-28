# Nawaf Alhabib - Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap 5, showcasing projects, skills, and professional experience.

## 🚀 Features

- **Modern UI/UX**: Premium design with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: WCAG compliant with keyboard navigation and ARIA labels
- **Fast Performance**: Lazy-loaded PDF viewer and optimized assets
- **Easy Theming**: CSS variables for quick color palette customization
- **Project Showcase**: Interactive project cards with detailed views
- **PDF Integration**: Embedded PDF viewer for internship documentation

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd First_Project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Place the PDF file (IMPORTANT):**
   - Create the directory structure: `public/docs/`
   - Place your PDF file at: `public/docs/FreightLX_Internship_Activity_Log_Nawaf_Alhabib.pdf`
   - The PDF viewer will look for the file at this exact path

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - The app will be running at `http://localhost:5173`

## 📁 Project Structure

```
First_Project/
├── public/
│   └── docs/                          # PDF files location
│       └── FreightLX_Internship_Activity_Log_Nawaf_Alhabib.pdf
├── src/
│   ├── components/                    # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── pages/                         # Page components
│   │   ├── Home.jsx
│   │   ├── LogAnalyzerDetail.jsx
│   │   ├── FreightLXDetail.jsx
│   │   └── CurrentWorkDetail.jsx
│   ├── App.jsx                        # Main app with routing
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles & theming
├── package.json
└── README.md
```

## 🎨 Customizing the Color Palette

The entire color scheme is controlled by CSS variables in `src/index.css`. To change colors:

1. Open `src/index.css`
2. Find the `:root` section at the top
3. Modify the color variables:

```css
:root {
  --bg: #0f0f1e;                    /* Main background */
  --bg-secondary: #1a1a2e;          /* Secondary background */
  --text: #e4e4e7;                  /* Main text color */
  --text-muted: #a1a1aa;            /* Muted text */
  --primary: #6366f1;               /* Primary brand color */
  --primary-hover: #4f46e5;         /* Primary hover state */
  --accent: #8b5cf6;                /* Accent color */
  --card-bg: #1e1e30;               /* Card backgrounds */
  --card-border: #2d2d44;           /* Card borders */
  /* ... more variables ... */
}
```

4. Save the file and the changes will apply immediately

## 🧭 Navigation & Routes

- **Home (`/`)**: Main landing page with all sections
- **Log Analyzer (`/projects/log-analyzer`)**: Graduation project details
- **FreightLX (`/projects/freightlx`)**: Internship activity log with PDF viewer
- **Current Work (`/projects/current-work`)**: Learning goals and upcoming projects

## 📱 Sections Overview

### Hero Section
- Professional headline and introduction
- Call-to-action buttons (View Projects, Download CV)
- Achievement stats chips

### About Section
- Professional bio
- Education and focus areas
- Interests and tools

### Projects Section
- 3 interactive project cards
- Click to view detailed information
- Tags and descriptions

### Skills Section
- Categorized skill chips
- Front-end, Tools, and AI/ML categories
- Hover effects on each skill

### Contact Section
- Contact form UI (non-functional demo)
- Social media links placeholders
- Email contact information

## 🔧 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

The built application can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: `firebase deploy`

## 🎯 Key Technologies

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **Bootstrap 5**: Responsive grid and components
- **React Router**: Client-side routing
- **react-pdf**: PDF document viewer
- **React Icons**: Icon library
- **CSS Variables**: Dynamic theming

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus states
- Proper heading hierarchy
- Color contrast compliance

## 📝 Customization Tips

### Update Personal Information
- Edit content in component files (`Hero.jsx`, `About.jsx`, etc.)
- Update social links in `Contact.jsx`
- Modify project data in `Projects.jsx`

### Add New Projects
1. Add project data to the `projects` array in `Projects.jsx`
2. Create a new detail page in `src/pages/`
3. Add a new route in `App.jsx`

### Change Fonts
- Update the Google Fonts import in `index.html`
- Modify `--font-body` and `--font-heading` in `index.css`

## 🐛 Troubleshooting

### PDF Not Loading
- Ensure the PDF file is at: `public/docs/FreightLX_Internship_Activity_Log_Nawaf_Alhabib.pdf`
- Check browser console for errors
- Try using the "Open in New Tab" or "Download PDF" buttons

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear browser cache

### Styling Issues
- Check that Bootstrap CSS is loading from CDN
- Verify CSS variable values in `index.css`
- Inspect elements in browser DevTools

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Nawaf Alhabib**
- Email: nawaf@example.com
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React, Bootstrap, and modern web technologies.
