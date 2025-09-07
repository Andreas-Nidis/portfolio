import React, { type JSX } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiFirebase, SiReact, SiJavascript, SiTypescript } from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  "React": <FaReact />,
  "React Native": <SiReact />,
  "Node.js": <FaNodeJs />,
  "Express": <FaNodeJs />,
  "PostgreSQL": <SiPostgresql />,
  "Firebase": <SiFirebase />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <SiJavascript />,
};

// Sample project data
const projects = [
  {
    id: "inventory-manager",
    title: "Inventory Management Website",
    description: "A web app to organize and track items efficiently.",
    role: "Full-Stack Dev & Documentation",
    tech: ["JavaScript", "React", "Node.js", "PostgreSQL", "Firebase"],
    github: "https://github.com/yourusername/inventory-manager",
  },
  {
    id: "book-connection",
    title: "Book Connection App",
    description: "React Native app helping people connect through shared book interests.",
    role: "Mobile Dev & User Guides",
    tech: ["React Native"],
    github: "https://github.com/yourusername/book-connection",
  },
  {
    id: "gym-app",
    title: "Gym App",
    description: "A mobile app to organize and track workouts and diets efficiently.",
    role: "Full-Stack Mobile Dev & Technical Writer",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Firebase"],
    github: "https://github.com/yourusername/inventory-manager",
  },
];

const Projects: React.FC = () => {
  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectRole>{project.role}</ProjectRole>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechList>
            {project.tech.map((tech) => (
              <TechItem key={tech}>
                {techIcons[tech] && <IconWrapper>{techIcons[tech]}</IconWrapper>} {tech}
              </TechItem>
            ))}
          </TechList>
          <LinksWrapper>
            <ProjectLink to={`/projects/${project.id}`}>View Details</ProjectLink>
            <ExternalLink href={project.github} target="_blank">GitHub</ExternalLink>
          </LinksWrapper>
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;

// Styled Components
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

const ProjectsWrapper = styled.div` 
  margin-bottom: 4rem;
`;

const ProjectCard = styled.div`
  background: #f5f5f5;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 12px rgba(0,0,0,0.2);
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.3rem 0;
  color: #113152;
`;

const ProjectRole = styled.p`
  font-style: italic;
  color: #43607d;
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p` 
  margin: 0.3rem 0 0.5rem 0;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0;
`;

const TechItem = styled.li`
  background-color: #113152;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ProjectLink = styled(Link)`
  color: #43607d;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: #113152;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  font-size: 1rem;
  margin-right: 0.3rem;
  color: #fff;
`;
