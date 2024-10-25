import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: orange;
  /* Desktop styles */
  width: 15rem;
  padding: 2rem;
  
  @media (max-width: 750px) {
    width: 100%;
    padding: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1rem;

  @media (max-width: 750px) {
    margin-bottom: 0;
    flex: 1;
    text-align: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 0.5rem;
  display: block;
  border-radius: 0.25rem;
  font-size: calc(1vw + 0.5rem);
  
  @media (max-width: 750px) {
    padding: 1rem 0.5rem;
    border-radius: 0;
  }
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &.active {
    background-color: #333;
    color: #fff;
  }
`;

export const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavList>
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