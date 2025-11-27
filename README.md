# 🌐 Personal Portfolio - React + TypeScript + Vite

A modern personal portfolio website built with **React**, **TypeScript**, and **Vite**. The project is designed with a focus on scalability, maintainability, and adherence to the **SOLID principles**.

---

## 🔗 Demo

View the live application at: [faisalfahlevi.vercel.app](https://faisalfahlevi.vercel.app/)

---

## 🚀 Features

- ⚡ **Vite**: Fast development and optimized builds.
- ⚛️ **React 19**: Leveraging the latest features of React.
- ✅ **TypeScript**: For robust, type-safe code.
- 🎨 **Tailwind CSS**: A utility-first CSS framework for modern styling.
- 🧱 **Component-Based Architecture**: Modular and reusable components.
- 📂 **Clean Folder Structure**: Organized based on SOLID principles for scalability.
- 📱 **Responsive Design**: Fully responsive for all devices.
- 🐋 **Docker Ready**: Includes `Dockerfile` and `docker-compose.yml` for containerization.

---

## 📂 Project Structure

The project follows a feature-based, modular structure to ensure a clean separation of concerns.

```
personal-app/
├── public/
│   └── assets/                 # Static assets (images, resume, etc.)
│
├── components/                 # Reusable UI components
│   ├── abstracts/              # Base components (Meta, Title)
│   ├── common/                 # Generic, shared components (Button, Input)
│   ├── footer/                 # Footer sections
│   ├── project/                # Components related to projects
│   └── section/                # Page sections (About, Skills, etc.)
│
├── constants/                  # App-wide constants (navigation links, skills data)
├── hooks/                      # Custom React hooks for shared logic
├── modules/                    # TypeScript interfaces and type definitions
├── pages/                      # Top-level page components
├── styles/                     # Global styles and CSS utilities
├── utils/                      # Utility functions
│
├── Dockerfile                  # Production Docker configuration
├── docker-compose.yml          # Docker Compose setup
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

---

## 🛠️ Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/fhlevi/personal-site.git
cd personal-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173) (or the next available port).

---

## 📦 Scripts

| Script         | Description                                       |
|----------------|---------------------------------------------------|
| `dev`          | Starts the development server with hot-reloading. |
| `build`        | Bundles the app for production.                   |
| `preview`      | Serves the production build locally for preview.  |
| `lint`         | Runs ESLint to check for code quality issues.     |

---

## 📌 Technologies Used

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/), [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

---

## 🧠 SOLID Principles Applied

This project aims to follow the SOLID principles to create a maintainable and scalable codebase.

| Principle | Description |
|----------|-------------|
| **S - Single Responsibility** | Each component or module has a single, well-defined responsibility. For example, `components/common/Button.tsx` only handles button rendering and logic. |
| **O - Open/Closed** | Components are designed to be extensible. For instance, the `Button` component can be extended with new variants without modifying its source code, using `class-variance-authority`. |
| **L - Liskov Substitution** | Abstract components can be seamlessly replaced by their concrete implementations. |
| **I - Interface Segregation** | Components only depend on the props they actually use, preventing bloated interfaces. TypeScript interfaces in `modules/` help enforce this. |
| **D - Dependency Inversion** | High-level modules (like pages) depend on abstractions (hooks or context) rather than concrete implementations, promoting loose coupling. |

---

## 📬 Contact

Have questions or feedback? Feel free to reach out via [GitHub](https://github.com/fhlevi).

---

> ⚠️ This project is for personal use and educational purposes.
