import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styled from 'styled-components';
import hallowImg from '../../assets/hallow.jpeg';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #333;
  background-image: url(${hallowImg});
  color: #f07e36;
  padding: 2rem;
  text-align: center;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: #333;
  background-image: url(${hallowImg});
  color: #f07e36;
  text-align: center;
  padding: 1rem;
  
  a {
    color: #fff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header>
        <h1>Michelle Sun</h1>
        <p>Resume Project</p>
      </Header>
      <MainContent>
        <Navigation />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainContent>
      <Footer>
        <p>© 2024 Michelle Sun. All rights reserved.</p>
        <a href="http://michellelxsun.info/">Credit</a>
      </Footer>
    </LayoutContainer>
  );
};
