import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const images = [
    `${process.env.PUBLIC_URL}/images/hero_img1.jpeg`,
    `${process.env.PUBLIC_URL}/images/hero_img2.jpeg`,
    `${process.env.PUBLIC_URL}/images/hero_img3.jpeg`,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
        borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Hello my name is Wyatt Puff
      </Typography>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Software Developer • Game Creator • Problem Solver
      </Typography>


      <Box sx={{ width: '100%', maxWidth: 800, mb: 4 }}>
        <Slider {...settings}>
          {images.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`Slide ${i + 1}`}
              sx={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          ))}
        </Slider>
      </Box>

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

