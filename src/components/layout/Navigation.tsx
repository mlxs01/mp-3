import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled component for navigation container
const Nav = styled.nav`
  background-color: orange;
  width: 15rem; // Width for desktop view
  padding: 2rem;

  // Responsive styles for mobile view
  @media (max-width: 750px) {
    width: 100%;
    padding: 0;
  }
`;

// Styled component for the list containing navigation items
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  // Layout adjustment for mobile view
  @media (max-width: 750px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

// Styled component for each navigation item
const NavItem = styled.li`
  margin-bottom: 1rem; // Adds spacing between items in desktop view

  // Mobile view styling
  @media (max-width: 750px) {
    margin-bottom: 0;
    flex: 1;
    text-align: center;
  }
`;

// Styled component for the navigation links
const StyledNavLink = styled(NavLink)`
  text-decoration: none; // Removes underline from links
  color: #333; // Default text color
  padding: 0.5rem;
  display: block;
  border-radius: 0.25rem;
  font-size: calc(1vw + 0.5rem); // Dynamic font size

  // Adjust padding and border-radius for mobile view
  @media (max-width: 750px) {
    padding: 1rem 0.5rem;
    border-radius: 0;
  }
  
  &:hover {
    background-color: #e0e0e0; // Background color on hover
  }
  
  &.active {
    background-color: #333; // Background for active link
    color: #fff; // Text color for active link
  }
`;

// Functional component to render the navigation menu
export const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavList>
        {/* Links for each navigation item */}
        <NavItem><StyledNavLink to="/">Home</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/work">Work</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/education">Education</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/skills">Skills</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/certification">Certification</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/projects">Projects</StyledNavLink></NavItem>
      </NavList>
    </Nav>
  );
};
