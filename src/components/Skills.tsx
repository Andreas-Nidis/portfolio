import React from "react";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #1abc9c;
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
  list-style-type: disc;
  margin-left: 1.25rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Skills: React.FC = () => {
  return (
    <SkillsWrapper>
      <Title>Skills</Title>

      <Section>
        <SectionTitle>Technical Writing</SectionTitle>
        <SkillList>
          <li>Technical Writing & Documentation</li>
          <li>Requirements Gathering & Analysis</li>
          <li>User Guide & Tutorial Creation</li>
          <li>Information Architecture</li> 
          <li>API Documentation</li>
          <li>Audience Analysis</li>
        </SkillList>
      </Section>

      <Section>
        <SectionTitle>Technical & Software Proficiency</SectionTitle>
        <SkillList>
          <li>Web & App Development (JavaScript, TypeScript, Python, PostgreSQL)</li>
          <li>Microsoft Office (Word, Excel, PowerPoint)</li>
          <li>Markdown (README & documentation)</li>
          <li>Git / GitHub</li>
          <li>Postman</li>
          <li>Figma (diagrams & mockups)</li>
          <li>Adobe Creative Suite</li>
        </SkillList>
      </Section>

      <Section>
        <SectionTitle>Languages</SectionTitle>
        <SkillList>
          <li>English (Native/Fluent)</li>
          <li>Greek (Conversational)</li>
          <li>Japanese (Basic)</li>
        </SkillList>
      </Section>
    </SkillsWrapper>
  );
};

export default Skills;
