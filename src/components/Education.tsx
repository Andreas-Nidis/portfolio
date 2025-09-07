import React from "react";
import styled from "styled-components";
import { TbCertificate } from "react-icons/tb";

const educationData = [
  {
    degree: "Codecademy Full-Stack Development Certificate",
    institution: "Codecademy",
    year: "2025",
    highlights: [
      "Built projects using React, Node.js, Express, and SQL",
      "Applied version control (Git/GitHub) and project documentation best practices"
    ],
    link: "https://www.codecademy.com/profiles/yourusername/certificates/fullstack"
  },
  {
    degree: "Codecademy Computer Science Certificate",
    institution: "Codecademy",
    year: "2024",
    highlights: [
      "Covered fundamentals of programming, data structures, algorithms, and computer architecture"
    ],
    link: "https://www.codecademy.com/profiles/yourusername/certificates/cs"
  },
  {
    degree: "Bachelor of Arts in Philosophy, Minor in Economics",
    institution: "Vrije Universiteit Amsterdam",
    year: "2021 - 2024",
    highlights: [
      "Developed strong analytical and logical reasoning skills",
      "Completed research projects requiring clear documentation and structured arguments"
    ]
  },
];

const Education: React.FC = () => {
  return (
    <EducationWrapper id="education">
      <Title>Education & Certifications</Title>
      {educationData.map((edu, idx) => (
        <EduCard key={idx}>
          <Header>
            {edu.link ? (
              <ExternalLink href={edu.link} target="_blank" rel="noopener noreferrer">
                <IconWrapper><TbCertificate /></IconWrapper>
              </ExternalLink>
            ) : null}
            <Degree>{edu.degree}</Degree>
          </Header>
          <Institution>{edu.institution} | {edu.year}</Institution>
          <Highlights>
            {edu.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </Highlights>
        </EduCard>
      ))}
    </EducationWrapper>
  );
};

export default Education;

// Styled Components
const EducationWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const EduCard = styled.div`
  background: #f5f5f5;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  color: #113152;
`;

const Degree = styled.h3`
  margin: 0;
  color: #113152;
`;

const Institution = styled.p`
  font-style: italic;
  color: #43607d;
  margin: 0.3rem 0 0.5rem 0;
`;

const Highlights = styled.ul`
  list-style: disc inside;
  line-height: 1.6;
  margin: 0;
`;

const ExternalLink = styled.a`
  color: #113152;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;
