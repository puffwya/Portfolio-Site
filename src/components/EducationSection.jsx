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
          sx={{ mb: 6 }}
        >
          Academic background and achievements.
        </Typography>

        {/* ================= CARD ================= */}
        <Card>
          <CardContent>

            {/* Degree */}
            <Typography variant="h6">
              B.S. in Computer Science
            </Typography>

            {/* School + Dates */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Indiana State University • Aug 2020 – May 2025
            </Typography>

            {/* Highlights */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                gap: 1,
                mt: 2
              }}
            >
              <Chip label="GPA: 3.93" />
              <Chip label="Summa Cum Laude" />
              <Chip label="NCAA Track & Field Athlete" />
            </Stack>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}
