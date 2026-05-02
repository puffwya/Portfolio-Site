import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 10,
        py: 8,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid #eee",
        backgroundColor: "#fafafa",
      }}
    >

      {/* ================= CTA TEXT ================= */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        Let’s Connect
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: 4,
          maxWidth: 520,
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        Open to software engineering opportunities, collaboration, and systems-focused work.
      </Typography>

      {/* ================= LINK BUTTONS ================= */}
      <Stack
        direction="row"
        spacing={1.2}
        justifyContent="center"
        sx={{
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/puffwya"
          target="_blank"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            px: 2,
          }}
        >
          GitHub
        </Button>

        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/wyatt-puff/"
          target="_blank"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            px: 2,
          }}
        >
          LinkedIn
        </Button>

        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          href="mailto:puffwya000@gmail.com"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            px: 2,
          }}
        >
          Email
        </Button>
      </Stack>

      {/* ================= RESUME CTA ================= */}
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          startIcon={<DescriptionIcon />}
          href={`${process.env.PUBLIC_URL}/Wyatt_Puff_May_2026_Resume.pdf`}
          target="_blank"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            px: 3,
            py: 1,
          }}
        >
          Download Resume
        </Button>
      </Box>

      {/* ================= COPYRIGHT ================= */}
      <Typography variant="caption" color="text.secondary">
        © {new Date().getFullYear()} Wyatt Puff • Built with React
      </Typography>

    </Box>
  );
}
