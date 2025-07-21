import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Skills = () => {
  return (
    <Container maxWidth="lg">

      <Box display="flex" justifyContent="left" mb={2}>
        <Button variant="outlined" component={Link} to="/" color="primary">
          Back to Home Page
        </Button>
      </Box>

      <Box mt={6} mb={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Technical Skills
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Here are some of the technologies and tools I've worked with across various projects, including frontend, 
backend, game development, and more.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Frontend */}
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Frontend</Typography>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5 / CSS</li>
                <li>Material UI</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Backend */}
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Backend</Typography>
              <ul>
                <li>Node.js</li>
                <li>Django</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Game Dev */}
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Game Dev</Typography>
              <ul>
                <li>Unreal Engine 5</li>
                <li>Blueprints / C++</li>
                <li>Unity</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Tools */}
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Tools</Typography>
              <ul>
                <li>Git / GitHub</li>
                <li>Visual Studio</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;

