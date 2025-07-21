import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

