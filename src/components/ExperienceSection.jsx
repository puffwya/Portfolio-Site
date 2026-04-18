import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";

export default function ExperienceSection() {
  return (
    <Box id="experience" sx={{ py: 10, px: 2 }}>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>

        {/* ================= HEADER ================= */}
        <Typography variant="h4" align="center" gutterBottom>
          Experience
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 6, maxWidth: 650, mx: "auto" }}
        >
          Professional and instructional experience building, teaching, and leading.
        </Typography>

        {/* ================= TIMELINE STACK ================= */}
        <Stack spacing={3}>

          {/* ===== Freelance ===== */}
          <Card
            sx={{
              borderLeft: "4px solid #e0e0e0",
              boxShadow: "none",
              border: "1px solid #eee",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ py: 2.5 }}>

              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Freelance Web Developer
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                Northview Dental • Indianapolis, IN • Jul 2025 – Aug 2025
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Developed and deployed a responsive website using modern web technologies</li>
                <li>Improved user experience and performance through UI optimization</li>
                <li>Delivered a production-ready site tailored to client needs</li>
              </Box>

            </CardContent>
          </Card>

          {/* ===== Instructor ===== */}
          <Card
            sx={{
              borderLeft: "4px solid #e0e0e0",
              boxShadow: "none",
              border: "1px solid #eee",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ py: 2.5 }}>

              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Coding Instructor
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                iCode Academy • Fishers, IN • Jul 2025 – Mar 2026
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Taught programming fundamentals including Python and robotics</li>
                <li>Guided debugging, problem solving, and structured design</li>
                <li>Fostered collaborative, hands-on learning environments</li>
              </Box>

            </CardContent>
          </Card>

          {/* ===== Coach ===== */}
          <Card
            sx={{
              borderLeft: "4px solid #e0e0e0",
              boxShadow: "none",
              border: "1px solid #eee",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ py: 2.5 }}>

              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Track & Field Coach
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                Riverside Intermediate • Fishers, IN • Mar 2026 – Present
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Designed and led structured training programs for athletes</li>
                <li>Mentored students in performance development and discipline</li>
                <li>Developed leadership and communication skills through coaching</li>
              </Box>

            </CardContent>
          </Card>

        </Stack>

      </Box>
    </Box>
  );
}
