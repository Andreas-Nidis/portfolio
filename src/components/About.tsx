import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Title>Andreas Kalketenidis</Title>
      <Text>
        Hello!
      </Text>
      <Text>
        I'm Andreas, a Technical Writer and Full-Stack Developer with a passion for
        explaining complex technical topics clearly. I specialize in writing
        documentation, guides, and tutorials that make software accessible.
      </Text>
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
  border-bottom: 2px solid #ffcc00;
  display: inline-block;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;