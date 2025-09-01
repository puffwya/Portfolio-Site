import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Container, Button, LinearProgress, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "Astro", level: 90 },
      { name: "Material UI", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "Game Dev",
    skills: [
      { name: "Unreal Engine 5", level: 80 },
      { name: "Blueprints", level: 75 },
      { name: "Unity", level: 70 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "AWS Cloud Systems", level: 80 },
      { name: "Visual Studio", level: 80 },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5/CSS", level: 95 },    
    ],
  },
];

const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 12 }}>
      {/* Back Button */}
      <Box display="flex" justifyContent="left" mb={3}>
        <Button variant="outlined" component={Link} to="/" color="primary">
          Back to Home Page
        </Button>
      </Box>

      {/* Page Header */}
      <Box mt={6} mb={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Technical Skills
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here are some of the technologies and tools I've worked with across various projects, including frontend, backend, game 
development, and more.
        </Typography>
      </Box>

      {/* Skills Grid */}
      <Grid container spacing={4}>
        {skillsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {category.category}
                </Typography>
                {category.skills.map((skill, idx) => (
                  <Box key={idx} sx={{ mb: 1 }}>
                    <Typography variant="body2">{skill.name}</Typography>
                    <LinearProgress variant="determinate" value={skill.level} sx={{ height: 8, borderRadius: 1 }} />
                  </Box>
                ))}
              </CardContent>
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
};

export default Skills;

