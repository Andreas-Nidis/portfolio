import React from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects"
import Education from "./Education"

const MainContent: React.FC = () => {
  return (
    <Content>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
    </Content>
  );
};

export default MainContent;

const Content = styled.div`
  padding: 2rem;
`;