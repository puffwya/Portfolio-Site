import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import React from "react";

import {
  Container,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const projects = [
  {
    title: "Chess Engine",
    image: "images/chess-engine.jpeg",
    description: "A fully featured chess engine written using C++.",
    link: "https://puffwya.github.io/Basic_Chess_Engine/",
  },
  {
    title: "Blackjack Game",
    image: "/images/blackjack.png",
    description: "A browser-based Blackjack game built with JavaScript.",
    link: "https://puffwya.github.io/",
  },
  {
    title: "Unreal Engine FP Demo Game",
    image: "/images/flashlight-game.png",
    description: "A first-person game built in Unreal Engine with enemy AI.",
    link: "https://github.com/puffwya/flashlight-horror",
  },
];

export default function Projects() {
  return (
    <Container sx={{ mt: 8, mb: 12 }}>
      <Box display="flex" justifyContent="left" mb={2}>
        <Button variant="outlined" component={Link} to="/" color="primary">
          Back to Home Page
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom align="center">
        Here are some of the projects that I have been working on. They showcase a range of coding skills across 
game development, AI, and web applications.
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pb="120px"
        gap={4}
        mt={4}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{ width: "100%", maxWidth: 500 }}
            elevation={3}
          >
            <CardActionArea
              onClick={() => window.open(project.link, "_blank")}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          py: 2,
          px: 2,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
          zIndex: 1300, // ensures it's above other content
        }}
      >
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Contact me at: (317) 628-1914 <a href="mailto:puffwya000@gmail.com">puffwya000@gmail.com</a>
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <a href="https://www.linkedin.com/in/wyatt-puff-6ab51a355/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/puffwya" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Wyatt Puff Portfolio • Built with React & Material UI
        </Typography>
      </Box>

    </Container>
  );
}

