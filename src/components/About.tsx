import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Title>Andreas Kalketenidis</Title>
      <Hook>I turn complexity into clarity.</Hook>
      <Intro>
        With a background in philosophy and hands-on coding experience, I create
        documentation that makes products easier to build, adopt, and scale.
      </Intro>

      <SectionTitle>Core Writing Strengths</SectionTitle>
      <List>
        <li>Translate APIs, apps, and workflows into clear, developer-friendly guides</li>
        <li>Bridge the gap between engineers and end users through structured docs</li>
        <li>Design information with clarity, empathy, and logical flow</li>
      </List>

      <SectionTitle>Technical Edge</SectionTitle>
      <List>
        <li>Collaborate seamlessly with web & app teams (React, Node.js, Python, SQL)</li>
        <li>Proficient with Markdown, Git, Postman, and Figma</li>
        <li>Bring an international perspective — Greek-American, based in Amsterdam</li>
      </List>

      <Closing>
        I help teams <strong>ship faster, reduce support tickets, and build trust
        with their users</strong> through clear, actionable documentation.
      </Closing>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Hook = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const Intro = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  margin: 1.5rem 0 0.5rem 0;
  color: #113152;
`;

const List = styled.ul`
  list-style: disc inside;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #000000;
  margin-bottom: 1rem;
`;

const Closing = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1.5rem;
`;
