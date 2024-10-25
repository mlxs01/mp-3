import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/shared/PageContainer';
import profilePic from '../assets/Linkedin_PFP.jpg';

const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  max-width: 16vw;
  border-radius: 50%;
  margin: 2rem 0;
`;

const Introduction = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

export const Home: React.FC = () => {
  return (
    <PageContainer>
      <ProfileSection>
        <ProfileImage src={profilePic} alt="Picture of Michelle Sun" />
        <Introduction>
          <p>
            Hello my name is Michelle Sun. I am a Dual Degree computer science BA/MS
            student here at Boston University.
          </p>
          <br />
          <p>
            Welcome to my website! Here you will find my experiences, skills, and
            other information about me within the computer science realm.
          </p>
        </Introduction>
      </ProfileSection>
    </PageContainer>
  );
};