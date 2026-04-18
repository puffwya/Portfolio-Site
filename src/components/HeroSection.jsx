import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 14,
        px: 2,
      }}
    >
      {/* NAME */}
      <Typography variant="h2" fontWeight="bold">
        Wyatt Puff
      </Typography>

      {/* ROLE LINE */}
      <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
        Systems Engineer • Game Engine Developer • Applied ML Builder
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mt: 3, maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
      >
        I build low-level systems and interactive software—from custom game engines and
        browser-based C++ systems to backend APIs and computer vision pipelines for real-world data analysis.
      </Typography>

      {/* SKILL STRIP */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        <Chip label="C++ Engine Development" />
        <Chip label="Backend Systems (Spring Boot / Django)" />
        <Chip label="WebAssembly Integration" />
        <Chip label="Computer Vision / ML Pipelines" />
      </Box>

      {/* CTA BUTTONS */}
      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() =>
            document.getElementById("software")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Software Engineering
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            document.getElementById("gamedev")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Game Development
        </Button>
      </Box>
    </Box>
  );
}
