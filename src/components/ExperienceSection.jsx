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
          sx={{ mb: 6 }}
        >
          Professional and instructional experience building, teaching, and leading.
        </Typography>

        {/* ================= CARDS ================= */}
        <Stack spacing={4}>

          {/* ===== Freelance ===== */}
          <Card>
            <CardContent>

              <Typography variant="h6">
                Freelance Web Developer
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Northview Dental • Indianapolis, IN • Jul 2025 – Aug 2025
              </Typography>

              <ul>
                <li>Developed and deployed a responsive website using modern web technologies</li>
                <li>Improved user experience and site performance through UI and optimization 
enhancements</li>
                <li>Delivered a production-ready site tailored to client needs</li>
              </ul>

            </CardContent>
          </Card>

          {/* ===== Instructor ===== */}
          <Card>
            <CardContent>

              <Typography variant="h6">
                Coding Instructor
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                iCode Academy • Fishers, IN • Jul 2025 – Mar 2026
              </Typography>

              <ul>
                <li>Taught programming fundamentals including Python and introductory robotics</li>
                <li>Guided students through debugging, problem solving, and structured program design</li>
                <li>Fostered collaborative and hands-on learning environments</li>
              </ul>

            </CardContent>
          </Card>

          {/* ===== Coach ===== */}
          <Card>
            <CardContent>

              <Typography variant="h6">
                Track & Field Coach
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Riverside Intermediate • Fishers, IN • Mar 2026 – Present
              </Typography>

              <ul>
                <li>Designed and led structured training programs for student-athletes</li>
                <li>Mentored athletes in performance development and discipline</li>
                <li>Developed leadership and communication skills through coaching</li>
              </ul>

            </CardContent>
          </Card>

        </Stack>

      </Box>
    </Box>
  );
}
