import React from "react";
import { Box, Typography, Card, CardContent, Stack, Chip } from "@mui/material";

export default function EducationSection() {
  return (
    <Box id="education" sx={{ py: 10, px: 2 }}>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>

        {/* ================= HEADER ================= */}
        <Typography variant="h4" align="center" gutterBottom>
          Education
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 6, maxWidth: 650, mx: "auto" }}
        >
          Academic foundation in computer science, with emphasis on systems thinking,
          disciplined execution, and performance under pressure.
        </Typography>

        {/* ================= CARD ================= */}
        <Card
          sx={{
            border: "1px solid #eee",
            boxShadow: "none",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ py: 3 }}>

            {/* Degree */}
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              B.S. in Computer Science
            </Typography>

            {/* School + Dates */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Indiana State University • Aug 2020 – May 2025
            </Typography>

            {/* Context line */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 700 }}
            >
              Completed coursework spanning software engineering, algorithms, systems design,
              and applied computation while competing as a Division I track & field athlete.
            </Typography>

            {/* Highlights label */}
            <Typography variant="subtitle2" sx={{ mb: 1, color: "#666" }}>
              Highlights
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Chip label="GPA: 3.93" />
              <Chip label="Summa Cum Laude" />
              <Chip label="NCAA Division I Athlete" />
              <Chip label="Computer Science Degree" />
            </Stack>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}
