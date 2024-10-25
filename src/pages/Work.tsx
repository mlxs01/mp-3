import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/shared/PageContainer';
import { WorkExperience } from '../types/types';

const WorkSection = styled.section`
  margin-bottom: 2rem;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
    }
  }
`;

export const Work: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      title: "Teaching Assistant",
      company: "Boston University",
      period: "January 2023 - Present",
      responsibilities: [
        "Facilitated communication between professors and students, fostering a 10% increase in collaboration",
        "Led instructional sessions on computer systems in C and software engineering principles",
        "Proposed and discussed potential resolutions to academic challenges during staff meetings"
      ]
    },
    {
      title: "Software Engineer - AI Trainer",
      company: "Outlier",
      period: "May 2024 - August 2024",
      responsibilities: [
        "Evaluating the quality of AI-generated code, including summarizing rationale into a human-readable format",
        "Solve coding problems, writing functional and effective code",
        "Writing robust test cases to confirm code works efficiently and effectively"
      ]
    }
  ];

  return (
    <PageContainer>
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <WorkSection key={index}>
          <h3>{exp.title} at {exp.company}</h3>
          <p>{exp.period}</p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </WorkSection>
      ))}
    </PageContainer>
  );
};
