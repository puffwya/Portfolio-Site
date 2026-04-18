import React from "react";
import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";

export default function AboutSection() {
  return (
    <Box id="about" sx={{ py: 10, px: 12 }}>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>

      {/* ================= TITLE ================= */}
      <Typography variant="h4" align="center" gutterBottom>
        About Me
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 5, maxWidth: 650, mx: "auto" }}
      >
        Engineer, former Division I athlete, and systems-oriented builder focused on software, structure, 
and problem solving.
      </Typography>

      {/* ================= MAIN CARD ================= */}
      <Card sx={{ p: 2 }}>
        <CardContent>

          {/* ================= BACKGROUND ================= */}
          <Typography variant="h6" gutterBottom>
            Background
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            I recently graduated from Indiana State University with a Bachelor’s in Computer Science,
            finishing summa cum laude with a 3.93 GPA. Alongside academics, I competed as a Division I
            track and field athlete, which shaped my discipline, consistency, and ability to perform under 
pressure.
          </Typography>

          {/* ================= MINDSET ================= */}
          <Typography variant="h6" gutterBottom>
            Engineering Mindset
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            My interests sit at the intersection of systems, software engineering, and applied 
computation.
            I enjoy building projects that emphasize structure, performance, and solving problems across 
multiple layers of a system.
          </Typography>

          {/* ================= EXPERIENCE ================= */}
          <Typography variant="h6" gutterBottom>
            Professional Growth
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            I’ve also worked in instructional and freelance roles that strengthened my communication,
            collaboration, and ability to work with others in technical environments.
          </Typography>

          {/* ================= HIGHLIGHTS ================= */}
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
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
              <Chip label="Systems-Oriented Engineering Mindset" />
              <Chip label="Problem Solving Focus" />
              <Chip label="Communication & Collaboration" />
            </Stack>
          </Box>

        </CardContent>
      </Card>
    </Box>
    </Box>
  );
}
