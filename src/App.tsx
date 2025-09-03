import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectDetail from "./components/ProjectDetail"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
