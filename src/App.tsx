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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "education", element: <EducationPage /> },
      { path: "skills", element: <Skills /> },
      { path: "certification", element: <Certifications /> },
      { path: "projects", element: <Projects /> }
    ]
  }
]);

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};