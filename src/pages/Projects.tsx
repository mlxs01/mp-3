import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/shared/PageContainer';
import { ListContainer } from '../components/shared/ListContainer';
import { Project } from '../types/types';
import Calculator from '../components/Calculator';

const ProjectSection = styled.section`
  margin-bottom: 3rem;
  
  h3 {
    margin-bottom: 1rem;
  }
`;

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "WealthSync Pro - Hackathon Project",
      description: [
        "Developed an npm package providing real-time cryptocurrency, foreign exchange, and stock market data using APIs",
        "Addressed gaps in the finance aggregation space with a user-friendly and robust solution",
        "Collaborated on innovation under pressure, focusing on problem-solving financial data access for users"
      ]
    },
    {
      title: "The New Commonwealth Fund - Massachusetts CS Education Project",
      description: [
        "Led team presentations to stakeholders on the analysis of pivotal datasets concerning project objectives",
        "Provided essential data features and visuals to support team members in expanding project analyses 3 fold",
        "Fostered team collaboration to explore new analytical angles and correlations within datasets"
      ]
    },
    {
      title: "Software Engineering Course - Weather Report Project",
      description: [
        "Managed API calls to connect 2 developers on the application's front and back end",
        "Established and enforced effective communication between team members"
      ]
    }
  ];

  return (
    <PageContainer>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectSection key={index}>
          <h3>{project.title}</h3>
          <ListContainer>
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ListContainer>
        </ProjectSection>
      ))}
      <Calculator />
    </PageContainer>
  );
};