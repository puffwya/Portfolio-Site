import React from "react";
import { Box, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";

export default function GameDevSection() {
  return (
    <Box id="gamedev" sx={{ py: 10, px: 2 }}>

      {/* ================= HEADER ================= */}
      <Typography variant="h3" align="center" gutterBottom>
        Game Development
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Systems-focused game development projects spanning custom engines, AI, rendering, and interactive 
simulations.
      </Typography>

      {/* ================= FEATURED PROJECT ================= */}
<Card sx={{ maxWidth: 1200, mx: "auto", mb: 6, p: 2 }}>
  <CardContent>

    {/* ================= HEADER ================= */}
    <Typography variant="h3" gutterBottom>
      FurySyrge — Custom 2.5D Game Engine
    </Typography>

    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      A fully custom game engine built in C++ using SDL2, featuring BSP-based rendering,
      AI systems, and a complete gameplay pipeline.
    </Typography>

    {/* ================= MAIN LAYOUT (VIDEO + DETAILS) ================= */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: "flex-start",
        mb: 3,
      }}
    >

      {/* VIDEO (LEFT / TOP) */}
      <Box
        sx={{
          flex: 2,
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/GSVh0Qh_kss"
          title="FurySyrge Demo"
          allowFullScreen
        />
      </Box>

      {/* DETAILS (RIGHT / BOTTOM) */}
      <Box sx={{ flex: 1 }}>

        {/* Tech stack */}
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
          <Chip label="C++" />
          <Chip label="SDL2" />
          <Chip label="BSP Rendering" />
          <Chip label="Game Engine" />
          <Chip label="AI Systems" />
          <Chip label="macOS Build" />
        </Stack>

        {/* Key points */}
        <ul style={{ paddingLeft: "18px" }}>
          <li>BSP-based rendering pipeline using spatial segmentation</li>
          <li>Custom AI, collision, and player health systems</li>
          <li>Full asset pipeline (visuals + audio created from scratch)</li>
          <li>Packaged macOS builds (Intel + Apple Silicon)</li>
        </ul>

        {/* CTA BUTTON */}
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            href="https://github.com/puffwya/zwave/releases"
            target="_blank"
          >
            Download / View Release
          </Button>
        </Box>

      </Box>
    </Box>

    {/* ================= FOOTER SIGNAL ================= */}
    <Typography variant="body2" color="text.secondary">
      Demonstrates systems-level engine design, real-time rendering architecture, and full
      pipeline ownership from development to distribution.
    </Typography>

  </CardContent>
</Card>

      {/* ================= SECONDARY PROJECT ================= */}
<Card sx={{ maxWidth: 900, mx: "auto", mb: 6, p: 2 }}>
  <CardContent>

    {/* ================= HEADER ================= */}
    <Typography variant="h5" gutterBottom>
      Chess Engine — C++ & WebAssembly
    </Typography>

    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      A fully functional chess engine built in C++ with complete rule enforcement,
      AI decision-making, and browser deployment via WebAssembly.
    </Typography>

    {/* ================= TECH STACK ================= */}
    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
      <Chip label="C++" />
      <Chip label="WebAssembly" />
      <Chip label="Game AI" />
      <Chip label="Rule Engine" />
      <Chip label="Browser Integration" />
    </Stack>

    {/* ================= CONTENT LAYOUT ================= */}
    <Box sx={{ mb: 2 }}>

      <ul style={{ paddingLeft: "18px" }}>
        <li>Implemented full legal move generation and rule validation (check, checkmate, castling, etc.)</li>
        <li>Built AI opponent that selects moves programmatically</li>
        <li>Integrated engine into browser using WebAssembly for real-time play</li>
        <li>Structured architecture to support minimax + alpha-beta pruning expansion</li>
      </ul>

    </Box>

    {/* ================= CTA ================= */}
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        href="https://puffwya.github.io/Basic_Chess_Engine/"
        target="_blank"
      >
        Play Live / View Project
      </Button>
    </Box>

    {/* ================= FOOTER SIGNAL ================= */}
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      Demonstrates algorithmic thinking, rule system design, and low-level-to-web integration via WebAssembly.
    </Typography>

  </CardContent>
</Card>

      {/* ================= SUPPORTING PROJECTS ================= */}
<Card sx={{ maxWidth: 900, mx: "auto", p: 2 }}>
  <CardContent>

    <Typography variant="h6" gutterBottom>
      Additional Game Projects
    </Typography>

    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      Smaller interactive games demonstrating fundamentals in physics, state management, and gameplay logic.
    </Typography>

    {/* ================= GRID ================= */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

      {/* PACMAN */}
      <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Pac-Man Clone (Python / Pygame)
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Full arcade-style implementation with enemy pathing and collision systems.
        </Typography>

      </Box>

      {/* PONG */}
      <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Pong (C++)
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Classic arcade game with physics-based ball movement and scoring system.
        </Typography>

        <Button
          size="small"
          variant="outlined"
          href="https://puffwya.github.io/Basic_Pong_Game/"
          target="_blank"
        >
          Play / View
        </Button>
      </Box>

      {/* BLACKJACK */}
      <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Blackjack (JavaScript)
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Interactive card game with state management and UI logic.
        </Typography>

        <Button
          size="small"
          variant="outlined"
          href="https://puffwya.github.io/BlackJack-Game/"
          target="_blank"
        >
          Play / View
        </Button>
      </Box>

    </Box>

  </CardContent>
</Card>

    </Box>
  );
}
