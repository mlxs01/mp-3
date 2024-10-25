import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/shared/PageContainer';
import { Certification } from '../types/types';

const CertificationSection = styled.section`
  margin-bottom: 3rem;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0.5rem;
  }
`;

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "CompTIA Security+ Certification",
      credentialCode: "Z8DPL5BZ3BQQ1Y3E",
      obtained: "May 2024",
      expires: "May 2027"
    },
    {
      title: "IBM Cybersecurity Analyst Certification",
      credentialId: "QTWAB4A467E5",
      obtained: "Oct 2022"
    },
    {
      title: "Autodesk Certified User Certification",
      certificationProvider: "Certiport/Pearson Vue Certification",
      obtained: "May 2019"
    }
  ];

  return (
    <PageContainer>
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <CertificationSection key={index}>
          <h3>{cert.title}</h3>
          {cert.credentialCode && (
            <p>CompTIA Credential Code: {cert.credentialCode}</p>
          )}
          {cert.credentialId && (
            <p>Coursera Credential ID: {cert.credentialId}</p>
          )}
          {cert.certificationProvider && (
            <p>{cert.certificationProvider}</p>
          )}
          <p>Obtained: {cert.obtained}</p>
          {cert.expires && <p>Expires: {cert.expires}</p>}
        </CertificationSection>
      ))}
    </PageContainer>
  );
};