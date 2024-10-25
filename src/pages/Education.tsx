import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/shared/PageContainer';
import { Education } from '../types/types';

const EducationSection = styled.section`
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin: 0.5rem 0;
  }
`;

export const EducationPage: React.FC = () => {  // Changed from Education to EducationPage
  const education: Education = {
    school: "Boston University",
    degree: "Computer Science Dual Degree - BA/MS",
    description: "Bachelor of Arts and Masters of Science in Computer Science",
    graduation: "May 2025",
    gpa: 3.56
  };

  return (
    <PageContainer>
      <h2>{education.school}</h2>
      <EducationSection>
        <h3>{education.degree}</h3>
        <p>{education.description}</p>
        <p>Expected Graduation: {education.graduation}</p>
        <p>Current GPA of {education.gpa}</p>
      </EducationSection>
    </PageContainer>
  );
};