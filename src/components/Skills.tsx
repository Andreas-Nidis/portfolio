import React from "react";
import styled from "styled-components";
import { FaMarkdown, FaGithub, FaFigma, FaFileWord, FaFileExcel, FaFilePowerpoint, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostman, SiJavascript, SiTypescript, SiPython, SiAdobe, SiPostgresql, SiHtml5, SiCss3, SiTailwindcss, SiApollographql, SiJira } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

const Skills: React.FC = () => {
  return (
    <SkillsWrapper>
      <Title>Skills</Title>

      <Section>
        <SectionTitle>Technical Writing</SectionTitle>
        <SkillList>
          <SkillItem>Technical Writing & Documentation</SkillItem>
          <SkillItem>Information Architecture</SkillItem>
          <SkillItem>User Guides & Tutorials</SkillItem>
          <SkillItem>Requirements Gathering & Analysis</SkillItem>
          <SkillItem>Audience Analysis</SkillItem>
          <SkillItem>API Documentation</SkillItem>
        </SkillList>
      </Section>

      <Section>
        <SectionTitle>Documentation & Productivity Tools</SectionTitle>
        <SkillList>
          <SkillItem><IconWrapper><FaMarkdown /></IconWrapper>Markdown (README & docs)</SkillItem>
          <SkillItem><IconWrapper><FaGithub /></IconWrapper>Git / GitHub</SkillItem>
          <SkillItem><IconWrapper><SiPostman /></IconWrapper>Postman</SkillItem>
          <SkillItem><IconWrapper><FaFileWord /></IconWrapper>Microsoft Word</SkillItem>
          <SkillItem><IconWrapper><FaFileExcel /></IconWrapper>Microsoft Excel</SkillItem>
          <SkillItem><IconWrapper><FaFilePowerpoint /></IconWrapper>Microsoft PowerPoint</SkillItem>
          <SkillItem><IconWrapper><SiAdobe /></IconWrapper>Adobe Creative Suite</SkillItem>
          <SkillItem><IconWrapper><FaFigma /></IconWrapper>Figma (diagrams & mockups)</SkillItem>
        </SkillList>
      </Section>

      <Section>
  <SectionTitle>Development Tools & Languages</SectionTitle>
  <SkillList>
    <SkillItem>
      <IconWrapper><SiJavascript /></IconWrapper>
      JavaScript / <IconWrapper><SiTypescript /></IconWrapper>TypeScript / <IconWrapper><SiPython /></IconWrapper>Python
    </SkillItem>
    <SkillItem>
      <IconWrapper><FaReact /></IconWrapper>React / React Native
    </SkillItem>
    <SkillItem>
      <IconWrapper><FaNodeJs /></IconWrapper>Node.js / Express
    </SkillItem>
    <SkillItem>
      <IconWrapper><SiPostgresql /></IconWrapper>SQL / PostgreSQL
    </SkillItem>
    <SkillItem>
      <IconWrapper><SiHtml5 /></IconWrapper>HTML5 / <IconWrapper><SiCss3 /></IconWrapper>CSS3 / <IconWrapper><SiTailwindcss /></IconWrapper>Tailwind CSS
    </SkillItem>
    <SkillItem>
      <IconWrapper><SiApollographql /></IconWrapper>RESTful APIs
    </SkillItem>
    <SkillItem>
      <IconWrapper><SiJira /></IconWrapper>Agile & Scrum Methodologies
    </SkillItem>
  </SkillList>
</Section>

      <Section>
        <SectionTitle>Certifications & Notable Projects</SectionTitle>
        <SkillList>
          <SkillItem><IconWrapper><TbCertificate /></IconWrapper>Codecademy Computer Science Certificate</SkillItem>
          <SkillItem><IconWrapper><TbCertificate /></IconWrapper>Codecademy Full-Stack Development Certificate</SkillItem>
          <SkillItem>Published projects on GitHub demonstrating web & mobile applications</SkillItem>
        </SkillList>
      </Section>

      <Section>
        <SectionTitle>Languages</SectionTitle>
        <SkillList>
          <SkillItem>English (Native/Fluent)</SkillItem>
          <SkillItem>Greek (Conversational)</SkillItem>
          <SkillItem>Japanese (Basic)</SkillItem>
        </SkillList>
      </Section>
    </SkillsWrapper>
  );
};

export default Skills;

// Styled Components
const SkillsWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #113152;
`;

const SkillList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3rem 0;
  transition: transform 0.2s;
  &:hover {
    transform: translateX(3px);
  }
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
  color: #113152;
`;
