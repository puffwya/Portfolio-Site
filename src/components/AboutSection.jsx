import React from "react";
import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";

export default function AboutSection() {
  return (
    <Box id="about" sx={{ py: 10, px: { xs: 2, md: 4 } }}>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>

        {/* ================= TITLE ================= */}
        <Typography variant="h4" align="center" gutterBottom>
          About Me
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 5, maxWidth: 700, mx: "auto" }}
        >
          Engineer, former Division I athlete, and systems-oriented builder focused on structure,
          performance, and problem solving across software systems.
        </Typography>

        {/* ================= MAIN CARD ================= */}
        <Card sx={{ p: 2 }}>
          <CardContent>

            {/* ================= BACKGROUND ================= */}
            <Typography variant="h6" gutterBottom>
              Background
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              I recently graduated from Indiana State University with a Bachelor’s in Computer Science,
              finishing summa cum laude with a 3.93 GPA. Outside of academics, I competed as a Division I
              track and field athlete, which reinforced discipline, consistency, and performance under 
pressure.
            </Typography>

            {/* ================= ENGINEERING MINDSET ================= */}
            <Typography variant="h6" gutterBottom>
              Engineering Mindset
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              I tend to think in systems rather than features. I enjoy building software where 
architecture,
              data flow, and performance matter just as much as functionality—whether that’s low-level 
engines,
              backend APIs, or applied machine learning pipelines.
            </Typography>

            {/* ================= WHAT DRIVES ME ================= */}
            <Typography variant="h6" gutterBottom>
              What I Focus On
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              My work gravitates toward systems that connect multiple layers—computation, data, and user 
interaction.
              I’m especially interested in building tools that analyze, simulate, or improve real-world 
performance.
            </Typography>

            {/* ================= HIGHLIGHTS ================= */}
            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
              Highlights
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Chip label="Summa Cum Laude (3.93 GPA)" />
                <Chip label="Division I Track & Field Athlete" />
                <Chip label="Systems & Architecture Focus" />
                <Chip label="Low-Level + Full-Stack Experience" />
                <Chip label="Applied ML / Computer Vision Interest" />
              </Stack>
            </Box>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}
