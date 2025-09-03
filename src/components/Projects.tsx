import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


// Sample project data
const projects = [
  {
    id: "inventory-manager",
    title: "Inventory Manager",
    description: "A web app to organize and track items efficiently.",
  },
  {
    id: "book-connection",
    title: "Book Connection App",
    description: "React Native app helping people connect through shared book interests.",
  },
];

const Projects: React.FC = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLink to={`/projects/${project.id}`}>View Details</ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;

const ProjectsWrapper = styled.div` /* same as before */ `;

const ProjectCard = styled.div` /* same as before */ `;

const ProjectTitle = styled.h3` /* same as before */ `;

const ProjectDescription = styled.p` /* same as before */ `;

const ProjectLink = styled(Link)`
  color: #1abc9c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;