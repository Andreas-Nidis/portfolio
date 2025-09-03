import React from "react";
import styled from "styled-components";



const Sidebar: React.FC = () => {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <SidebarWrapper>
            <ProfilePic src="https://media.licdn.com/dms/image/v2/D4E03AQG0oinT6GRn7A/profile-displayphoto-shrink_400_400/B4EZeSmsIGGwAg-/0/1750511305814?e=1759968000&v=beta&t=Wa5bJUpfnnLULBrrJuZbaQ1gBwTzvPRPIlPNsRyGOkM" alt="Amazing Profile Photo" />
            {/* <Name>Andreas Kalketenidis</Name> */}
            <SidebarLink onClick={() => handleScroll("about")}>About</SidebarLink>
            <SidebarLink onClick={() => handleScroll("skills")}>Skills</SidebarLink>
            <SidebarLink onClick={() => handleScroll("projects")}>Projects</SidebarLink>
            <SidebarLink onClick={() => handleScroll("education")}>Education</SidebarLink>
            <a href="https://github.com/Andreas-Nidis" style={{ color: "#ffcc00" }}>
                GitHub
            </a>
            <a href="src/assets/andreas_kalketenidis_tw_cv.pdf" target="_blank" style={{ color: "#ffcc00" }}>
                CV
            </a>
        </SidebarWrapper>
    );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background: #113152;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ProfilePic = styled.img`
  width: 165px;
  height: 165px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  margin-bottom: 1rem;
`;

// const Name = styled.h1`
//   font-size: 1.5rem;
// `;

const SidebarLink = styled.a`
  display: block; /* makes it take up full width */
  width: 100%; 
  text-align: center;
  padding: 0.5rem 1rem;

  font-size: 1.1rem;
  color: #ffffff;
  text-decoration: none;
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0a223d; /* darker than #113152 */
    border-left: 2px solid white;
    border-right: 2px solid white;
    color: #ffffff;
  }
`;




