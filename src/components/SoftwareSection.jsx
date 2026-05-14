import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from "@mui/material";

export default function SoftwareSection() {
  return (
    <Box id="software" sx={{ py: 10, px: 2 }}>

      {/* ================= HEADER ================= */}
      <Typography variant="h3" align="center" gutterBottom>
        Software Engineering
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 720, mx: "auto", lineHeight: 1.7 }}
      >
        Full-stack applications, backend systems, and API-driven architectures focused on
        scalability, maintainability, and production-style engineering workflows.
      </Typography>

      {/* ================= FEATURED PROJECT ================= */}
      <Card
        sx={{
          maxWidth: 1050,
          mx: "auto",
          mb: 6,
          p: { xs: 1, md: 2 },
          border: "1px solid #eee",
          boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
        }}
      >
        <CardContent>

          {/* ================= TITLE ================= */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Workflow Management Platform
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 3,
              maxWidth: 800,
              lineHeight: 1.7,
            }}
          >
            Full-stack SaaS-style workflow management platform built with ASP.NET Core and React, featuring JWT 
            authentication, role-based access control, project/task lifecycle management, audit logging, and 
            production-style deployment architecture.
          </Typography>

          {/* ================= MAIN LAYOUT ================= */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >

            {/* ================= LEFT CONTENT ================= */}
            <Box sx={{ flex: 2 }}>

              {/* TECH STACK */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mb: 3,
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Chip label="C#" />
                <Chip label="ASP.NET Core" />
                <Chip label="React" />
                <Chip label="Entity Framework" />
                <Chip label="PostgreSQL" />
                <Chip label="REST APIs" />
                <Chip label="Docker" />
                <Chip label="JWT Auth" />
                <Chip label="Render Deployment" />
                <Chip label="GitHub Pages" />
              </Stack>

              {/* PROJECT DETAILS */}
              <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
                <li>
                  Built full-stack workflow management platform with JWT-authenticated user access and protected routes
                </li>

                <li>
                  Implemented role-based authorization system supporting Admin, Manager, and Employee permissions
                </li>

                <li>
                  Designed relational PostgreSQL schema using Entity Framework Core with normalized project, task, and activity relationships
                </li>

                <li>
                  Developed RESTful backend APIs supporting project management, task workflows, user assignment, and status transitions
                </li>

                <li>
                  Added audit logging, validation rules, task lifecycle constraints, and project archival functionality
                </li>

                <li>
                  Deployed React frontend via GitHub Pages and containerized ASP.NET backend through Docker + Render
                </li>
              </ul>

            </Box>

            {/* ================= RIGHT PANEL ================= */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                minWidth: { md: 260 },
              }}
            >

              {/* LIVE DEMO CTA */}
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#fafafa",
                }}
              >
                <CardContent>

                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Live Deployment
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    Frontend deployed through GitHub Pages with a separately hosted Dockerized ASP.NET backend and 
                    PostgreSQL persistence layer deployed on Render.
                  </Typography>

                  <Stack spacing={1.5}>
                    <Button
                      variant="contained"
                      href="https://puffwya.github.io/WorkflowHub/#/login"
                      target="_blank"
                      fullWidth
                      sx={{
                        borderRadius: 999,
                        textTransform: "none",
                      }}
                    >
                      Live Demo
                    </Button>

                    <Button
                      variant="outlined"
                      href="https://github.com/puffwya/WorkflowHub"
                      target="_blank"
                      fullWidth
                      sx={{
                        borderRadius: 999,
                        textTransform: "none",
                      }}
                    >
                      View Source
                    </Button>
                  </Stack>

                </CardContent>
              </Card>

            </Box>

          </Box>

          {/* ================= FOOTER SIGNAL ================= */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 4,
              pt: 3,
              borderTop: "1px solid #eee",
              lineHeight: 1.7,
            }}
          >
            Demonstrates full-stack system architecture, secure API development, authentication and authorization 
            workflows, relational database design, ORM integration, audit logging systems, containerized deployment 
            pipelines, and modern frontend/backend application patterns.
          </Typography>

        </CardContent>
      </Card>

      {/* ================= BACKEND SYSTEM PROJECT ================= */}
      <Card sx={{ maxWidth: 900, mx: "auto", mb: 6, p: 2 }}>
        <CardContent>

          <Typography variant="h6" gutterBottom>
            Java Spring Boot Backend Service Architecture
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
          >
            <Chip label="Java" />
            <Chip label="Spring Boot" />
            <Chip label="REST APIs" />
            <Chip label="Layered Architecture" />
            <Chip label="Backend Systems" />
          </Stack>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Designed and implemented a modular backend e-commerce service focused on
            RESTful API design, scalable architecture, and clean service separation.
          </Typography>

          <ul style={{ paddingLeft: "18px", marginTop: 0 }}>
            <li>Built RESTful APIs for product and user management workflows</li>
            <li>Implemented layered architecture (Controller → Service → Repository)</li>
            <li>Structured backend components for maintainability and scalability</li>
            <li>Applied production-style backend design principles and separation of concerns</li>
          </ul>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Demonstrates backend engineering fundamentals, API architecture, and
            scalable service-oriented application structure.
          </Typography>

        </CardContent>
      </Card>

      {/* ================= CALORIE-APP PROJECT ================= */}
      <Card
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: 6,
          p: { xs: 1, md: 2 },
        }}
      >
        <CardContent>

          <Typography variant="h5" gutterBottom>
            Calorie Tracker — Full-Stack Data Integration System
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.7 }}
          >
            Full-stack application integrating external nutritional data APIs with
            authentication, persistent search history, and backend validation workflows.
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb: 3,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Chip label="Django" />
            <Chip label="USDA API" />
            <Chip label="Authentication" />
            <Chip label="Full Stack" />
            <Chip label="External APIs" />
          </Stack>

          <ul style={{ paddingLeft: "20px" }}>
            <li>Integrated USDA Food Database API for real-time nutrition lookup</li>
            <li>Implemented authentication and user-specific search history</li>
            <li>Built backend validation and error handling for external API responses</li>
          </ul>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              href="https://calorie-checker-staging.onrender.com/"
              target="_blank"
              sx={{
                borderRadius: 999,
                textTransform: "none",
              }}
            >
              Live Demo
            </Button>
          </Box>

        </CardContent>
      </Card>

      {/* ================= WIP PROJECT ================= */}
      <Card
        sx={{
          maxWidth: 900,
          mx: "auto",
          p: { xs: 1, md: 2 },
          border: "1.5px dashed #999",
          backgroundColor: "#fafafa",
        }}
      >
        <CardContent>

          <Typography variant="h5" gutterBottom>
            Computer Vision System for Throwing Mechanics (WIP)
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.7 }}
          >
            Developing a computer vision and biomechanical analysis pipeline using pose estimation,
            feature extraction, and machine learning workflows.
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb: 3,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Chip label="Python" />
            <Chip label="MediaPipe" />
            <Chip label="Computer Vision" />
            <Chip label="Pose Estimation" />
            <Chip label="AWS EC2" />
          </Stack>

          <ul style={{ paddingLeft: "20px" }}>
            <li>Built pose estimation pipeline using MediaPipe for skeletal tracking</li>
            <li>Extracting joint angles from video-based motion data</li>
            <li>Designing ML models for movement evaluation and performance analysis</li>
            <li>Running training workflows and experiments on AWS EC2 infrastructure</li>
          </ul>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 3 }}
          >
            In progress: evolving feature extraction into predictive biomechanical analysis.
          </Typography>

        </CardContent>
      </Card>

    </Box>
  );
}
