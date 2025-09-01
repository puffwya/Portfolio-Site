import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Slider */}
      <Slider {...settings}>
        {images.map((src, i) => (
          <Box
            key={i}
            sx={{
              width: '100%',
              height: '80vh',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Slide ${i + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Slider>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.45)',
          zIndex: 1,
        }}
      />

      {/* Text and Button */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          px: 2,
          maxWidth: 800,
          width: '100%',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Fade in timeout={1000}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Hello, my name is Wyatt Puff
          </Typography>
        </Fade>
        <Fade in timeout={1500}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Software Engineer • Full Stack Developer • C++ Game Dev Enthusiast
          </Typography>
        </Fade>
        <Fade in timeout={2000}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/projects')}
            sx={{
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
              },
            }}
          >
            View My Projects
          </Button>
        </Fade>
      </Box>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;

