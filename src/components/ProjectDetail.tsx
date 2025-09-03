import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const DetailWrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: #1abc9c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const projectDetails: Record<string, { title: string; description: string; docsLink?: string }> = {
  "inventory-manager": {
    title: "Inventory Manager",
    description: "Detailed info about the Inventory Manager project, screenshots, and docs.",
    docsLink: "https://github.com/yourusername/inventory-manager",
  },
  "book-connection": {
    title: "Book Connection App",
    description: "Detailed info about the Book Connection App, usage guide, and technical docs.",
    docsLink: "https://github.com/yourusername/book-connection",
  },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = id ? projectDetails[id] : undefined;

  if (!project) return <DetailWrapper>Project not found</DetailWrapper>;

  return (
    <DetailWrapper>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      {project.docsLink && (
        <a href={project.docsLink} target="_blank" rel="noopener noreferrer">
          View Documentation / GitHub
        </a>
      )}
      <BackLink to="/">← Back to Portfolio</BackLink>
    </DetailWrapper>
  );
};

export default ProjectDetail;
