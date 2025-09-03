import React from "react";
import styled from "styled-components";
import Sidebar from "./SideBar"
import MainContent from "./MainContent";

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
  background: #f8f9fa;
`;