// Skills.jsx
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom>Projects</Typography>
      <Typography paragraph>Here you can showcase all your coding projects with brief descriptions.</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>Back to Home</Button>
    </Container>
  );
}

