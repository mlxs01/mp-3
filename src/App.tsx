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
// Please note: the newest version, v6, changed Component to element for flexibility
const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/work", element: <Layout><Work /></Layout> },
  { path: "/education", element: <Layout><EducationPage /></Layout> },
  { path: "/skills", element: <Layout><Skills /></Layout> },
  { path: "/certification", element: <Layout><Certifications /></Layout> },
  { path: "/projects", element: <Layout><Projects /></Layout> },
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
