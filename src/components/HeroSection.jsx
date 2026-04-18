import React from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
          gap: 6,
          alignItems: "center",
        }}
      >

        {/* ================= LEFT CONTENT ================= */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>

          {/* NAME */}
          <Typography variant="h2" fontWeight={800}>
            Wyatt Puff
          </Typography>

          {/* ROLE */}
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mt: 2, fontWeight: 500 }}
          >
            Systems Engineer • Game Engine Developer • Applied ML Builder
          </Typography>

          {/* CREDIBILITY LINE */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, opacity: 0.9 }}
          >
            B.S. Computer Science (3.93 GPA, Summa Cum Laude) • Former Division I Athlete • AWS ML 
Certified
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 3, lineHeight: 1.7, maxWidth: 650 }}
          >
            I design and build systems across multiple layers of the stack—from low-level game engines
            and real-time rendering systems to backend APIs and machine learning pipelines for computer 
vision.
          </Typography>

          {/* SKILLS */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 4,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1,
            }}
          >
            <Chip label="C++ / Engine Systems" />
            <Chip label="Backend APIs" />
            <Chip label="WebAssembly" />
            <Chip label="Computer Vision / ML" />
          </Stack>

          {/* CTA */}
          <Box sx={{ mt: 5, display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } 
}}>
            <Button
              variant="contained"
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

        {/* ================= RIGHT VISUAL ANCHOR ================= */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              p: 1,
              borderRadius: 4,
              background: "linear-gradient(135deg, #ffffff, #f5f5f5)",
              border: "1px solid #eee",
            }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/images/LinkedIn_profilepic.jpeg`}
              alt="Wyatt Puff"
              sx={{
                width: 320,
                height: 320,
                objectFit: "cover",
                borderRadius: 3,
                display: "block",
              }}
            />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
