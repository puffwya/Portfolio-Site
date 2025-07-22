import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        color: 'white',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Hello my name is Wyatt Puff
      </Typography>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Software Developer • Game Creator • Problem Solver
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate('/projects')}
      >
        View My Projects
      </Button>
    </Box>
  );
};

export default HeroSection;

