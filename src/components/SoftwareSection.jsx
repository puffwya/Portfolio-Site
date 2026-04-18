import React from "react";
import { Box, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";

export default function SoftwareSection() {
  return (
    <Box id="software" sx={{ py: 10, px: 2 }}>
      
      {/* Header */}
      <Typography variant="h3" align="center" gutterBottom>
        Software Engineering
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Selected backend and full-stack projects demonstrating system design, API development, and 
scalable architecture.
      </Typography>

      {/* ================= FEATURED PROJECT ================= */}
<Card sx={{ maxWidth: 900, mx: "auto", mb: 6, p: 2 }}>
  <CardContent>

    <Typography variant="h5" gutterBottom>
      Mini Shopping Catalogue (Backend System)
    </Typography>

    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
      <Chip label="Spring Boot" />
      <Chip label="REST APIs" />
      <Chip label="Layered Architecture" />
      <Chip label="Java" />
    </Stack>

    <Typography variant="body1" sx={{ mb: 2 }}>
      Designed and implemented a backend e-commerce system focusing on API design,
      architecture structure, and service-layer separation.
    </Typography>

    {/* SYSTEM FOCUS */}
    <ul>
      <li>Designed RESTful API endpoints for product and user workflows</li>
      <li>Built layered architecture (Controller → Service → Data Access)</li>
      <li>Implemented clean separation of concerns for scalability</li>
      <li>Focused on backend system design patterns used in production services</li>
    </ul>

    {/* ENGINEERING WORK */}
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      Backend systems project demonstrating service architecture, API design principles,
      and scalable application structure.
    </Typography>

  </CardContent>
</Card>

      {/* ================= SECONDARY PROJECT ================= */}
<Card sx={{ maxWidth: 850, mx: "auto", mb: 6, p: 2 }}>
  <CardContent>

    <Typography variant="h6" gutterBottom>
      Calorie Tracker — Full-Stack Data Integration System
    </Typography>

    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
      <Chip label="Django" />
      <Chip label="USDA API" />
      <Chip label="Authentication" />
      <Chip label="Full Stack" />
      <Chip label="External Data Integration" />
    </Stack>

    <Typography variant="body1" sx={{ mb: 2 }}>
      Built a full-stack system that integrates external nutritional data APIs with user accounts,
      search logging, and structured backend validation.
    </Typography>

    <ul>
      <li>Integrated USDA Food Database API for real-time calorie and nutrition retrieval</li>
      <li>Implemented authentication system with user-specific search tracking</li>
      <li>Designed backend validation and error-handling pipeline for external API responses</li>
    </ul>

    {/* CTA (IMPORTANT ADDITION) */}
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        href="https://calorie-checker-staging.onrender.com/"
        target="_blank"
      >
        View Live App
      </Button>
    </Box>

    {/* SYSTEM SIGNAL */}
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      Demonstrates full-stack system design, external API integration, and authenticated user data workflows.
    </Typography>

  </CardContent>
</Card>

      {/* ================= WIP PROJECT ================= */}
<Card sx={{ maxWidth: 850, mx: "auto", p: 2, border: "1.5px dashed #777" }}>
  <CardContent>

    <Typography variant="h6" gutterBottom>
      Computer Vision System for Throwing Mechanics Analysis (WIP)
    </Typography>

    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
      <Chip label="Python" />
      <Chip label="MediaPipe" />
      <Chip label="Computer Vision" />
      <Chip label="Pose Estimation" />
      <Chip label="AWS EC2" />
    </Stack>

    <Typography variant="body1" sx={{ mb: 2 }}>
      Developing a computer vision pipeline that analyzes athletic throwing mechanics by
      extracting pose data and modeling joint movement patterns over time.
    </Typography>

    <ul>
      <li>Built pose estimation pipeline using MediaPipe for real-time skeletal tracking</li>
      <li>Extracting and processing joint angles from video-based motion data</li>
      <li>Designing ML models to evaluate movement efficiency and performance patterns</li>
      <li>Running experiments and model training workflows on AWS EC2 infrastructure</li>
    </ul>

    {/* IMPORTANT: keep WIP framing strong */}
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      In progress: transitioning from feature extraction pipeline → predictive performance evaluation system 
for biomechanical analysis.
    </Typography>

  </CardContent>
</Card>

    </Box>
  );
}
