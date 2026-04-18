import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SoftwareSection from "./components/SoftwareSection";
import GameDevSection from "./components/GameDevSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertsSection from "./components/CertsSection";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= SOFTWARE DEVELOPMENT PROJECTS ================= */}
      <SoftwareSection />

      {/* ================= GAME DEVELOPMENT PROJECTS ================= */}
      <GameDevSection />

      {/* ================= ABOUT ================= */}
      <AboutSection />

      {/* ================= EXPERIENCE ================= */}
      <ExperienceSection />

      {/* ================= EDUCATION ================= */}
      <EducationSection />

      {/* ================= CERTS ================= */}
      <CertsSection />

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
