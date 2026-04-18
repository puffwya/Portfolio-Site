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
        py: 6,
        px: 2,
        mt: 8,
        borderTop: "1px solid #ddd",
        textAlign: "center",
      }}
    >

      {/* ================= CTA ================= */}
      <Typography variant="h6" gutterBottom>
        Let’s Connect
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Open to software engineering opportunities and collaboration.
      </Typography>

      {/* ================= ACTION BUTTONS ================= */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ mb: 3 }}
      >
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/puffwya"
          target="_blank"
        >
          GitHub
        </Button>

        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/wyatt-puff/"
          target="_blank"
        >
          LinkedIn
        </Button>

        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          href="mailto:puffwya000@gmail.com"
        >
          Email
        </Button>

        <Button
          variant="contained"
          startIcon={<DescriptionIcon />}
          href={`${process.env.PUBLIC_URL}/Wyatt_Puff_April_2026_Resume.pdf`}
          target="_blank"
        >
          Resume
        </Button>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Wyatt Puff • Built with React & MUI
      </Typography>

    </Box>
  );
}
