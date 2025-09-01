import { Link } from 'react-router-dom';
import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Button
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const projects = [
  {
    title: "Chess Engine",
    image: `${process.env.PUBLIC_URL}/images/chess-engine.jpeg`,
    description: "A fully featured chess engine written using C++, HTML, JS, and CSS compiled to WebAssembly for playing in the browser.",
    link: "https://puffwya.github.io/Basic_Chess_Engine/",
    tech: ["C++", "JS", "WebAssembly"],
  },
  {
    title: "Blackjack Game",
    image: `${process.env.PUBLIC_URL}/images/blackjack.png`,
    description: "A browser-based Blackjack game built with JavaScript.",
    link: "https://puffwya.github.io/BlackJack-Game/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Calorie Tracker",
    image: `${process.env.PUBLIC_URL}/images/calorie-tracker.png`,
    description: "A Django web app that lets users search for food items and see their caloric and nutritional content using the USDA FoodData Central API.",
    link: "https://calorie-checker-staging.onrender.com/",
    tech: ["Django", "Python", "API"],
  },
  {
    title: "Pong Game",
    image: `${process.env.PUBLIC_URL}/images/pong-game.png`,
    description: "A basic pong game with Player vs Player and Player vs AI capabilities.",
    link: "https://puffwya.github.io/Basic_Pong_Game/",
    tech: ["C++", "JS", "WebAssembly"],
  },
];

export default function Projects() {
  return (
    <Container sx={{ mt: 8, mb: 12 }}>
      {/* Back Button */}
      <Box display="flex" justifyContent="left" mb={3}>
        <Button variant="outlined" component={Link} to="/" color="primary">
          Back to Home Page
        </Button>
      </Box>

      {/* Page Intro */}
      <Typography variant="h6" gutterBottom align="center">
        Here are some of the projects that I have been working on. They showcase a range of coding skills across game development, AI, and web applications.
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardActionArea onClick={() => window.open(project.link, "_blank")}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 200, objectFit: "cover", borderRadius: 1 }}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  {/* Tech Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {project.tech.map((tech, idx) => (
                      <Chip key={idx} label={tech} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          mt: 6,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Contact me: <a href="mailto:puffwya000@gmail.com">puffwya000@gmail.com</a> | (317) 628-1914
        </Typography>
        <Box sx={{ mb: 1 }}>
          <IconButton href="https://www.linkedin.com/in/wyatt-puff/" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/puffwya" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton href="mailto:puffwya000@gmail.com">
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <a
            href={`${process.env.PUBLIC_URL}/Wyatt-Puff-Resume-2025.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Wyatt Puff Portfolio • Built with React & Material UI
        </Typography>
      </Box>
    </Container>
  );
}

