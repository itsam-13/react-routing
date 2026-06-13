# React Vibe

A modern React application built with routing capabilities, showcasing a responsive multi-page experience with clean navigation and product showcasing features.

## Features

- **Client-side Routing** - Seamless navigation between pages using React Router DOM v7
- **Responsive Design** - Built with Tailwind CSS for a sleek, modern UI
- **Dynamic Routes** - Product detail pages with URL parameters
- **Modern Tech Stack** - React 19.2, Vite, and Tailwind CSS
- **Fast Development** - HMR (Hot Module Replacement) with Vite
- **Code Quality** - ESLint configured for code consistency

## Pages

- **Home** - Landing page
- **Product** - Product listing page
- **Product Details** - Dynamic product detail page (`:name` parameter)
- **Service** - Service offerings page
- **About** - About page

## Tech Stack

- **React** 19.2.0 - UI library
- **React Router DOM** 7.17.0 - Client-side routing
- **Vite** 8.0 - Build tool and dev server
- **Tailwind CSS** 4.3.0 - Utility-first CSS framework
- **ESLint** 9.39.1 - Code linting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itsam-13/react-routing.git
   cd react_vibe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` with HMR enabled.

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
react_vibe/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Service.jsx
│   │   ├── About.jsx
│   │   └── Nav.jsx
│   ├── Routes/
│   │   └── MainRoutes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Navigation

The app uses Tailwind-styled NavLinks with active state styling (rose-400 color on active routes):
- Home `/`
- Product `/product`
- Service `/service`
- About `/about`

## Styling

Tailwind CSS with a dark theme:
- Background: Gray-800
- Text: White
- Active link color: Rose-400
- Responsive padding and spacing utilities

## License

This project is part of the react-routing repository.

## Author

itsam-13
