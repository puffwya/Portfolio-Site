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
        sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
      >
        Backend systems, full-stack applications, and API-driven architectures with a focus on
        scalability, structure, and real-world integration.
      </Typography>

      {/* ================= FEATURED PROJECT ================= */}
      <Card sx={{ maxWidth: 950, mx: "auto", mb: 6, p: 2 }}>
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
            Backend e-commerce system emphasizing API design, modular architecture,
            and service-layer separation.
          </Typography>

          <ul>
            <li>Designed RESTful APIs for product and user workflows</li>
            <li>Built layered architecture (Controller → Service → Data Access)</li>
            <li>Implemented separation of concerns for maintainability and scaling</li>
            <li>Focused on production-style backend design patterns</li>
          </ul>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Strong signal: backend architecture, system design thinking, scalable service structure.
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
            <Chip label="External APIs" />
          </Stack>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Full-stack application integrating external nutritional data with user authentication
            and persistent search tracking.
          </Typography>

          <ul>
            <li>Integrated USDA Food Database API for real-time nutrition lookup</li>
            <li>Implemented authentication and user-specific search history</li>
            <li>Built backend validation and error handling for external API responses</li>
          </ul>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              href="https://calorie-checker-staging.onrender.com/"
              target="_blank"
            >
              Live Demo
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Demonstrates full-stack integration, external API consumption, and authenticated user 
workflows.
          </Typography>

        </CardContent>
      </Card>

      {/* ================= WIP PROJECT ================= */}
      <Card
        sx={{
          maxWidth: 850,
          mx: "auto",
          p: 2,
          border: "1.5px dashed #999",
          backgroundColor: "#fafafa",
        }}
      >
        <CardContent>

          <Typography variant="h6" gutterBottom>
            Computer Vision System for Throwing Mechanics (WIP)
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
            <Chip label="Python" />
            <Chip label="MediaPipe" />
            <Chip label="Computer Vision" />
            <Chip label="Pose Estimation" />
            <Chip label="AWS EC2" />
          </Stack>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Developing a computer vision pipeline to analyze throwing mechanics using pose
            estimation and biomechanical feature extraction.
          </Typography>

          <ul>
            <li>Built pose estimation pipeline using MediaPipe for skeletal tracking</li>
            <li>Extracting joint angles from video-based motion data</li>
            <li>Designing ML models for performance and movement evaluation</li>
            <li>Running training and experiments on AWS EC2 infrastructure</li>
          </ul>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            In progress: moving from feature extraction → predictive biomechanical analysis system.
          </Typography>

        </CardContent>
      </Card>

    </Box>
  );
}
