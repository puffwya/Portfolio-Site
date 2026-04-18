import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 0 },
        background:
          "linear-gradient(180deg, #ffffff 0%, #f4f6f8 60%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND DEPTH ================= */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,0,0,0.06), transparent 65%)",
          filter: "blur(60px)",
          opacity: 0.7,
        }}
      />

      {/* SECOND glow (adds depth separation) */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,0,0,0.04), transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.6,
        }}
      />

      {/* ================= MAIN LAYOUT ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          gap: { xs: 5, md: 8 },
          zIndex: 1,
        }}
      >
        {/* ================= LEFT ================= */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Wyatt Puff
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, fontWeight: 400 }}
          >
            Systems Engineer • Game Engine Developer • Applied ML Builder
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 3,
              maxWidth: 620,
              mx: { xs: "auto", md: 0 },
              lineHeight: 1.7,
            }}
          >
            I build low-level systems and full-stack applications—from custom
            game engines and WebAssembly systems to backend APIs and ML-driven
            computer vision pipelines.
          </Typography>

          {/* SKILLS */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1,
            }}
          >
            <Chip label="C++ Systems" />
            <Chip label="Backend APIs" />
            <Chip label="WebAssembly" />
            <Chip label="Computer Vision" />
          </Box>

          {/* CTA */}
          <Box
            sx={{
              mt: 5,
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              onClick={() =>
                document
                  .getElementById("software")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Software Engineering
            </Button>

            <Button
              variant="outlined"
              onClick={() =>
                document
                  .getElementById("gamedev")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Game Development
            </Button>
          </Box>
        </Box>

        {/* ================= THUMBNAIL IMAGE ================= */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/images/LinkedIn_profilepic.jpeg`}
            alt="Wyatt Puff"
            sx={{
              width: { xs: 220, md: 340 },
              height: { xs: 220, md: 340 },
              objectFit: "cover",
              borderRadius: 4,
              border: "1px solid #eaeaea",
              boxShadow: "0 25px 70px rgba(0,0,0,0.10)",
            }}
          />
        </Box>
      </Box>

      {/* ================= DYNAMIC SCROLL CUE ================= */}
      <Box
        sx={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: scrolled ? 0 : 0.65,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            width: 18,
            height: 30,
            border: "2px solid #aaa",
            borderRadius: 10,
            position: "relative",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 4,
              backgroundColor: "#aaa",
              borderRadius: "50%",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "scrollDot 1.6s infinite",
            }}
          />
        </Box>

        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "center", mt: 1, color: "#888" }}
        >
          Scroll
        </Typography>

        <style>
          {`
            @keyframes scrollDot {
              0% { top: 6px; opacity: 1; }
              50% { opacity: 0.5; }
              100% { top: 16px; opacity: 0; }
            }
          `}
        </style>
      </Box>
    </Box>
  );
}
