import React, { type JSX } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiFirebase, SiReact, SiJavascript, SiTypescript } from "react-icons/si";
import pinventoryThumbnail from "../assets/project_thumbnails/pinventory-thumbnail.png";
import reppleThumbnail from "../assets/project_thumbnails/repple_thumbnail.png";
// import blurbThumbnail from "../assets/project_thumbnails/blurb.png";

// Sample project data
const projects = [
  {
    id: "inventory-manager",
    title: "Pinventory",
    description: "A web app to organize and track items efficiently.",
    role: "Full-Stack Dev & Documentation",
    tech: ["JavaScript", "React", "Node.js", "PostgreSQL", "Firebase"],
    github: "https://github.com/Andreas-Nidis/pinventory",
    live: "https://pern-store-project.onrender.com",
    image: pinventoryThumbnail,
    context: "Small teams often lose track of shared equipment or office items.",
    problem: "Spreadsheets are messy, prone to errors, and hard to scale.",
    contributions: [
      "Designed database schema and API endpoints",
      "Built React front-end for CRUD operations",
      "Wrote documentation including setup guide and user manual"
    ],
    impact: "Improved item tracking efficiency, reducing missing item reports by ~40% in testing."
  },
  {
    id: "book-connection",
    title: "Blurb - Judged by the Cover",
    description: "React Native app helping people connect through shared book interests.",
    role: "Mobile Dev & User Guides",
    tech: ["JavaScript", "React Native"],
    github: "https://github.com/Andreas-Nidis/Blurb",
    live: "https://github.com/Andreas-Nidis/Blurb/blob/main/README.md#-live-demo",
    // image: blurbThumbnail,
    context: "People often struggle to meet like-minded readers offline.",
    problem: "Most social apps are too broad and lack book-specific features.",
    contributions: [
      "Built React Native onboarding flow",
      "Integrated Firebase for authentication and data storage",
      "Created user tutorials and app flow diagrams"
    ],
    impact: "Testers reported higher engagement and easier connections based on book preferences."
  },
  {
    id: "gym-app",
    title: "Repple",
    description: "A mobile app to organize and track workouts and diets efficiently.",
    role: "Full-Stack Mobile Dev & Technical Writer",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Firebase"],
    github: "https://github.com/Andreas-Nidis/repple",
    live: "https://github.com/Andreas-Nidis/repple/releases/tag/apk",
    image: reppleThumbnail,
    context: "",
    problem: "",
    contributions: [
      "Built React Native onboarding flow",
      "Integrated Firebase for authentication and data storage",
      "Created user tutorials and app flow diagrams"
    ],
    impact: "Testers reported higher engagement and easier connections based on book preferences."
  },
];

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

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <NotFound>Project not found. <StyledLink to="/#projects">Back to Projects</StyledLink></NotFound>;
  }

  return (
    <DetailsWrapper>
      {project.image && (
        <ImageLink href={project.live || project.github} target="_blank">
          <ProjectImage src={project.image} alt={project.title} />
        </ImageLink>
      )}
      <TitleLink href={project.live || project.github} target="_blank">
        {project.title}
      </TitleLink>
      <Role>{project.role}</Role>
      <Description>{project.description}</Description>

      <Section>
        <SectionTitle>Context</SectionTitle>
        <Paragraph>{project.context}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>Problem</SectionTitle>
        <Paragraph>{project.problem}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>My Contributions</SectionTitle>
        <BulletList>
          {project.contributions.map((point, idx) => <li key={idx}>{point}</li>)}
        </BulletList>
      </Section>

      <Section>
        <SectionTitle>Impact</SectionTitle>
        <Paragraph>{project.impact}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>Tech Stack</SectionTitle>
        <TechList>
          {project.tech.map((tech) => (
            <TechItem key={tech}>
              {techIcons[tech] && <IconWrapper>{techIcons[tech]}</IconWrapper>} {tech}
            </TechItem>
          ))}
        </TechList>
      </Section>

      <Section>
        <SectionTitle>Links</SectionTitle>
        <LinksWrapper>
          {project.live && <ExternalLink href={project.live} target="_blank">Live Demo</ExternalLink>}
          <ExternalLink href={project.github} target="_blank">GitHub Repository</ExternalLink>
          <StyledLink to="/#projects">Back to Projects</StyledLink>
        </LinksWrapper>
      </Section>
    </DetailsWrapper>
  );
};

export default ProjectDetails;

// Styled Components
const DetailsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem auto;
  text-align: center;
`;

const ImageLink = styled.a`
  display: block;
`;

const ProjectImage = styled.img`
  display: block;
  margin: 0 auto 1rem auto;
  height: auto;
  width: auto;
  max-width: 100%;  
  max-height: 500px; 
  border-radius: 40px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
  object-fit: contain;
`;

const TitleLink = styled.a`
  font-size: 2rem;
  color: #113152;
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const Role = styled.p`
  font-style: italic;
  color: #43607d;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 1.8rem;
  text-align: left;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #113152;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
`;

const BulletList = styled.ul`
  list-style: disc inside;
  text-align: left;
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  padding-left: 0;
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
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ExternalLink = styled.a`
  color: #113152;
  text-decoration: none;
  font-weight: 500;
  &:hover { text-decoration: underline; }
`;

const StyledLink = styled(Link)`
  color: #43607d;
  font-weight: 500;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const NotFound = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
`;

const IconWrapper = styled.span`
  font-size: 1rem;
  margin-right: 0.3rem;
  color: #fff;
`;
