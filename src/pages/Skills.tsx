import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/shared/PageContainer';
import { Skill } from '../types/types';

const SkillSection = styled.section`
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

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Technical Skills",
      items: [
        "Programming languages: C, Java, Python, HTML/CSS",
        "Operating Systems: Unix, Linux",
        "Databases: MySQL",
        "Version control: Git",
        "Software development tools: Visual Studio Code"
      ]
    },
    {
      category: "General Skills",
      items: [
        "Written and Verbal Communication",
        "Adaptability and analytical skills",
        "Chinese - Mandarin",
        "Google/Microsoft Applications"
      ]
    }
  ];

  return (
    <PageContainer>
      <h2>Skills</h2>
      {skills.map((skillSet, index) => (
        <SkillSection key={index}>
          <h3>{skillSet.category}</h3>
          <ul>
            {skillSet.items.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </SkillSection>
      ))}
    </PageContainer>
  );
};