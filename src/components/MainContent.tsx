import React, { useEffect }  from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects"
import Education from "./Education"

const MainContent: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <Content>
      <section id="about">
        <About />
      </section>
      <Line />
      <section id="skills">
        <Skills />
      </section>
      <Line />
      <section id="projects">
        <Projects />
      </section>
      <Line />
      <section id="education">
        <Education />
      </section>
    </Content>
  );
};

export default MainContent;

const Content = styled.div`
  padding: 1rem;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #113152;
`;