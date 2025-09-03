import React from "react";
import styled from "styled-components";



const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <ProfilePic src="your-photo.jpg" alt="Profile" />
      <Name>Andreas</Name>
      <p>Full-Stack Developer | Writer</p>
      <p>📍 Amsterdam, NL</p>
      <a href="https://github.com/yourusername" style={{ color: "#1abc9c" }}>
        GitHub
      </a>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  background: #2c3e50;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
`;