# Game Design Portfolio

A modern, responsive portfolio website showcasing game design and development projects. Built with React, TypeScript, and Framer Motion for smooth animations.

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎮 Game design focused portfolio sections
- 📧 Contact form
- 🚀 Fast and optimized with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **CSS3** - Styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Customization

- Update project data in `src/components/Projects.tsx`
- Modify skills in `src/components/Skills.tsx`
- Edit personal information in `src/components/About.tsx` and `src/components/Hero.tsx`
- Update social links in `src/components/Contact.tsx`
- Customize colors in `src/index.css` CSS variables

## License

MIT
