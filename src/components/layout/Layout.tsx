import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styled from 'styled-components';
import hallowImg from '../../assets/hallow.jpeg';

// Container for the entire layout, setting minimum height and layout direction
const LayoutContainer = styled.div`
  min-height: 100vh; /* Ensures full viewport height */
  display: flex;
  flex-direction: column;
`;

// Styled header component with a background image, color, and text styling
const Header = styled.header`
  background-color: #333; // Fallback color in case image doesn't load
  background-image: url(${hallowImg}); // Background image from assets
  color: #f07e36; // Text color
  padding: 2rem;
  text-align: center;
`;

// Main content area that flexibly accommodates navigation and content sections
const MainContent = styled.main`
  display: flex;
  flex: 1; // Expands to fill available space

  // Responsive layout for smaller screens
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

// Styled component for content area to hold page content
const ContentArea = styled.div`
  flex: 1; // Takes up remaining space next to navigation
  padding: 2rem; // Inner padding for spacing
`;

// Footer component with background styling and link formatting
const Footer = styled.footer`
  background-color: #333; // Background color
  background-image: url(${hallowImg}); // Reuses background image
  color: #f07e36;
  text-align: center;
  padding: 1rem;

  a {
    color: #fff; // Link color
    text-decoration: none;

    &:hover {
      text-decoration: underline; // Adds underline on hover
    }
  }
`;

// Layout component to structure the page with header, navigation, main content, and footer
export const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header>
        <h1>Michelle Sun</h1> {/* Title in header */}
        <p>Resume Project</p> {/* Subtitle or description */}
      </Header>
      <MainContent>
        <Navigation /> {/* Navigation component included on the left side */}
        <ContentArea>
          <Outlet /> {/* Placeholder for nested routes' content */}
        </ContentArea>
      </MainContent>
      <Footer>
        <p>© 2024 Michelle Sun. All rights reserved.</p> {/* Footer text */}
        <a href="http://michellelxsun.info/">Credit</a> {/* Link with hover effect */}
      </Footer>
    </LayoutContainer>
  );
};
