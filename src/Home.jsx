import React from "react";
import { Button, Container, Typography, Box, Card, CardContent, LinearProgress, Avatar, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import HeroSection from './components/HeroSection';

export default function Home() {
  const navigate = useNavigate();

  // Skills rankings
  const skills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 75 },
    { name: "MongoDB / SQL", level: 80 },
    { name: "APIs & Integrations", level: 85 },
    { name: "Git & Linux", level: 95 },
  ];

  const workExperience = [
    {
      title: "Coding Instructor",
      company: "iCode",
      dates: "July 2025 – Present",
      description: "Teach coding fundamentals through project-based learning for young students. Foster computational thinking and problem-solving in a collaborative environment",
      link: "https://icodeschool.com/",
    },
    {
      title: "Freelance Web Developer",
      company: "Northview Dental Indianapolis Freelance",
      dates: "July 2025 – Present",
      description: "Designed and developed a modern, responsive website for Northview Dental Indianapolis using Astro, a cutting-edge modern web framework and deployed to the Netlify platform for web hosting.",
    },
  ];

  const educationData = [
    {
      degree: "B.S. in Computer Science",
      school: "Indiana State University",
      dates: "2020 – 2025",
      honors: "Academic Honors",
      link: "https://www.indstate.edu",
    },
  ];

  const awardsData = [
    {
      title: "Academic All-American",
      organization: "Indiana State University Track and Field",
      year: "2022-25",
    },
    {
      title: "MVC Shotput Champion",
      organization: "Indiana State University Track and Field",
      year: "2025",
    },
    {
      title: "Deans List",
      organization: "Indiana State University",
      year: "2020-2025",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Avatar
            alt="Wyatt Puff"
            src={`${process.env.PUBLIC_URL}/images/LinkedIn_profilepic.jpeg`}
            sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
          />
          <Typography variant="h3" component="h1" gutterBottom>
            Hi, I'm Wyatt Puff
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            I'm a recent graduate of Indiana State University, a full-stack developer passionate about building scalable web 
applications and solving complex problems.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Former Division I track and field athlete & Academic All-American, driven by discipline, teamwork, and continuous 
improvement—both in code and life.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/projects")}
          >
            Explore My Projects
          </Button>
        </Box>
      </Container>

      {/* Work Experience Section  */}
      <Box sx={{ mt: 10, mb: 12 }}>
        <Typography variant="h4" gutterBottom align="center">
          Work Experience
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Here’s a summary of my professional experience, showcasing my ability to build, collaborate, and deliver solutions.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: 4,
          }}
        >
          {workExperience.map((job, index) => (
            <Card
              key={index}
              elevation={3}
              sx={{
                width: "100%",
                maxWidth: 400,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {job.company} • {job.dates}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.description}
                </Typography>
                {job.link && (
                  <Button
                    variant="outlined"
                    size="small"
                    href={job.link}
                    target="_blank"
                    rel="noopener"
                  >
                    Company Website
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Education Section  */}
      <Box sx={{ mt: 10, mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Education
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          A summary of my academic background and honors received.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: 4,
          }}
        >
          {educationData.map((edu, index) => (
            <Card
              key={index}
              elevation={3}
              sx={{
                width: "100%",
                maxWidth: 400,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {edu.school} • {edu.dates}
                </Typography>
                {edu.honors && (
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Honors: {edu.honors}
                  </Typography>
                )}
                {edu.link && (
                  <Button
                    variant="outlined"
                    size="small"
                    href={edu.link}
                    target="_blank"
                    rel="noopener"
                  >
                    School Website
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Achievements & Awards Section  */}
      <Box sx={{ mt: 10, mb: 12 }}>
        <Typography variant="h4" gutterBottom align="center">
          Achievements & Awards
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Recognition for academic, and athletic accomplishments.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: 4,
          }}
        >
          {awardsData.map((award, index) => (
            <Card
              key={index}
              elevation={3}
              sx={{
                width: "100%",
                maxWidth: 300,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                   transform: "translateY(-5px)",
                   boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
               }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {award.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {award.organization} • {award.year}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>


      {/* Project Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'center',
          px: 0.25,
          pb: '80px',
          gap: 2,
        }}
      >
        <Card
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 400,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Projects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              See a curated list of my full-stack projects, showcasing my technical skills and creativity.
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/projects")}>
              Explore
            </Button>
          </CardContent>
        </Card>

        <Card
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 400,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              A look into my technical stack and areas of expertise.
            </Typography>
            {skills.map((skill, idx) => (
              <Box key={idx} sx={{ mb: 1 }}>
                <Typography variant="body2">{skill.name}</Typography>
                <LinearProgress variant="determinate" value={skill.level} />
              </Box>
            ))}
            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/skills")}>
              View Skills
            </Button>
          </CardContent>
        </Card>

        <Card
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 400,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              GitHub
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Browse my repositories and contributions directly on GitHub.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
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

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: 4,
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
    </>
  );
}

