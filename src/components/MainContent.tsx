import React from "react";
import styled from "styled-components";

const MainContent: React.FC = () => {
  return (
    <Content>
      <h2>Projects</h2>
      <ProjectCard>
        <h3>📦 Inventory Manager</h3>
        <p>A web app to organize and inventory items.</p>
        <a href="https://github.com/yourusername/inventory-manager">View on GitHub</a>
      </ProjectCard>
      <ProjectCard>
        <h3>📚 Book Connection App</h3>
        <p>React Native app helping people connect via books.</p>
        <a href="https://github.com/yourusername/book-connection">View on GitHub</a>
      </ProjectCard>
    </Content>
  );
};

export default MainContent;

const Content = styled.div`
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`;