import React from "react";
import { Button, Container, Typography, Box, Card, CardContent } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hi, I'm Wyatt Puff
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
           -- a recent graduate of Indiana State University. I am an adaptable and proactive 
software 
developer with experience building full 
stack web applications, integrating APIs, and managing databases. I am well-versed in distributed systems, version 
control with Git, and Linux environments. As a former track and field athlete at Indiana State, I am driven by 
discipline and a commitment continuous improvement in both code and life.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: '120px',
          gap: 4, // space between cards
        }}
      >
        <Card elevation={3} sx={{ width: "100%", maxWidth: 400 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Projects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              See a curated list of the projects I’ve worked on.
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/projects")}>
              Explore
            </Button>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ width: "100%", maxWidth: 400 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A deeper look into my technical skills and tools I frequently use.
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/skills")}>
              View Skills
            </Button>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ width: "100%", maxWidth: 400 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              GitHub Profile
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Browse my repositories and contributions directly on GitHub.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              startIcon={<GitHubIcon />}
              href="https://github.com/puffwya"
              target="_blank"
              rel="noopener"
            >
              Open GitHub
            </Button>
          </CardContent>
        </Card>
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

