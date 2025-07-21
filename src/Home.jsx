import React from "react";
import { Button, Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
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
          I'm a software developer focused on building modern, user-friendly web and game applications. Welcome to 
my portfolio.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
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
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
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
        </Grid>

        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
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
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Professional Portfolio • Built with React & Material UI
        </Typography>
      </Box>
    </Container>
  );
}

