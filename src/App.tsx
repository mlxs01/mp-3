import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './styles/GobalStyles';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { EducationPage } from './pages/Education';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Certifications } from './pages/Certifications';

// Define the router with routes for each page
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Layout />, // Uses Layout component for the main structure
    children: [ // Nested routes inside Layout
      { index: true, element: <Home /> }, // Default route renders the Home page
      { path: "work", element: <Work /> }, // Route for Work page
      { path: "education", element: <EducationPage /> }, // Route for Education page
      { path: "skills", element: <Skills /> }, // Route for Skills page
      { path: "certification", element: <Certifications /> }, // Route for Certifications page
      { path: "projects", element: <Projects /> } // Route for Projects page
    ]
  }
]);

// Main App component rendering global styles and router
export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles /> {/* GlobalStyles for consistent styling across the app */}
      <RouterProvider router={router} /> {/* Provides routing context to the app */}
    </>
  );
};
